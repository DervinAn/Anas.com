const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Client",
    text: "Anas was incredible to work with. He delivered a full Android app on time with great attention to UI/UX and performance.",
  },
  {
    name: "Ahmed R.",
    role: "Startup CTO",
    text: "Very professional and adaptable. The Kotlin codebase was clean, and he followed modern best practices.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400">What people I've worked with say about me.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
              <p className="text-gray-800 dark:text-gray-300 italic mb-4">"{item.text}"</p>
              <div className="text-sm font-semibold text-primary">{item.name}</div>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
