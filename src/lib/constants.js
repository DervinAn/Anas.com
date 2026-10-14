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
  {
    "number": 3,
    "label": "Years Experience",
    "suffix": "+"
  },
  {
    "number": 5,
    "label": "Selected Projects",
    "suffix": ""
  },
  {
    "number": 2,
    "label": "Client Projects Delivered",
    "suffix": ""
  },
  {
    "number": 10,
    "label": "Client Discovery Meetings",
    "suffix": "+"
  }
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
    "title": "Freelance Android Developer | Remote | 2024 - Present. Delivering Kotlin applications across finance, real estate, and productivity using MVVM and Clean Architecture."
  },
  {
    "title": "Co-Founder, Qimora Agency | May 2025 - Present. Co-founded a software agency serving startups and small businesses."
  },
  {
    "title": "Led 10-15 client discovery meetings and delivered two end-to-end client projects, translating feedback into business value."
  },
  {
    "title": "Integrated REST APIs, Firebase, Room/SQLite, and cloud services; improved performance through modular design and helped evolve a business application into a multi-tenant SaaS platform."
  }
];

export const EDUCATION = [
  {
    "title": "Master’s in Strategic Management of Information Systems",
    "institution": "École Nationale Supérieure de Management (ENSM), Koléa, Tipaza, Algeria",
    "period": "Currently studying",
    "description": "Graduate studies combining information systems, organizational strategy, and management."
  },
  {
    "title": "Bachelor of Computer Science with Honours",
    "institution": "University of Tahri Mohamed Béchar, Algeria",
    "period": "Aug 2023 - Oct 2026",
    "description": "Thesis: “AI-Powered Medical Diagnosis Application Using MVVM Architecture.”"
  }
];

export const CERTIFICATIONS = [
  {
    "title": "Diploma in STEAM Mentorship",
    "institution": "World Learning",
    "year": "May 2024"
  }
];

export const PORTFOLIO_WORKS = [
  {
    "title": "RepaNova POS - Retail ERP SaaS",
    "description": "A cross-platform retail system covering sales, inventory, customers, repairs, debt, and finance. Refined through a four-month client feedback cycle, tested across environments, and adapted for multi-tenant SaaS use.",
    "tags": [
      "Kotlin",
      "Compose Multiplatform",
      "Firebase",
      "Cloudflare R2"
    ],
    "category": "Retail & SaaS"
  },
  {
    "title": "Entrepreneur Networking Platform",
    "description": "Connects entrepreneurs, investors, and suppliers with authentication, profiles, messaging, cloud synchronization, and file storage.",
    "tags": [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Cloudflare R2"
    ],
    "category": "Networking"
  },
  {
    "title": "Law App - Legal Consultation Platform",
    "description": "An MVP for consultation requests, document uploads, case tracking, and communication between clients and lawyers.",
    "tags": [
      "MVP",
      "Legal Consultation",
      "Case Tracking"
    ],
    "category": "Legal services",
    "githubLink": "https://github.com/mxd0-0/LawApp"
  },
  {
    "title": "Bio Fresh - Food Waste App",
    "description": "An Android app for real-time food waste reduction, recognized by World Learning Algeria for social impact and technical innovation.",
    "tags": [
      "Jetpack Compose",
      "Firebase",
      "Social Impact"
    ],
    "category": "Sustainability",
    "githubLink": "https://github.com/DervinAn/FWA"
  },
  {
    "title": "Smart TV App - University",
    "description": "An Android TV application for university announcements, events, and dynamic content.",
    "tags": [
      "Android TV",
      "Jetpack Compose",
      "Firebase"
    ],
    "category": "Education",
    "githubLink": "https://github.com/DervinAn/Faculty_of_exact_science"
  }
];

export const SKILLS = [
  {
    "category": "Languages",
    "items": [
      {
        "name": "Kotlin",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Java",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "C",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Python",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "JavaScript",
        "icon": "code",
        "type": "solid"
      }
    ]
  },
  {
    "category": "Mobile",
    "items": [
      {
        "name": "Android SDK",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Jetpack Compose",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Compose Multiplatform",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Retrofit",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Room",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "WorkManager",
        "icon": "code",
        "type": "solid"
      }
    ]
  },
  {
    "category": "Architecture",
    "items": [
      {
        "name": "MVVM",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Clean Architecture",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Modular Design",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Multi-module Applications",
        "icon": "code",
        "type": "solid"
      }
    ]
  },
  {
    "category": "Cloud & Tools",
    "items": [
      {
        "name": "Firebase",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Cloudflare R2",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Git / GitHub",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Gradle",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Hilt",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Koin",
        "icon": "code",
        "type": "solid"
      }
    ]
  },
  {
    "category": "Testing & Performance",
    "items": [
      {
        "name": "JUnit",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "MockK",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Compose UI Testing",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Memory & Battery Optimization",
        "icon": "code",
        "type": "solid"
      }
    ]
  },
  {
    "category": "Web & UI",
    "items": [
      {
        "name": "React.js",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Material Design",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Responsive Layouts",
        "icon": "code",
        "type": "solid"
      },
      {
        "name": "Custom Components",
        "icon": "code",
        "type": "solid"
      }
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
    value: "Algeria · Available for remote opportunities"
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

];
