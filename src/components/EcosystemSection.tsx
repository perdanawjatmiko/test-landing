import React from "react";

const PILLARS = [
  {
    code: "MOD_01 // GEOSPATIAL",
    title: "Spatial & Land Mapping (GIS)",
    description:
      "Sistem pemetaan geospasial lahan pertanian dan analisis komoditas berbasis koordinat untuk perencanaan tanam dan distribusi presisi.",
    tags: ["PostGIS", "GeoJSON", "Coordinate Analytics"],
  },
  {
    code: "MOD_02 // FIELD_OPS",
    title: "Cooperative & Field Monitoring",
    description:
      "Portal pemantauan aktivasi koperasi, progres fisik, dan pelaporan lapangan secara real-time dari seluruh simpul daerah.",
    tags: ["Real-time Sync", "Mobile Ready", "34 Provinsi"],
  },
  {
    code: "MOD_03 // ENTERPRISE_CORE",
    title: "Enterprise ERP & E-Procurement",
    description:
      "Digitalisasi pengadaan barang/jasa, manajemen aset, dan integrasi pelaporan keuangan yang transparan dan teraudit.",
    tags: ["E-Procurement", "Asset Ledger", "Audit Trail"],
  },
  {
    code: "MOD_04 // SECURITY_OPS",
    title: "Enterprise Security & Ticketing (WBS & Portal)",
    description:
      "Sistem pelaporan terenkripsi, manajemen akses terpusat (RBAC), dan layanan helpdesk internal untuk menjaga integritas operasional.",
    tags: ["RBAC", "Encrypted WBS", "IT Helpdesk"],
  },
];

export function EcosystemSection() {
  return (
    <section id="ekosistem" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600">
            // EKOSISTEM APLIKASI &amp; SISTEM INTERNAL
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Empat Pilar Platform Digital Pangan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Arsitektur aplikasi modular yang dirancang untuk mendukung operasional
            hulu hingga hilir PT. Agrinas Pangan Nusantara.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-md"
            >
              <div>
                <div className="inline-block rounded-md bg-emerald-50 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">
                  {pillar.code}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
