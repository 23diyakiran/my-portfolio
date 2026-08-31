import React from "react";

const achievements = [
  {
    title: "Selected among Top 10 teams – SAP Hackfest 2025 (Round 2)",
    certificateFile: "diya-kiran-gathani-SAP-Certificate.jpeg",
  },
  {
    title:
      'Selected among Top 20 teams at KSCST 2026 for presenting "SignAssist," an AI-based sign language recognition system',
    certificateFile: "KCST.jpeg",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full max-w-4xl mx-auto px-6 py-10 bg-slate-950 text-slate-100"
    >
      <div className="flex items-baseline justify-between border-b border-slate-800 pb-3 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-primary">
          Achievements
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex items-start justify-between gap-4 hover:border-primary transition-colors"
          >
            <p className="text-sm text-slate-200 leading-relaxed">
              {item.title}
            </p>

            <a
              href={`${import.meta.env.BASE_URL}${item.certificateFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-emerald-300 whitespace-nowrap underline underline-offset-2"
            >
              Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}