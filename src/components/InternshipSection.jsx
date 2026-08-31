import React from "react";

const internships = [
  {
    role: "Intern",
    organization: "U R Rao Satellite Centre (ISRO), Bengaluru",
    duration: "Feb 2026 – April 2026",

    project: "eShiksha — AI-Powered E-Learning & Examination Platform",

    description:
      "An e-learning and examination management platform developed to streamline trainee learning, assessment, progress tracking, and certification workflows. The platform was designed to operate in a fully offline environment, integrating web technologies with locally deployed AI services.",

    roleDescription:
      "Contributed primarily to the Technician module, focusing on exam workflows and backend development. Implemented theory exam submission and course completion logic, integrated AI-powered question generation using a locally deployed LLM with RAG, and worked with MySQL for managing users, courses, questions, and progress. Also improved dashboard tracking and UI components, and contributed to Docker-based offline deployment, integration, and debugging.",

    tags: [
      "Python",
      "Flask",
      "React",
      "MySQL",
      "Docker",
      "Ollama",
      "Mistral",
      "ChromaDB",
      "RAG",
    ],

    certificateFile: "isro-certificate.jpeg",
  },
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="w-full max-w-5xl mx-auto px-6 py-16 text-slate-100"
    >
      {/* Section Heading */}
      <div className="flex items-baseline justify-between border-b border-slate-800 pb-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">
          Internship
        </h2>
      </div>

      {/* Internship Cards */}
      <div className="flex flex-col gap-6">
        {internships.map((item, idx) => (
          <div
            key={idx}
            className="
              relative
              rounded-2xl
              border border-slate-800
              bg-slate-900/80
              p-6 md:p-8
              transition-all duration-300
              hover:border-primary/50
              hover:shadow-lg
              hover:shadow-primary/5
            "
          >

            {/* Date */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <span
                className="
                  text-xs md:text-sm
                  font-mono
                  text-slate-400
                  bg-slate-800/70
                  border border-slate-700
                  px-3 py-1.5
                  rounded-full
                  whitespace-nowrap
                "
              >
                {item.duration}
              </span>
            </div>

            {/* Internship Header */}
            <div className="text-center pt-2 mb-8">

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-base md:text-lg text-primary mt-2">
                {item.organization}
              </p>

            </div>

            {/* Project Name */}
            <div className="text-center mb-5">
              <h4 className="text-xl md:text-2xl font-semibold text-white">
                {item.project}
              </h4>
            </div>

            {/* Project Description */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              {item.description}
            </p>

            {/* Divider */}
            <div className="border-t border-slate-800 mb-7" />

            {/* My Role */}
            <div className="mb-7">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                My Role
              </h4>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {item.roleDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1.5
                      rounded-full
                      text-xs md:text-sm
                      bg-slate-800
                      border border-slate-700
                      text-slate-300
                      transition-all duration-300
                      hover:border-primary/50
                      hover:text-primary
                      hover:-translate-y-0.5
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate */}
            {item.certificateFile && (
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`${import.meta.env.BASE_URL}${item.certificateFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-primary
                    hover:text-emerald-300
                    transition-colors duration-300
                  "
                >
                  View Certificate
                  <span>↗</span>
                </a>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}