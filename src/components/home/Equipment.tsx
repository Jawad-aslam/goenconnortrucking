const equipment = [
  {
    name: "26' Straight Box Trucks",
    desc: "Class 6 straight trucks with 16'–22' enclosed cargo boxes — perfect for local deliveries and restricted-access zones.",
  },
  {
    name: "Liftgate-Equipped Fleet",
    desc: "Hydraulic liftgates rated up to 3,000 lbs for easy pallet, appliance, and case-load loading without a dock.",
  },
  {
    name: "Non-CDL Accessible",
    desc: "26' straight trucks fall under 26,000 lb GVWR — ideal for dock-to-dock runs and urban deliveries with flexible routing.",
  },
  {
    name: "E-Track & Cargo Secured",
    desc: "Built-in E-track walls, log posts, ratchet straps, and load bars to keep every shipment tight and damage-free.",
  },
  {
    name: "Inside Cargo Dimensions",
    desc: "Approx. 16' L × 8' W × 8' H interior — roughly 1,024 cu ft of protected, weather-sealed cargo space per truck.",
  },
  {
    name: "GPS & ELD Tracked",
    desc: "Real-time ELD/GPS telematics on every box truck — live tracking, driver visibility, and automated status updates.",
  },
  {
    name: "Urban & Last-Mile Ready",
    desc: "Compact footprint lets our box trucks enter tight city streets, residential areas, and loading docks with ease.",
  },
  {
    name: "DOT-Compliant & Maintained",
    desc: "Every straight truck undergoes preventative maintenance, daily pre-trip inspections, and full FMCSA compliance checks.",
  },
];

export default function Equipment() {
  return (
    <section className="bg-[#0b1120] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Our straight box truck fleet
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Modern equipment. Maintained to DOT standards.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Dedicated to 26&apos; straight box trucks — the right tool for local,
            urban, and non-dock freight moves across Texas and beyond.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((e) => (
            <div
              key={e.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-500/40"
            >
              <span className="text-base font-bold text-white">{e.name}</span>
              <span className="mt-2 text-xs leading-relaxed text-slate-400">
                {e.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
