import React from "react";

const STACK_GROUPS = [
  {
    category: "Frontend & Web",
    code: "UI_LAYER",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & API",
    code: "SERVICE_LAYER",
    items: ["Golang", "Laravel", "Node.js", "REST / tRPC"],
  },
  {
    category: "Database & Spatial",
    code: "DATA_LAYER",
    items: ["PostgreSQL", "PostGIS", "Redis"],
  },
  {
    category: "Cloud, DevOps & Infra",
    code: "INFRA_LAYER",
    items: [
      "Kubernetes (GKE)",
      "Docker",
      "CI/CD Pipelines",
      "Hybrid Cloud & On-Premise Servers",
    ],
  },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="border-t border-slate-200 bg-white py-20 text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600">
            // CORE TECH STACK &amp; INFRASTRUKTUR
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Teknologi Modern &amp; Andal
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Standar rekayasa perangkat lunak dan infrastruktur cloud-native yang
            kami gunakan untuk menjaga performa, skalabilitas, dan keamanan data.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-emerald-500/40"
            >
              <div className="font-mono text-[11px] font-semibold text-emerald-600">
                {group.code}
              </div>
              <h3 className="mt-1.5 text-lg font-bold text-slate-900">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 font-mono text-xs text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
