const industries = [
  "Retail & Distribution",
  "Industrial Manufacturing",
  "Food & Beverage Supply",
  "Construction Materials",
  "Automotive & Machinery",
  "Consumer Packaged Goods",
  "Texas Freight Corridors",
  "Dedicated Contract Lanes",
  "Cross-Country FTL Transit",
  "Expedited Cargo Freight",
];

export default function BrokerMarquee() {
  return (
    <section className="border-y border-white/10 bg-[#0b1120] py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Trusted by shippers, manufacturers & supply chains across the United States
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee flex w-max items-center gap-14 whitespace-nowrap">
          {[...industries, ...industries].map((b, i) => (
            <span
              key={i}
              className="text-xl font-bold text-slate-400 opacity-70 transition hover:text-amber-400 hover:opacity-100"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b1120] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b1120] to-transparent" />
      </div>
    </section>
  );
}
