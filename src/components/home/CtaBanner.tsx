import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#080d18] pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-[#0b1120] to-[#0b1120] p-10 sm:p-16">
          <div className="grid-glow absolute inset-0 opacity-30" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
              USDOT #4358052 · MC-1704918 · Austin, TX 78704
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Need dependable truckload capacity?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Partner directly with GOENCONNORTRUCKING for safe, on-time Full
              Truckload (FTL), dedicated contract lanes, and expedited interstate
              freight shipping.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Request Freight Quote
              </Link>
              <a
                href="mailto:GOENCONNORTRUCKING@GMAIL.COM"
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-amber-500/40"
              >
                GOENCONNORTRUCKING@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
