import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // TODO: Connect to KaiRose Newsletter provider (Klaviyo / Mailchimp / CRM)
    console.log("[KaiRose Journal Subscription]", {
      timestamp: new Date().toISOString(),
      email,
    });

    return NextResponse.json(
      { success: true, message: "Thank you for subscribing to The KaiRose Journal." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe route error:", error);
    return NextResponse.json(
      { error: "Unable to complete subscription." },
      { status: 500 }
    );
  }
}
