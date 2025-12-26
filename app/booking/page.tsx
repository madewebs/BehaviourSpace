"use client";

import { FormEvent } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8075595509";
const DEFAULT_COUNTRY_CODE = process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || "91";
// Provide a normal personal WhatsApp number (local). We’ll auto-prefix the country code.
// Example: NEXT_PUBLIC_WHATSAPP_NUMBER=9876543210

function sanitizePhoneDigits(input: string) {
  return (input || "").replace(/[^\d]/g, "");
}

function normalizeWhatsAppNumber(input: string) {
  let d = sanitizePhoneDigits(input);

  // If 11 digits starting with 0 (e.g., 0XXXXXXXXXX), drop leading 0
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);

  // If looks like a local 10-digit number, prefix default country code
  if (d.length === 10) d = `${DEFAULT_COUNTRY_CODE}${d}`;

  // Return as-is otherwise (assumed already in intl format without '+')
  return d;
}

export default function BookingsPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const age = String(fd.get("age") || "").trim();
    const date = String(fd.get("date") || "").trim(); // YYYY-MM-DD

    const prettyDate = date
      ? new Date(date + "T00:00:00").toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

    const message = [
      "New Booking Request",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Age: ${age}`,
      `Date: ${prettyDate || date}`,
    ].join("\n");

    const recipient = normalizeWhatsAppNumber(WHATSAPP_NUMBER);
    if (!recipient) {
      alert("WhatsApp recipient number not configured. Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (use your normal personal number).");
      return;
    }

    const url = `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-5 text-lg md:text-xl">
            Please fill in the details below to book your session. We’ll confirm via WhatsApp.
          </p>
          <form onSubmit={onSubmit} className="grid gap-4 w-full max-w-xl mx-auto text-left">
            <label className="block space-y-2 w-full">
              <span className="text-md md:text-xl">Name</span>
              <input
                name="name"
                type="text"
                required
                minLength={2}
                placeholder="Full Name"
                autoComplete="name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </label>

            <label className="block space-y-2 w-full">
              <span className="text-md md:text-xl">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                autoComplete="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </label>

            <label className="block space-y-2 w-full">
              <span className="text-md md:text-xl">Phone Number</span>
              <input
                name="phone"
                type="tel"
                required
                placeholder="98XXXXXXXX"
                pattern="[\d\s()-]{7,}"
                autoComplete="tel"
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </label>

            <label className="block space-y-2 w-full">
              <span className="text-md md:text-xl">Age</span>
              <input
                name="age"
                type="number"
                required
                min={1}
                max={120}
                placeholder="30"
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </label>

            <label className="block space-y-2 w-full">
              <span className="text-md md:text-xl">Booking Date</span>
              <input
                name="date"
                type="date"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-full justify-center rounded-md bg-[#016b70] px-4 py-3 font-semibold text-white hover:bg-[#01575b] outline-none focus:outline-none"
            >
              Send to WhatsApp
            </button>
          </form>

          <p className="mt-3 text-gray-600 text-sm text-center">
            Note: This opens WhatsApp Web (desktop) or the WhatsApp app (mobile) with your message prefilled.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}