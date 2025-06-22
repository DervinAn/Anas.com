import { ExternalLink } from "lucide-react";

const educationData = [
  // {
  //   title: "Android Developer Nanodegree",
  //   platform: "Udacity",
  //   year: "2024",
  //   description:
  //     "Completed a comprehensive Android development course covering Kotlin, Jetpack, MVVM, and Clean Architecture.",
  //   telegramUrl: "",
  //   videoUrl: "",
  //   comingSoon: false,
  // },
  // {
  //   title: "BSc in Computer Science",
  //   platform: "XYZ University",
  //   year: "2019 – 2023",
  //   description:
  //     "Studied software engineering fundamentals, data structures, and mobile application development.",
  //   telegramUrl: "",
  //   videoUrl: "",
  //   comingSoon: false,
  // },
  {
    title: "Advanced Android App Performance Optimization",
    platform: "Mobile Dev Academy",
    year: "Coming Soon",
    description:
      "Deep dive into memory management, battery optimization, and smooth UI rendering in Android apps.",
    telegramUrl: "",
    videoUrl: "",
    comingSoon: true,
  },
  {
    title: "AI in Mobile Development",
    platform: "JetBrains Academy",
    year: "Coming Soon",
    description:
      "Explore the integration of machine learning models in Android applications using Kotlin and modern libraries.",
    telegramUrl: "",
    videoUrl: "",
    comingSoon: true,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Courses and academic achievements that have shaped my journey.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {item.platform} &middot; {item.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>

              {/* Show links if available, otherwise show Coming Soon */}
              {item.comingSoon ? (
                <span className="inline-block text-xs font-semibold text-yellow-600 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              ) : (
                <div className="flex gap-4">
                  {item.telegramUrl && (
                    <a
                      href={item.telegramUrl}
                      className="inline-flex items-center text-sm text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View on Telegram
                    </a>
                  )}
                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      className="inline-flex items-center text-sm text-red-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Watch Video
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Blog Section */}
          {/* <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I share insights on Android development, mobile architecture, and career tips for developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "How I Structure My Android Projects",
                link: "",
                desc: "A deep dive into MVVM, modularization, and scalable folder structure for maintainable Android apps.",
                date: "June 2025",
                tags: ["MVVM", "Architecture"],
              },
              {
                title: "Kotlin Coroutines for Beginners",
                link: "",
                desc: "An easy guide to asynchronous programming in Android using coroutines and flows.",
                date: "May 2025",
                tags: ["Kotlin", "Coroutines"],
              },
              {
                title: "Clean Code in Android: Best Practices",
                link: "",
                desc: "Simple habits and techniques for writing clean, maintainable, and testable Android code.",
                date: "April 2025",
                tags: ["Clean Code", "Best Practices"],
              },
            ].map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col gap-2 mb-3">
                  <span className="text-sm text-gray-400 dark:text-gray-500">{post.date}</span>
                  <h4 className="text-xl font-semibold text-primary group-hover:underline">{post.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{post.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div> */}
                
      </div>
    </section>
  );
}
