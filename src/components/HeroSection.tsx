import React from "react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-tech-grid pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-slate-950" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-400">
            <span>// ENGINEERING THE FUTURE OF NATIONAL FOOD SECURITY</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Membangun Infrastruktur Digital &amp; Ekosistem Data Pangan Terintegrasi
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Divisi IT &amp; Digital Engineering{" "}
            <span className="font-semibold text-slate-100">
              PT. Agrinas Pangan Nusantara
            </span>{" "}
            merancang, mengembangkan, dan mengoperasikan platform monitoring koperasi,
            pemetaan lahan spasial (GIS), ERP/keuangan, hingga otomatisasi rantai
            pasok pangan nasional.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#ekosistem"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600"
            >
              Eksplorasi Sistem
            </a>
            <a
              href="#tech-stack"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-500/40 bg-slate-900/60 px-6 py-3 font-mono text-sm font-medium text-emerald-400 transition-all hover:border-emerald-400 hover:bg-emerald-500/10"
            >
              Tech Stack &amp; Arsitektur
            </a>
          </div>
        </div>

        {/* Right Column: Terminal / System Card */}
        <div id="status-cluster" className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl border border-emerald-500/30 bg-slate-900/95 shadow-2xl shadow-emerald-950/50">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  cluster-prod-id.json
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 sm:text-[13px]">
              <div className="text-slate-500">
                $ curl -s https://api.agrinaspangan.id/v1/health | jq
              </div>
              <pre className="mt-3 overflow-x-auto text-slate-200">
                <code>{`{
  "organization": "PT. Agrinas Pangan Nusantara",
  "division": "IT & Digital Engineering",
  "cluster": "id-jkt-prod-01",
  "status": "OPERATIONAL",
  "uptime": "99.98%",
  "active_modules": [
    "GIS-Mapping",
    "Kopdes-Monitoring",
    "E-Procurement",
    "LMS"
  ],
  "nodes_connected": 34,
  "security_posture": "RBAC + Zero-Trust"
}`}</code>
              </pre>
              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                <span>latency: 18ms (avg)</span>
                <span className="text-emerald-400">all_checks_passed: true</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
