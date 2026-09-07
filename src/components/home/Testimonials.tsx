const testimonials = [
  {
    quote:
      "GOENCONNORTRUCKING has been our primary carrier on our Austin-to-Midwest lanes. Their trucks arrive clean, on time, and their operations team sends GPS updates before we even have to ask.",
    name: "David M.",
    role: "Supply Chain Manager · Industrial Manufacturing",
  },
  {
    quote:
      "Having an asset-based motor carrier with active authority (USDOT 4358052) that answers the phone 24/7 makes our logistics team's life so much easier. Zero claims and 100% on-time delivery.",
    name: "Rachel K.",
    role: "Logistics Director · Regional Distribution",
  },
  {
    quote:
      "Whenever we have time-sensitive freight moving out of Texas, GOENCONNORTRUCKING is our first call. Professional CDL drivers, straightforward rates, and instant PODs.",
    name: "Carlos V.",
    role: "Senior Freight Coordinator · Retail Supply Chain",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#080d18] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Trusted by shippers nationwide
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            What our freight partners say.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-amber-400">★★★★★</div>
              <p className="mt-4 flex-1 text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
