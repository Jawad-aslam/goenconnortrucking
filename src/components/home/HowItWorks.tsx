import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Request a Freight Quote",
    desc: "Submit your shipment origin, destination, commodity type, weight, and pickup window online or call our Austin, TX dispatch desk directly.",
  },
  {
    n: "02",
    title: "Rate Confirmation & Truck Assignment",
    desc: "We lock in a transparent, competitive freight rate and assign a safety-inspected tractor-trailer matched to your cargo specifications.",
  },
  {
    n: "03",
    title: "Safe Pickup & Live ELD/GPS Tracking",
    desc: "Our experienced CDL drivers secure your load on schedule and provide continuous real-time GPS tracking updates throughout transit.",
  },
  {
    n: "04",
    title: "On-Time Delivery & Instant POD",
    desc: "We deliver safely at your receiving dock on schedule, immediately transmitting signed Proof of Delivery (POD) and clear documentation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-[#080d18] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              How shipping with us works
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Seamless freight transit from pickup to delivery.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              A transparent, four-step shipping process backed by direct carrier
              accountability, real-time tracking, and responsive communication at every
              mile.
            </p>

            <div className="mt-10 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-sm font-black text-amber-400">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/dispatch-office.png"
                alt="GOENCONNORTRUCKING operations desk and live GPS freight tracking"
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0b1120] p-5 shadow-xl">
              <div className="text-3xl font-black text-amber-500">24/7</div>
              <div className="text-xs text-slate-400">Live GPS & Operations Desk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
