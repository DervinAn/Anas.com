import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button-simple";
import { Menu, X, Code } from "lucide-react";
import { NAVBAR_LINKS } from "@/lib/constants";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              <span className="text-primary">{ }</span> Anas.Dev
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAVBAR_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {NAVBAR_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
