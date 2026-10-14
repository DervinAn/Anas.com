import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export function EducationSection() {
  const achievements = [
    ...EDUCATION,
    ...CERTIFICATIONS.map((item) => ({ ...item, period: item.year, description: "Mentorship in leadership, project-based learning, and educational outreach." })),
  ];
  return (
    <section id="education" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">My academic education and mentorship training.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <article key={item.title} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
              <p className="text-sm font-medium text-primary mb-3">{item.period}</p>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.institution}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
