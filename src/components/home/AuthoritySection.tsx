export default function AuthoritySection() {
  const details = [
    {
      label: "USDOT Number",
      value: "4358052",
      badge: "VERIFIED DOT",
      description: "Federal Motor Carrier Safety Administration USDOT registration.",
    },
    {
      label: "MC Number",
      value: "MC-1704918",
      badge: "ACTIVE DOCKET",
      description: "Operating authority docket registered for interstate freight.",
    },
    {
      label: "Operating Authority",
      value: "Active Interstate Motor Carrier of Property",
      badge: "AUTHORIZED",
      description: "Full authorization for commercial property transportation across state lines.",
    },
    {
      label: "Registered Location",
      value: "Austin, TX 78704",
      badge: "HEADQUARTERS",
      description: "Primary operational dispatch desk and carrier base in Texas.",
    },
    {
      label: "Registered Contact Email",
      value: "GOENCONNORTRUCKING@GMAIL.COM",
      badge: "DIRECT DESK",
      description: "Direct carrier packet, rate confirmation & compliance desk.",
      href: "mailto:GOENCONNORTRUCKING@GMAIL.COM",
    },
  ];

  return (
    <section id="authority" className="relative border-y border-white/10 bg-[#080d18] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              FMCSA Verified Compliance Record
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Registered FMCSA & Public Details
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Full regulatory transparency for brokers, shippers, and owner-operators.
              Verify our active interstate motor carrier credentials and direct contact
              records anytime.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:GOENCONNORTRUCKING@GMAIL.COM"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 transition hover:bg-amber-400"
            >
              Email Compliance Desk
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1120] p-6 transition hover:border-amber-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-400">
                    {item.badge}
                  </span>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block break-all text-lg font-black text-amber-400 transition hover:underline sm:text-xl"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-3 break-words text-lg font-black text-white sm:text-xl">
                    {item.value}
                  </div>
                )}

                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
