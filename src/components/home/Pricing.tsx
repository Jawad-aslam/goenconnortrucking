import Link from "next/link";

const plans = [
  {
    name: "Spot Freight Truckload",
    fee: "FTL",
    unit: "Per-Shipment Rate",
    note: "Fast, competitive quotes for one-off or urgent Full Truckload shipments.",
    features: [
      "Direct 53' Dry Van, Reefer, or Flatbed capacity",
      "Transparent all-inclusive rate confirmations",
      "Real-time ELD/GPS tracking link included",
      "Direct communication with Austin, TX operations",
      "Instant digital Proof of Delivery (POD)",
    ],
    featured: false,
  },
  {
    name: "Dedicated Contract Lanes",
    fee: "Contract",
    unit: "Guaranteed Weekly Capacity",
    note: "Most popular for recurring regional Texas & 48-state interstate shipments.",
    features: [
      "Everything in Spot Freight Truckload",
      "Locked-in contract rates with zero seasonal spikes",
      "Guaranteed truck & driver staging at your dock",
      "Dedicated account manager & 24/7 dispatch line",
      "Drop-trailer and flexible loading window options",
      "Customized KPI & on-time performance reporting",
    ],
    featured: true,
  },
  {
    name: "Expedited & Specialized",
    fee: "Priority",
    unit: "Time-Critical Transit",
    note: "For high-value, time-sensitive, or oversized industrial freight.",
    features: [
      "Team-driver non-stop cross-country transit",
      "High-value cargo protection & insurance coverage",
      "Specialized tarping, chaining & load securement",
      "Continuous dispatch monitoring & milestone alerts",
      "Direct delivery to job sites or distribution hubs",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#080d18] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Freight shipping solutions
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Flexible capacity for your supply chain.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you need a single spot load moved today or dedicated contract
            capacity across the country, GOENCONNORTRUCKING delivers dependable
            asset-backed transportation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 ${
                p.featured
                  ? "border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent shadow-2xl shadow-amber-500/10 lg:-translate-y-4"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-slate-900">
                  MOST POPULAR FOR SHIPPERS
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-black text-white sm:text-5xl">{p.fee}</span>
                <span className="mb-1 text-sm text-slate-400">{p.unit}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{p.note}</p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-amber-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  p.featured
                    ? "bg-amber-500 text-slate-900 hover:bg-amber-400"
                    : "border border-white/20 text-white hover:border-white/50"
                }`}
              >
                Request Freight Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
