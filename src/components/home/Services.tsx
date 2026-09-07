const services = [
  {
    icon: "📦",
    title: "Local & Regional Box Truck Freight",
    desc: "26' straight box truck service for local and regional freight — perfect for LTL-sized loads, partial truckloads, and single-pallet jobs that don't need a full 53' trailer.",
  },
  {
    icon: "⬆️",
    title: "Liftgate Delivery Service",
    desc: "Hydraulic liftgate-equipped straight trucks deliver directly to locations without loading docks — retail stores, restaurants, job sites, and residential addresses.",
  },
  {
    icon: "⏱️",
    title: "Same-Day & Expedited Freight",
    desc: "Priority same-day and expedited straight box truck service for urgent, time-sensitive shipments across Texas and neighboring states with guaranteed delivery windows.",
  },
  {
    icon: "🏠",
    title: "Residential & Appliance Delivery",
    desc: "Specialized straight truck service for furniture, appliances, and household goods — maneuverable in tight neighborhoods and equipped for careful inside delivery.",
  },
  {
    icon: "🏙️",
    title: "Last-Mile Urban Distribution",
    desc: "Compact 26' box trucks navigate tight city streets and loading zones — ideal for final-mile distribution to retail centers, warehouses, and downtown deliveries.",
  },
  {
    icon: "🗺️",
    title: "Texas & Regional Coverage",
    desc: "High-frequency straight truck service across Austin, Dallas-Fort Worth, Houston, San Antonio, and surrounding Texas markets with extended regional reach.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b1120] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Straight box truck services
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Safe, reliable capacity for every shipment.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            GOENCONNORTRUCKING operates a modern fleet of 26' straight box trucks
            equipped with liftgates, GPS tracking, and DOT-compliant cargo securement
            — built for local, regional, and last-mile freight across Texas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
