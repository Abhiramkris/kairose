import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, details, preferredContact } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // TODO: Connect to KaiRose CRM (HubSpot / Salesforce / Notion / Custom Webhook)
    console.log("[KaiRose Lead Capture - Consultation Request]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      projectType,
      details,
      preferredContact,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our senior design team will be in touch.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Consultation route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
