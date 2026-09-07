import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* ── Background video ── */}
      <video
        src="https://videos.pexels.com/video-files/32536402/13875217_3840_2160_24fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* ── Overlay gradients ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-[#0b1120]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-glow opacity-40" />

      {/* ── Content ── */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-16">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>USDOT #4358052 · MC-1704918 · Austin, TX 78704</span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Dependable Freight.
            <br />
            <span className="text-amber-500">Delivered On Time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            GOENCONNORTRUCKING is an Active Interstate Motor Carrier of Property
            headquartered in Austin, Texas. We deliver safe, reliable, and on-time
            Full Truckload (FTL), dedicated contract, and specialized freight
            transportation across all 48 contiguous states.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/get-started"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Request Freight Quote
            </Link>
            <a
              href="mailto:GOENCONNORTRUCKING@GMAIL.COM"
              className="rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/50"
            >
              Email Us
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              { value: "99.4%", label: "On-Time Delivery Rate" },
              { value: "48 States", label: "Interstate Authority" },
              { value: "24/7", label: "Live GPS Fleet Tracking" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-black text-white sm:text-2xl">{s.value}</div>
                <div className="mt-1 text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
