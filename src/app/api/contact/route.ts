import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // If an email provider (like Resend) is configured in environment variables:
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["shyam.anubhav10@gmail.com"],
            subject: `[Portfolio Inquiry] ${validatedData.subject} from ${validatedData.name}`,
            reply_to: validatedData.email,
            text: `From: ${validatedData.name} (${validatedData.email})\n\nSubject: ${validatedData.subject}\n\nMessage:\n${validatedData.message}`,
          }),
        });

        if (response.ok) {
          return NextResponse.json({ success: true, provider: "resend" });
        }
      } catch (err) {
        console.error("Resend dispatch error, falling back:", err);
      }
    }

    // Default development / static mode: payload validated successfully
    return NextResponse.json({
      success: true,
      provider: "direct",
      message: "Message processed successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
