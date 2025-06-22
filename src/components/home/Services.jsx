import { SERVICES } from "@/lib/constants";
import { Check } from "lucide-react";

const IconMap = {
  android: "fa-brands fa-android",
  sitemap: "fa-solid fa-sitemap",
  plug: "fa-solid fa-plug",
  "gauge-high": "fa-solid fa-gauge-high",
  database: "fa-solid fa-database",
  rocket: "fa-solid fa-rocket"
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Designing Solutions Customized to Meet Your Requirements
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            I provide comprehensive development services tailored to your specific needs, ensuring high-quality, scalable, and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 relative"
            >
              {/* Coming Soon Badge */}
              {service.comingSoon && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
                  Coming Soon
                </span>
              )}

              {/* Icon */}
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg text-primary">
                <i className={(IconMap[service.icon] || "fa-solid fa-question") + " text-xl"}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check className="text-primary h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
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
