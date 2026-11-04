"use client";

import React, { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you. You are now subscribed to The KaiRose Journal.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Unable to subscribe. Please try again later.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent hairline-b sm:hairline py-3 px-3 text-sm text-[#0D0E10] placeholder-[#0D0E10]/40 rounded-none focus:outline-none focus:border-[#A98A56]"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-xs uppercase tracking-[0.18em] px-6 py-3.5 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] disabled:opacity-50 cursor-pointer whitespace-nowrap"
        >
          {status === "submitting" ? "..." : "Subscribe"}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 text-xs text-[#A98A56]">
        {message}
      </div>
    </form>
  );
}
