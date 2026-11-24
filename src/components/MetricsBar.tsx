import React from "react";

const METRICS = [
  {
    value: "99.9%",
    label: "Production Uptime SLA",
    tag: "SLA_GUARANTEE",
  },
  {
    value: "15+",
    label: "Microservices & Core Apps",
    tag: "SERVICE_MESH",
  },
  {
    value: "34 Provinsi",
    label: "Real-time Data Nodes",
    tag: "NATIONAL_EDGE",
  },
  {
    value: "24/7",
    label: "Automated Monitoring & SecOps",
    tag: "OBSERVABILITY",
  },
];

export function MetricsBar() {
  return (
    <section
      id="metrik"
      className="border-y border-slate-800 bg-slate-900/80 py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 transition-colors hover:border-emerald-500/40"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {metric.tag}
              </div>
              <div className="mt-2 font-mono text-3xl font-bold text-emerald-500">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
