import { PORTFOLIO_WORKS } from "@/lib/constants";
import { Code } from "lucide-react";

export function Portfolio() {
  return (
    <section id="works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Selected Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Mobile and cross-platform solutions built around real business and community needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_WORKS.map((project) => (
            <article key={project.title} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md max-w-md w-full mx-auto">
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-6 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{project.category}</span>
                <Code className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">{tag}</span>)}
                </div>
                {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-primary hover:underline">View on GitHub</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
