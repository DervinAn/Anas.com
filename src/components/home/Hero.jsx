import { Button } from "@/components/ui/button-simple";
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, Code } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import anasProfile from '@assets/WhatsApp Image 2025-04-04 at 16.20.25_ec8ca7b7_1743780071673.jpg';

export function Hero() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-2 flex items-center">
              <div className="h-1 w-10 bg-blue-500 mr-3"></div>
              <p className="text-sm font-medium text-blue-500">Hello! I'm Anas Namaoui, an Android developer</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Junior <span className="text-blue-500">[Android]</span><br />
              Mobile Developer<span className="text-blue-500 blink">_</span>
            </h1>
            
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
              I develop innovative Android applications with modern technologies like Kotlin, MVVM architecture, and Clean Code principles. I'm passionate about creating user-friendly mobile experiences that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors">
                <span>Get in touch</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              <Button 
                variant="ghost"
                size="sm"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium flex items-center"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>SEE MORE</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-purple-500/20 absolute inset-0 rounded-xl transform rotate-3"></div>
              <img 
                src={anasProfile} 
                alt="Anas Namaoui" 
                className="relative z-10 rounded-xl object-cover w-full max-w-md mx-auto shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg z-20">
                <Code className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
