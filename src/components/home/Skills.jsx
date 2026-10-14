import {
  Braces, Bug, Cloud, Code2, Database, FlaskConical, Gauge, GitBranch,
  Layers3, MonitorSmartphone, Network, Package, Palette, Server,
  ShieldCheck, Smartphone, TestTube2, Wrench,
} from "lucide-react";
import { SKILLS } from "@/lib/constants";

const skillIcons = {
  Kotlin: Braces, Java: Code2, C: Code2, Python: Braces, JavaScript: Code2,
  "Android SDK": Smartphone, "Jetpack Compose": Palette,
  "Compose Multiplatform": MonitorSmartphone, Retrofit: Network,
  Room: Database, WorkManager: Wrench, MVVM: Layers3,
  "Clean Architecture": ShieldCheck, "Modular Design": Package,
  "Multi-module Applications": Package, Firebase: Cloud,
  "Cloudflare R2": Server, "Git / GitHub": GitBranch, Gradle: Wrench,
  Hilt: Package, Koin: Package, JUnit: FlaskConical, MockK: Bug,
  "Compose UI Testing": TestTube2, "Memory & Battery Optimization": Gauge,
  "React.js": Code2, "Material Design": Palette,
  "Responsive Layouts": MonitorSmartphone, "Custom Components": Braces,
};

const categoryIcons = {
  Languages: Code2, Mobile: Smartphone, Architecture: Layers3,
  "Cloud & Tools": Cloud, "Testing & Performance": TestTube2,
  "Web & UI": MonitorSmartphone,
};

export function Skills() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category) => {
            const CategoryIcon = categoryIcons[category.category] || Code2;
            return (
              <article key={category.category} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/40 p-5">
                <h3 className="font-semibold text-primary mb-5 flex items-center gap-2">
                  <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((skill) => {
                    const SkillIcon = skillIcons[skill.name] || Code2;
                    return (
                      <div key={skill.name} className="flex items-center gap-3 rounded-lg bg-white dark:bg-gray-900 px-3 py-3 border border-gray-200/70 dark:border-gray-800">
                        <SkillIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-sm leading-tight">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
