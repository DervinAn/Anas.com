import { Counter } from "@/components/ui/counter";
import { COMPANIES, STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter end={stat.number} />
                {stat.suffix}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-semibold mb-8 text-center">
            More than +150 companies trusted worldwide
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {COMPANIES.map((company, index) => (
              <img 
                key={index}
                src={company.logo} 
                alt={company.name} 
                className="h-8 opacity-70 dark:opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
