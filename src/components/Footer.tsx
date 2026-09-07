import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18]">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-base font-black text-slate-900">
                GCT
              </span>
              <span className="text-lg font-bold">
                GOENCONNOR<span className="text-amber-500">TRUCKING</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Active Interstate Motor Carrier of Property delivering safe, on-time Full
              Truckload (FTL) and dedicated freight transportation across the United
              States.
            </p>
            <div className="mt-5 space-y-1 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-xs text-slate-300">
              <div className="font-semibold text-amber-400">
                Registered FMCSA & Public Details
              </div>
              <div>
                <span className="text-slate-500">USDOT:</span>{" "}
                <span className="font-semibold text-white">4358052</span>
              </div>
              <div>
                <span className="text-slate-500">MC Number:</span>{" "}
                <span className="font-semibold text-white">MC-1704918</span>
              </div>
              <div>
                <span className="text-slate-500">Authority:</span>{" "}
                <span className="text-slate-200">
                  Active Interstate Motor Carrier of Property
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Freight Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400">
                  Full Truckload (FTL)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400">
                  Dedicated Contract Lanes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400">
                  Expedited Freight
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400">
                  Temperature-Controlled Transit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#authority" className="hover:text-amber-400">
                  FMCSA & Safety Credentials
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-amber-400">
                  Shipping Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400">
                  Freight Solutions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/get-started" className="hover:text-amber-400">
                  Request Freight Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Registered Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <span className="block text-xs text-slate-500">Registered Email</span>
                <a
                  href="mailto:GOENCONNORTRUCKING@GMAIL.COM"
                  className="break-all font-medium text-amber-400 hover:underline"
                >
                  GOENCONNORTRUCKING@GMAIL.COM
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Registered Location</span>
                <span className="text-slate-300">Austin, TX 78704</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} GOENCONNORTRUCKING · USDOT 4358052 ·
            MC-1704918 · Austin, TX 78704
          </p>
        </div>
      </div>
    </footer>
  );
}
