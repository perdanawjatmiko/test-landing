import React from "react";

const NAV_LINKS = [
  { label: "Ekosistem Sistem", href: "#ekosistem" },
  { label: "Arsitektur & Stack", href: "#tech-stack" },
  { label: "Infrastruktur", href: "#metrik" },
  { label: "Status Layanan", href: "#kolaborasi" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400">
            &gt;_
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-slate-100 sm:text-base">
            agrinaspangan.id
          </span>
          <span className="hidden rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-400 sm:inline-block">
            &lt;IT_DIVISION /&gt;
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#status-cluster"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-slate-900/90 px-3.5 py-2 font-mono text-xs font-medium text-emerald-400 transition-all hover:border-emerald-400/60 hover:bg-emerald-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>System Status</span>
          </a>
        </div>
      </div>
    </header>
  );
}
