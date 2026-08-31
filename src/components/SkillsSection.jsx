import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Bot,
  Palette,
} from "lucide-react";

const skills = [
  { name: "Python", category: "Programming Language" },

  { name: "TensorFlow", category: "Machine Learning" },
  { name: "Keras", category: "Machine Learning" },
  { name: "OpenCV", category: "Machine Learning" },
  { name: "CNN", category: "Machine Learning" },

  { name: "React", category: "Web Development" },
  { name: "HTML", category: "Web Development" },
  { name: "CSS", category: "Web Development" },

  { name: "MySQL", category: "Database" },

  { name: "UiPath StudioX", category: "Automation/RPA" },

  { name: "Figma", category: "Tools and Design" },
  { name: "VS Code", category: "Tools and Design" },
  { name: "Jupyter Notebook", category: "Tools and Design" },
  { name: "UI/UX Design", category: "Tools and Design" },
];

const categories = [
  {
    name: "Programming Language",
    icon: Code2,
  },
  {
    name: "Machine Learning",
    icon: Brain,
  },
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "Database",
    icon: Database,
  },
  {
    name: "Automation/RPA",
    icon: Bot,
  },
  {
    name: "Tools and Design",
    icon: Palette,
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Technologies and tools I use to build, design and develop
            intelligent applications.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">

          {/* All Button */}
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium",
              "transition-all duration-300",
              "hover:scale-105",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
            )}
          >
            All
          </button>

          {/* Category Buttons */}
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "flex items-center gap-2",
                  "px-5 py-2.5 rounded-full",
                  "text-sm font-medium",
                  "transition-all duration-300",
                  "hover:scale-105",

                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Card */}
        <div
          className="
            bg-card
            rounded-2xl
            p-6 md:p-8
            border border-border/50
            shadow-sm
          "
        >

          {/* ALL CATEGORIES */}
          {activeCategory === "all" ? (

            <div className="space-y-7">

              {categories.map((category, categoryIndex) => {
                const Icon = category.icon;

                const categorySkills = skills.filter(
                  (skill) => skill.category === category.name
                );

                return (
                  <div
                    key={category.name}
                    className="
                      group
                      animate-in
                      fade-in
                      slide-in-from-bottom-2
                      duration-500
                    "
                    style={{
                      animationDelay: `${categoryIndex * 80}ms`,
                    }}
                  >

                    {/* Category Heading */}
                    <div className="flex items-center gap-3 mb-3">

                      <div
                        className="
                          p-2
                          rounded-lg
                          bg-primary/10
                          text-primary
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <h3 className="font-semibold text-base md:text-lg">
                        {category.name}
                      </h3>

                    </div>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-2 ml-11">

                      {categorySkills.map((skill) => (
                        <span
                          key={skill.name}
                          className="
                            px-3.5
                            py-1.5
                            rounded-full
                            text-sm
                            bg-secondary/70
                            border border-border/50
                            text-muted-foreground

                            transition-all
                            duration-300

                            hover:bg-primary/10
                            hover:text-primary
                            hover:border-primary/30
                            hover:-translate-y-1
                            hover:shadow-sm

                            cursor-default
                          "
                        >
                          {skill.name}
                        </span>
                      ))}

                    </div>

                  </div>
                );
              })}

            </div>

          ) : (

            /* SELECTED CATEGORY */

            <div
              key={activeCategory}
              className="
                animate-in
                fade-in
                zoom-in-95
                duration-300
              "
            >

              {categories.map((category) => {

                if (category.name !== activeCategory) return null;

                const Icon = category.icon;

                return (
                  <div key={category.name}>

                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">

                      <div
                        className="
                          p-3
                          rounded-xl
                          bg-primary/10
                          text-primary
                        "
                      >
                        <Icon size={22} />
                      </div>

                      <h3 className="text-xl font-semibold">
                        {category.name}
                      </h3>

                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">

                      {filteredSkills.map((skill, index) => (
                        <span
                          key={skill.name}
                          className="
                            px-4
                            py-2
                            rounded-full
                            bg-secondary/70
                            border border-border/50
                            text-sm
                            font-medium

                            transition-all
                            duration-300

                            hover:bg-primary
                            hover:text-primary-foreground
                            hover:border-primary
                            hover:-translate-y-1
                            hover:shadow-md

                            animate-in
                            fade-in
                            slide-in-from-bottom-2
                            duration-500
                          "
                          style={{
                            animationDelay: `${index * 80}ms`,
                          }}
                        >
                          {skill.name}
                        </span>
                      ))}

                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </div>
    </section>
  );
};