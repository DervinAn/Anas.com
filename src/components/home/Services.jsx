import { SERVICES } from "@/lib/constants";
import {
  ArrowUpRight,
  Blocks,
  Database,
  Gauge,
  PlugZap,
  Rocket,
  Smartphone,
} from "lucide-react";

const IconMap = {
  android: Smartphone,
  sitemap: Blocks,
  plug: PlugZap,
  "gauge-high": Gauge,
  database: Database,
  rocket: Rocket,
};

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">What I build</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">From idea to a reliable Android product.</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-gray-600 dark:text-gray-400">
            Focused services for fast, maintainable mobile products—without unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const ServiceIcon = IconMap[service.icon] || Blocks;
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150" />
                <div className="relative flex items-start justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <ServiceIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.comingSoon && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">Planned</span>
                    )}
                    <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
                  </div>
                </div>

                <h3 className="relative text-lg font-semibold mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" aria-hidden="true" />
                </h3>
                <p className="relative text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="relative flex flex-wrap gap-2">
                  {service.items.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-[11px] text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
