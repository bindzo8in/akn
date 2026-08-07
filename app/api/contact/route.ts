import { NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/app/env";
import { contactFormSchema } from "@/lib/schemas/contact";

const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY || "re_xxxxxxxxx";
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid form data submitted.";
      return NextResponse.json(
        { success: false, error: firstError, details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, phone, email, projectType, location, area, timeline, message } = parseResult.data;

    const recipientEmail = env.RESEND_TO_EMAIL || env.NEXT_PUBLIC_EMAIL || "Aknconstruction2016@gmail.com";
    const senderEmail = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const subject = `New Project Inquiry from ${name} - ${projectType || "Consultation"}`;

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <div style="background-color: #0f172a; padding: 24px; text-align: center;">
          <h1 style="color: #38bdf8; margin: 0; font-size: 22px; font-weight: 700;">AKN Construction & Interiors</h1>
          <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 14px;">New Project Feasibility & Estimate Inquiry</p>
        </div>
        
        <div style="padding: 24px; color: #334155;">
          <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Mobile Phone:</td>
              <td style="padding: 8px 0; color: #0284c7; font-weight: 700;"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0; color: #0f172a;">${email || "Not specified"}</td>
            </tr>
          </table>

          <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Project Parameters</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Project Type:</td>
              <td style="padding: 8px 0; color: #0f172a;">${projectType || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Plot / Location:</td>
              <td style="padding: 8px 0; color: #0f172a;">${location || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Built-Up Area:</td>
              <td style="padding: 8px 0; color: #0f172a;">${area || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Timeline:</td>
              <td style="padding: 8px 0; color: #0f172a;">${timeline || "N/A"}</td>
            </tr>
          </table>

          ${
            message
              ? `
            <h2 style="font-size: 18px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Project Notes & Requirements</h2>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #0284c7; color: #334155; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
            `
              : ""
          }
        </div>

        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
          Sent automatically via Resend API from AKN Construction Website.
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email ? `${name} <${email}>` : undefined,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API Email Error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email via Resend" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact Form API Route Error:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
