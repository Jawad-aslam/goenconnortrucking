"use client";

import { useState } from "react";

const equipmentOptions = [
  "53' Dry Van (FTL)",
  "Temperature-Controlled Reefer",
  "48' / 53' Flatbed",
  "Step Deck / Drop Deck",
  "Dedicated Contract Lane",
  "Expedited / Team Transit",
  "Heavy Industrial Freight",
  "Other Freight Requirement",
];

export default function GetStartedForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-10 text-center">
        <div className="text-5xl">✅</div>
        <h3 className="mt-4 text-2xl font-bold text-white">
          Freight Quote Request Received!
        </h3>
        <p className="mt-2 text-slate-300">
          Our Austin, TX operations desk has received your shipment details and will
          respond with capacity and rate confirmation shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white hover:border-white/50"
        >
          Submit Another Shipment
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-amber-500/60 focus:bg-white/[0.05]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Contact Name *
          </label>
          <input
            name="name"
            required
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Phone Number *
          </label>
          <input
            name="phone"
            required
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Work Email *
          </label>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="logistics@company.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Company / Shipper Name
          </label>
          <input
            name="company"
            className={inputClass}
            placeholder="Acme Manufacturing Inc."
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Origin → Destination
          </label>
          <input
            name="mcNumber"
            className={inputClass}
            placeholder="Austin, TX → Chicago, IL"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Trailer / Service Required *
          </label>
          <select
            name="equipmentType"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {equipmentOptions.map((o) => (
              <option key={o} value={o} className="bg-[#0b1120]">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Est. Weight / Loads
          </label>
          <input
            name="trucks"
            className={inputClass}
            placeholder="42,000 lbs / 1 FTL"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">
          Pickup Date, Commodity & Special Instructions
        </label>
        <textarea
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Include pickup date/time, commodity description, temperature requirements or dock details…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-amber-500 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting Quote Request…" : "Request Freight Quote"}
      </button>
      <p className="text-center text-xs text-slate-500">
        Direct motor carrier quote. Our Austin, TX operations desk responds promptly.
      </p>
    </form>
  );
}
