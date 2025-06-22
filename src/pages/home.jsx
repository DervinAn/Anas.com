import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { EducationSection } from "@/components/home/EducationSection";
import { Hero } from "@/components/home/Hero";
import { Portfolio } from "@/components/home/Portfolio";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { Stats } from "@/components/home/Stats";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Testimonials } from "@/components/home/Testimonials";
import { ResumeDownload } from "@/components/home/ResumeDownload";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Experience />
        <Portfolio />
        <Skills />
         <EducationSection />
        <Testimonials />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
