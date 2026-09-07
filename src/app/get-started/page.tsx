import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetStartedForm from "@/components/GetStartedForm";

export const metadata: Metadata = {
  title: "Request Freight Quote — GOENCONNORTRUCKING · USDOT 4358052 · MC-1704918",
  description:
    "Request a straight box truck freight quote from GOENCONNORTRUCKING. USDOT 4358052 · MC-1704918 · Austin, TX 78704 · GOENCONNORTRUCKING@GMAIL.COM.",
};

const benefits = [
  "Direct asset-backed motor carrier (USDOT 4358052 · MC-1704918)",
  "Full Truckload (FTL), Dedicated & Expedited capacity",
  "53' Dry Van, Reefer & Flatbed equipment",
  "24/7 live ELD/GPS shipment visibility",
  "Fast rate confirmations & instant Proof of Delivery (POD)",
  "Full FMCSA cargo & liability insurance coverage",
];

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[#0b1120] pt-32 pb-24">
        <div className="grid-glow absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                Ship with GOENCONNORTRUCKING
              </span>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Request a Freight Quote.
              </h1>
              <p className="mt-4 text-lg text-slate-400">
                Provide your shipment origin, destination, and equipment needs below.
                Our Austin, TX operations desk will respond promptly with truck
                availability and a direct carrier rate.
              </p>

              <ul className="mt-8 space-y-3.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm text-amber-400">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Registered FMCSA & Public Details — GOENCONNORTRUCKING
                </div>
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <span className="block text-xs text-slate-500">USDOT Number</span>
                    <span className="font-bold text-white">4358052</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">MC Number</span>
                    <span className="font-bold text-white">MC-1704918</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-slate-500">Authority</span>
                    <span className="font-semibold text-white">
                      Active Interstate Motor Carrier of Property
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Location</span>
                    <span className="font-semibold text-white">Austin, TX 78704</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-slate-500">
                      Registered Contact Email
                    </span>
                    <a
                      href="mailto:GOENCONNORTRUCKING@GMAIL.COM"
                      className="break-all font-semibold text-amber-400 hover:underline"
                    >
                      GOENCONNORTRUCKING@GMAIL.COM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
