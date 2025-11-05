export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-8">
          {/* College */}
          <div className="gradient-border p-6 rounded-2xl hover:shadow-lg transition">
            <h4 className="font-semibold text-xl">Canara Engineering College</h4>
            <p className="text-muted-foreground">
              Bachelor of Engineering (B.E.) in Computer Science and Design
            </p>
            <p className="text-sm text-muted-foreground">
              CGPA: <span className="text-primary font-medium">7.58</span>
            </p>
            <p className="text-sm mt-1 text-muted-foreground">2022 – 2026</p>
          </div>

          {/* PU College */}
          <div className="gradient-border p-6 rounded-2xl hover:shadow-lg transition">
            <h4 className="font-semibold text-xl">St. Agnes PU College</h4>
            <p className="text-muted-foreground">Pre-University (PCMC)</p>
            <p className="text-sm text-muted-foreground">
              Percentage: <span className="text-primary font-medium">68.83%</span>
            </p>
            <p className="text-sm mt-1 text-muted-foreground">2020 – 2022</p>
          </div>

          {/* High School */}
          <div className="gradient-border p-6 rounded-2xl hover:shadow-lg transition">
            <h4 className="font-semibold text-xl">St. Mary’s High School</h4>
            <p className="text-muted-foreground">SSLC</p>
            <p className="text-sm text-muted-foreground">
              Percentage: <span className="text-primary font-medium">68.64%</span>
            </p>
            <p className="text-sm mt-1 text-muted-foreground">2019 – 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
