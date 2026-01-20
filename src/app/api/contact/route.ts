import { NextRequest, NextResponse } from "next/server";
import { db, initDb } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { ResultSetHeader } from "mysql2";

// Initialize DB on first load (optional, or call it lazily)
initDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
      // For Agency form specific fields, we might receive them too
      employees,
    } = body;

    // Combine selected services
    const serviceList: string[] = services ? [...services] : [];
    if (otherService) {
      serviceList.push(`Autre: ${otherService}`);
    }
    const servicesString = serviceList.join(", ");

    const query = `
      INSERT INTO contact 
      (name, email, phone, company, services, budget, timeline, description) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      email,
      fullPhone,
      project || "",
      servicesString,
      budget,
      startDate,
      description || "",
    ];

    try {
      const [result] = await db.execute<ResultSetHeader>(query, values);

      // Database save successful, now send email
      try {
        const emailSubject = `New Contact Form Submission from ${name}`;

        const emailHtml = `
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${fullPhone}</p>
          <p><strong>Company/Project:</strong> ${project || "N/A"}</p>
          <p><strong>Services:</strong> ${servicesString || "None"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>
          <p><strong>Timeline:</strong> ${startDate || "N/A"}</p>
          <p><strong>Employees:</strong> ${employees || "N/A"}</p>
          <p><strong>Description:</strong></p>
          <p>${
            description
              ? description.replace(/\n/g, "<br>")
              : "No description provided"
          }</p>
        `;

        await sendEmail({
          // to: defaults to 'majorellecentreaffaires@gmail.com' via lib/email.ts
          subject: emailSubject,
          html: emailHtml,
          replyTo: email,
        });

        return NextResponse.json(
          {
            success: true,
            message: "Contact saved and email sent",
            id: result.insertId,
          },
          { status: 201 }
        );
      } catch (emailError) {
        console.error(
          "⚠️ Email sending failed but DB save success:",
          emailError
        );
        // We still return success because the critical data (DB) is saved, but we warn in logs
        return NextResponse.json(
          {
            success: true,
            message: "Contact saved to database (Email failed)",
            id: result.insertId,
          },
          { status: 201 }
        );
      }
    } catch (dbError) {
      console.error("❌ Database error:", dbError);
      throw dbError; // Rethrow to be caught by outer catch
    }
  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
