import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "20723autorepair@gmail.com";
const FROM_ADDRESS = "SCV Auto Repairs <contact@scvautorepairs.com>";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

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

    // Aliases for email templates
    const firstName = fullName.split(" ")[0];
    const message = details;

    // Send both emails in parallel
    const [ownerResult, customerResult] = await Promise.all([
      // 1. Notify the owner
      resend.emails.send({
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
      }),

      // 2. Thank-you confirmation to the customer
      resend.emails.send({
        from: FROM_ADDRESS,
        to: [email],
        subject: `We received your message — SCV Auto Repairs`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #f5f5f5; border-radius: 8px;">
            <div style="border-bottom: 2px solid #dc2626; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; color: #fff; font-size: 22px;">Thanks for reaching out, ${firstName}!</h1>
              <p style="margin: 6px 0 0; color: #737373; font-size: 14px;">SCV Auto Repairs · Santa Clarita, CA</p>
            </div>

            <p style="font-size: 15px; line-height: 1.7; color: #ccc; margin: 0 0 16px;">
              We've received your message and will be in touch with you shortly. Our team typically
              responds within one business day.
            </p>

            <p style="font-size: 15px; line-height: 1.7; color: #ccc; margin: 0 0 24px;">
              If you need immediate assistance, give us a call — we're happy to help right away.
            </p>

            <a href="tel:6612512515" style="display: inline-block; background: #dc2626; color: #fff; font-weight: 600; font-size: 14px; text-decoration: none; padding: 12px 24px; border-radius: 6px;">
              Call 661-251-2515
            </a>

            <div style="margin-top: 32px; border-top: 1px solid #1a1a1a; padding-top: 20px;">
              <p style="margin: 0 0 4px; font-size: 13px; color: #737373;">
                📍 20723 Soledad Canyon Rd, Santa Clarita, CA 91351
              </p>
              <p style="margin: 0 0 4px; font-size: 13px; color: #737373;">
                🕐 Monday–Friday 7:30 AM – 4:00 PM
              </p>
              <p style="margin: 0; font-size: 13px; color: #737373;">
                ✉️ contact@scvautorepairs.com
              </p>
            </div>

            <p style="margin-top: 24px; font-size: 11px; color: #333;">
              You're receiving this because you submitted a contact form at scvautorepairs.com.
            </p>
          </div>
        `,
      }),
    ]);

    if (ownerResult.error || customerResult.error) {
      const err = ownerResult.error || customerResult.error;
      console.error("Resend error:", err);
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
