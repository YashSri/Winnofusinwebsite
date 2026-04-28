import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, phone, organization, designation, city, partnershipType, message } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 },
            );
        }

        const { error } = await resend.emails.send({
            from: "Winnofusion <onboarding@resend.dev>",
            to: ["outreach@winnovation.org"],
            subject: "New Inquiry from Winnofusion",
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Organization:</strong> ${organization || "—"}</p>
                <p><strong>Designation:</strong> ${designation || "—"}</p>
                <p><strong>City:</strong> ${city || "—"}</p>
                <p><strong>Partnership Type:</strong> ${partnershipType || "—"}</p>
                <p><strong>Message:</strong> ${message || "—"}</p>
            `,
        });

        if (error) {
            return NextResponse.json(
                { success: false, message: "Email failed" },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 },
        );
    }
}
