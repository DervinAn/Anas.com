import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_WORKS } from "@/lib/constants";

export function Portfolio() {
  return (
    <section id="works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Recent Works</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_WORKS.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm group transition-transform hover:-translate-y-1 hover:shadow-md max-w-md w-full mx-auto"
              >
                {/* Project image with overlay */}
                <div className="relative aspect-video">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-white/70 text-xs">{project.tags.join(", ")}</p>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 dark:bg-gray-800 text-[11px] px-2 py-[3px] rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-sm text-primary font-medium hover:underline flex items-center"
                    >
                      View details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>

                    <div className="flex gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-gray-400 hover:text-primary transition-colors"
                          aria-label="GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className="text-gray-400 hover:text-primary transition-colors"
                          aria-label="Live Site"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
