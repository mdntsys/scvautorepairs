import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "20723autorepair@gmail.com";
const FROM_ADDRESS = "SCV Auto Repairs <contact@scvautorepairs.com>";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    // Honeypot: a hidden "company" field that real users never see or fill.
    // Bots auto-fill it, so a non-empty value means it's spam. We pretend the
    // submission succeeded but send nothing.
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    // Support both the quick form (fullName + serviceRequested)
    // and the detailed contact page form (firstName + lastName + message)
    const fullName = body.fullName || `${body.firstName || ""} ${body.lastName || ""}`.trim();
    const { phone, email } = body;
    const details = body.serviceRequested
      ? `Service Requested: ${body.serviceRequested}`
      : body.message || "";

    if (!fullName || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and service/message are required." },
        { status: 400 }
      );
    }

    // Alias for email template
    const message = details;

    // Notify the owner only. We intentionally do NOT send a confirmation
    // email to the submitter's address — that allowed attackers to abuse
    // our Resend domain as a relay to send mail to arbitrary recipients.
    const ownerResult = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [OWNER_EMAIL],
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #f5f5f5; border-radius: 8px;">
            <div style="border-bottom: 2px solid #dc2626; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; color: #fff; font-size: 22px;">New Website Inquiry</h1>
              <p style="margin: 4px 0 0; color: #737373; font-size: 14px;">SCV Auto Repairs — scvautorepairs.com</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #737373; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #f5f5f5; font-size: 14px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #737373; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #737373; font-size: 13px;">Phone</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #dc2626;">${phone}</a></td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; background: #111111; border-left: 2px solid #dc2626; border-radius: 4px; padding: 16px;">
              <p style="margin: 0 0 8px; color: #737373; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #f5f5f5; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #444;">
              Reply directly to this email to respond to ${fullName}.
            </p>
          </div>
        `,
    });

    if (ownerResult.error) {
      console.error("Resend error:", ownerResult.error);
      return NextResponse.json(
        { error: "Failed to send message. Please call us at 661-251-2515." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us at 661-251-2515." },
      { status: 500 }
    );
  }
}
