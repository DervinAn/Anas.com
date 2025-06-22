import { SKILLS } from "@/lib/constants";

export function Skills() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {SKILLS.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center text-center">
                    <i
                      className={`fa-${skill.type || "solid"} fa-${skill.icon} text-2xl ${getBrandColor(skill.icon)}`}
                    ></i>
                    <span className="text-xs mt-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Brand color helper (optional but good for branding)
function getBrandColor(icon) {
  const colorMap = {
    'html5': 'text-[#E34F26]',
    'css3-alt': 'text-[#1572B6]',
    'js': 'text-[#F7DF1E]',
    'react': 'text-[#61DAFB]',
    'vuejs': 'text-[#4FC08D]',
    'node-js': 'text-[#339933]',
    'python': 'text-[#3776AB]',
    'php': 'text-[#777BB4]',
    'database': 'text-[#4479A1]',
    'server': 'text-[#47A248]',
    'android': 'text-[#3DDC84]',
    'java': 'text-[#007396]',
    'docker': 'text-[#2496ED]',
    'aws': 'text-[#FF9900]',
    'github-alt': 'dark:text-white text-gray-700',
    'fire': 'text-[#FF6B00]',
    'rocket': 'text-[#9C27B0]',
    'paint-brush': 'text-[#EC4899]',
    'palette': 'text-[#8E24AA]',
    'code': 'text-[#607D8B]',
    'sitemap': 'text-[#5C6BC0]',
    'layer-group': 'text-[#42A5F5]',
    'puzzle-piece': 'text-[#7B1FA2]'
  };

  return colorMap[icon] || '';
}
