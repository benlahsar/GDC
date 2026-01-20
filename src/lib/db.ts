import mysql, { Pool } from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Debana@1234',
  database: process.env.DB_NAME || 'gdc_agency_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Use a global variable to store the pool instance in development
// to avoid creating multiple pools during hot reloads.
declare global {
  var mysqlPool: Pool | undefined;
}

let pool: Pool;

if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool(dbConfig);
} else {
  if (!global.mysqlPool) {
    global.mysqlPool = mysql.createPool(dbConfig);
  }
  pool = global.mysqlPool;
}

export const db = pool;

export const initDb = async (): Promise<void> => {
  try {
    // Check if table exists
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
    
    const connection = await pool.getConnection();
    await connection.query(createTableQuery);
    connection.release();
    
    console.log('✅ Database table checked/created.');
  } catch (error) {
    console.error('❌ Error initializing database table:', error);
  }
};
