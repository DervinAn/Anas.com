import { CheckCircle } from "lucide-react";
import { CERTIFICATIONS, EDUCATION, EMPLOYMENT_HISTORY } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            2+ years of passion for programming techniques
          </h2>
          {/* <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <img src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" alt="Google" className="w-4 h-4" />
              <span className="text-sm">Google</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <i className="fa-brands fa-twitter text-[#1DA1F2]"></i>
              <span className="text-sm">Twitter</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" alt="Meta" className="w-4 h-4" />
              <span className="text-sm">Meta</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <i className="fa-brands fa-amazon text-[#FF9900]"></i>
              <span className="text-sm">Amazon</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <i className="fa-brands fa-paypal text-[#00457C]"></i>
              <span className="text-sm">PayPal</span>
            </div>
          </div> */}
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Junoir Software Engineer</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {EMPLOYMENT_HISTORY.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 gap-y-6 mt-4 md:mt-0">
              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="ml-8 relative timeline-item pl-4">
                    <div className="timeline-dot"></div>
                    <h4 className="font-medium">{edu.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.institution}, {edu.period}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Certifications */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                <div className="space-y-4 ml-8">
                  {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="relative timeline-item pl-4">
                      <div className="timeline-dot"></div>
                      <h4 className="font-medium">{cert.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.institution}, {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
