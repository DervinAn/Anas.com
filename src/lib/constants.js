import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

export const NAVBAR_LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#works", label: "Works" },
  { href: "#education", label: "Education" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];

export const STATS = [
  { number: 2, label: "Years Experience", suffix: "+" },
  { number: 3, label: "Apps Published", suffix: "+" },
  { number: 5, label: "Satisfied Clients", suffix: "+" },
  { number: 3, label: "Tech Talks Given", suffix: "+" }
];

export const COMPANIES = [
  { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "Visa", logo: "https://cdn.worldvectorlogo.com/logos/visa.svg" },
  { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" },
  { name: "Mastercard", logo: "https://cdn.worldvectorlogo.com/logos/mastercard-4.svg" },
  { name: "Tesla", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg" }
];

export const SERVICES = [
  {
    title: "Android App Development",
    icon: "android",
    description: "Building native Android applications with modern technologies and best practices for optimal performance.",
    items: [
      "Kotlin development",  
      "Material Design implementation",
      "Responsive UI across devices",
      "App performance optimization"
    ]
  },
  {
    title: "App Architecture Design",
    icon: "sitemap",
    description: "Implementing robust architecture patterns for maintainable and scalable Android applications.",
    items: [
      "MVVM architecture setup",
      "Clean Architecture implementation",
      "Modular app design",
      "Data layer optimization"
    ]
  },
  {
    title: "API Integration",
    icon: "plug",
    description: "Connecting Android apps to backend services and third-party APIs for enhanced functionality.",
    items: [
      "RESTful API integration",
      "Retrofit implementation",
      "Authentication flows",
      "Real-time data synchronization"
    ]
  },
  {
    title: "App Performance Optimization",
    icon: "gauge-high",
    description: "Improving speed, efficiency and battery usage of Android applications for better user experience.",
    items: [
      "Memory management",
      "Battery optimization",
      "Loading speed improvements",
      "Smooth animations & transitions"
    ]
  },
  {
    title: "Local Database Implementation",
    icon: "database",
    description: "Setting up efficient local storage solutions for Android applications with Room and SQLite.",
    items: [
      "Room Database implementation",
      "Entity relationship design",
      "Query optimization",
      "Data migration strategies"
    ]
  },
  {
  title: "App Publishing & Maintenance",
  icon: "rocket",
  comingSoon: true, // ← Add this flag
  description: "This service will be available soon. It includes end-to-end support for publishing and maintaining Android apps.",
  items: [
    "Google Play Store publishing",
    "App bundle optimization",
    "Version updates management",
    "Analytics integration & monitoring"
  ]
}
];

export const EMPLOYMENT_HISTORY = [
  {
    title: "Developed multiple Android applications using Kotlin",
  },
  {
    title: "Implemented MVVM and Clean Architecture in mobile applications",
  },
  {
    title: "Created custom UI components and responsive layouts for various screen sizes",
  },
  {
    title: "Integrated RESTful APIs and optimized app performance for better user experience",
  }
];

export const EDUCATION = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "University of Algiers,bechar",
    period: "2023-2026"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Android Developer Certification",
    institution: "Google Developers",
    year: "2023"
  },
  {
    title: "Kotlin Development Masterclass",
    institution: "JetBrains Academy",
    year: "2023"
  },
  {
    title: "Mobile App Architecture & Design Patterns",
    institution: "Mobile Dev Academy",
    year: "2021"
  },
  {
    title: "Steam Mentor in world learning",
    institution: "World learning",
    year: "2024"
  },
];

export const PORTFOLIO_WORKS = [
  {
    title: "Weather App",
    description: "A sleek Android weather application that provides real-time forecasts, location-based weather updates, and customizable notifications.",
    imageSrc: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["Kotlin", "MVVM", "Retrofit", "Room"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Crypto Tracker",
    description: "Android application for tracking cryptocurrency prices, portfolio management, and market trends with real-time updates.",
    imageSrc: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["Kotlin", "Clean Architecture", "API Integration", "Charts"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Real Estate App",
    description: "A comprehensive real estate application with property listings, search filters, favorites, and integrated maps for property locations.",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["Kotlin", "Firebase", "Google Maps", "Material Design"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Task Manager",
    description: "Productivity app with task scheduling, reminders, priority settings, and calendar integration for efficient time management.",
    imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["Kotlin", "Room Database", "WorkManager", "Notifications"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Note Manager",
    description: "Feature-rich note-taking application with categories, tags, search functionality, and cloud backup capabilities.",
    imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["Java", "SQLite", "Material Components", "Cloud Sync"],
    githubLink: "#",
    liveLink: "#"
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Kotlin", icon: "android", type: "brands" },
      { name: "Java", icon: "java", type: "brands" },
      { name: "XML", icon: "code", type: "solid" }
    ]
  },
  {
    category: "Architecture",
    items: [
      { name: "MVVM", icon: "layer-group", type: "solid" },
      { name: "Clean Architecture", icon: "sitemap", type: "solid" },
      { name: "Multimodule", icon: "puzzle-piece", type: "solid" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "Room", icon: "database", type: "solid" },
      { name: "SQLite", icon: "database", type: "solid" },
      { name: "Firebase", icon: "fire", type: "solid" }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Android SDK", icon: "android", type: "brands" },
      { name: "Jetpack", icon: "rocket", type: "solid" },
      { name: "Compose", icon: "paint-brush", type: "solid" }
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Git", icon: "github-alt", type: "brands" },
      { name: "REST API", icon: "server", type: "solid" },
      { name: "Material Design", icon: "palette", type: "solid" }
    ]
  }
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: "namaoui.anas2004@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Algiers, Algeria"
  },
  {
    icon: "clock",
    title: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM (GMT+1)"
  }
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/DervinAn"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/anas-namaoui"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#"
  }
];
