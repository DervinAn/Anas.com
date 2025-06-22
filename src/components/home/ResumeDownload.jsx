export function ResumeDownload() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          View or download a PDF version of my latest resume.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
