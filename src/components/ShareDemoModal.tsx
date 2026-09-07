"use client";

import { useEffect, useState } from "react";

export default function ShareDemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [siteUrl, setSiteUrl] = useState("https://3000-i22q32cukiqalrg68jjqg.e2b.app");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location?.origin) {
      setSiteUrl(window.location.origin);
    }
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // Fallback
    }
  };

  const copyCarrierCard = async () => {
    const summary = [
      "GOENCONNORTRUCKING — Active Interstate Motor Carrier of Property",
      "USDOT Number: 4358052",
      "MC Number: MC-1704918",
      "Registered Contact Email: GOENCONNORTRUCKING@GMAIL.COM",
      "Location: Austin, TX 78704",
      `Live Website & Carrier Portal: ${siteUrl}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedCard(true);
      setTimeout(() => setCopiedCard(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950"
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share Demo
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0b1120] p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live Shareable Demo Link
            </div>

            <h3 className="mt-3 text-2xl font-black text-white">
              Share GOENCONNORTRUCKING
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Anyone with this link can view your full website, verify your FMCSA
              authority, and submit loads or onboarding requests.
            </p>

            {/* Direct Link Box */}
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Public Demo URL
              </label>
              <div className="mt-1.5 flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={siteUrl}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs font-mono text-amber-300 outline-none"
                />
                <button
                  onClick={copyLink}
                  className="shrink-0 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-amber-400"
                >
                  {copiedUrl ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>

            {/* Copy Full FMCSA Carrier Card + Link */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  FMCSA Carrier Summary + Link
                </span>
                <button
                  onClick={copyCarrierCard}
                  className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 transition hover:bg-amber-500 hover:text-slate-900"
                >
                  {copiedCard ? "✓ Copied Summary" : "Copy All Details"}
                </button>
              </div>
              <div className="mt-2 space-y-1 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500">Carrier:</span> GOENCONNORTRUCKING
                </div>
                <div>
                  <span className="text-slate-500">USDOT:</span> 4358052 ·{" "}
                  <span className="text-slate-500">MC:</span> MC-1704918
                </div>
                <div>
                  <span className="text-slate-500">Authority:</span> Active Interstate
                  Motor Carrier of Property
                </div>
                <div>
                  <span className="text-slate-500">Location:</span> Austin, TX 78704
                </div>
                <div className="truncate">
                  <span className="text-slate-500">Email:</span>{" "}
                  GOENCONNORTRUCKING@GMAIL.COM
                </div>
              </div>
            </div>

            {/* QR Code & Direct Share Actions */}
            <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row">
              <div className="flex items-center gap-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                    siteUrl
                  )}`}
                  alt="QR Code for Demo Link"
                  className="h-16 w-16 rounded-lg border border-white/15 bg-white p-1"
                />
                <div>
                  <div className="text-xs font-bold text-white">Scan on Mobile</div>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Point your phone camera at the QR code to open the live demo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
