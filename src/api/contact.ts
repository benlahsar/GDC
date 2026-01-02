import express from 'express';
import mysql, { Pool, ResultSetHeader } from 'mysql2/promise';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

const dbName = process.env.DB_NAME || 'gdc_agency';

// Global pool variable (EXPLICITLY TYPED)
let pool: Pool | null = null;

// Initialize Database (Create DB if missing, then Table)
const initDb = async (): Promise<void> => {
  try {
    // 1. Connect to MySQL server (without selecting DB)
    const connection = await mysql.createConnection(dbConfig);

    // 2. Create Database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await connection.end();

    // 3. Create Connection Pool for the specific Database
    pool = mysql.createPool({
      ...dbConfig,
      database: dbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // 4. Create Table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        services TEXT,
        budget VARCHAR(100),
        timeline VARCHAR(100),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const poolConnection = await pool.getConnection();
    await poolConnection.query(createTableQuery);
    poolConnection.release();

    console.log(`✅ Database '${dbName}' and table 'contact' are ready.`);
  } catch (err) {
    console.error('❌ Error initializing database:', err);
  }
};

// Run initialization
initDb();

// API Endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  if (!pool) {
    return res
      .status(500)
      .json({ success: false, message: 'Database not initialized yet.' });
  }

  const {
    name,
    email,
    fullPhone,
    project,
    services,
    otherService,
    budget,
    startDate,
    description,
  } = req.body;

  // Combine selected services
  const serviceList: string[] = services ? [...services] : [];
  if (otherService) {
    serviceList.push(`Autre: ${otherService}`);
  }
  const servicesString = serviceList.join(', ');

  try {
    const query = `
      INSERT INTO contact 
      (name, email, phone, company, services, budget, timeline, description) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      email,
      fullPhone,
      project || '',
      servicesString,
      budget,
      startDate,
      description || '',
    ];

    // 🔥 THIS IS THE IMPORTANT FIX 🔥
    const [result] = await pool.execute<ResultSetHeader>(query, values);

    console.log(`📝 New contact saved with ID: ${result.insertId}`);

    return res.status(201).json({
      success: true,
      message: 'Contact saved to database',
      id: result.insertId,
    });
  } catch (error) {
    console.error('❌ Server error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Internal Database Error' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend server running at http://localhost:${port}`);
});
