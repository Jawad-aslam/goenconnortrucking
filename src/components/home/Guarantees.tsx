const guarantees = [
  {
    title: "Direct Asset Carrier",
    desc: "You work directly with an active FMCSA motor carrier (USDOT 4358052 · MC-1704918)—zero double-brokering or unauthorized hand-offs.",
  },
  {
    title: "Strict DOT & FMCSA Safety",
    desc: "Every tractor and trailer undergoes rigorous preventative maintenance, pre-trip inspections, and full Hours-of-Service compliance.",
  },
  {
    title: "24/7 Live GPS Visibility",
    desc: "Track your cargo in real time with continuous ELD/GPS telemetry and direct access to our Austin, TX operations desk.",
  },
  {
    title: "Fully Licensed & Insured",
    desc: "Comprehensive motor truck cargo and auto liability insurance protecting your freight from pickup dock to final delivery.",
  },
];

export default function Guarantees() {
  return (
    <section id="guarantees" className="bg-[#0b1120] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Why shippers choose us
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Carrier commitments you can rely on.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="text-4xl font-black text-amber-500/40">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-bold text-white">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
