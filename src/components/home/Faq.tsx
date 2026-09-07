"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What are GOENCONNORTRUCKING's official FMCSA credentials?",
    a: "GOENCONNORTRUCKING is an Active Interstate Motor Carrier of Property registered with the Federal Motor Carrier Safety Administration under USDOT Number 4358052 and MC Number MC-1704918, headquartered in Austin, TX 78704.",
  },
  {
    q: "How quickly can I receive a freight quote or rate confirmation?",
    a: "Our operations desk in Austin, TX responds to quote requests within 15–30 minutes during business hours and monitors urgent requests 24/7. Email us directly at GOENCONNORTRUCKING@GMAIL.COM for immediate spot capacity.",
  },
  {
    q: "What geographic regions and lanes do you cover?",
    a: "We hold active interstate operating authority across all 48 contiguous states, with high-frequency Full Truckload (FTL) capacity originating from and delivering into Texas (Austin, Dallas-Fort Worth, Houston, San Antonio) and major national freight corridors.",
  },
  {
    q: "Do you provide real-time GPS tracking on shipments?",
    a: "Yes. Every tractor in our fleet is equipped with compliant ELD and real-time GPS telemetry. We provide live tracking links and automated milestone check-calls from pickup through delivery.",
  },
  {
    q: "What cargo and liability insurance coverage do you carry?",
    a: "We maintain full FMCSA-compliant commercial auto liability and motor truck cargo insurance. Certificates of Insurance (COI) naming your company as certificate holder are provided immediately upon onboarding.",
  },
  {
    q: "How do I book a truck or set up a dedicated shipping lane?",
    a: "Simply click 'Request Freight Quote' on our site or email our compliance desk at GOENCONNORTRUCKING@GMAIL.COM to set up your shipper packet and schedule pickup.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0b1120] py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Shipping questions, answered.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{f.q}</span>
                <span
                  className={`text-2xl text-amber-500 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
