import { Link } from "wouter";
import { NAVBAR_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gray-800 dark:text-white">
                <span className="text-primary">{ }</span> Anas.Dev
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-6">
            {NAVBAR_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label.replace("Me", "")}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Anas.Dev. All rights reserved. <span className="italic">powered by Meraki.inc</span>
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
