import React from "react";

const FOOTER_LINKS = [
  { label: "System Status", href: "#status-cluster" },
  { label: "API Docs", href: "#kolaborasi" },
  { label: "Security Policy", href: "#ekosistem" },
  { label: "Internal Portal", href: "#" },
];

export function CtaFooter() {
  return (
    <>
      <section id="kolaborasi" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/30 p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold text-emerald-400">
                // COLLABORATION &amp; DEVELOPER SUPPORT
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ingin Berkolaborasi atau Butuh Dukungan Integrasi Sistem?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Akses dokumentasi API internal, panduan integrasi mitra, atau
                hubungi tim IT Helpdesk untuk dukungan teknis dan manajemen akses
                sistem.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#status-cluster"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-600"
                >
                  Buka Dokumentasi API
                </a>
                <a
                  href="mailto:it-helpdesk@agrinaspangan.id"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-500/40 bg-slate-900/70 px-5 py-2.5 font-mono text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-500/10"
                >
                  Hubungi IT Helpdesk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="font-mono text-sm font-semibold text-slate-200">
              IT Division — agrinaspangan.id
            </div>
            <p className="mt-1 text-xs text-slate-500">
              &copy; 2026 PT. Agrinas Pangan Nusantara. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
