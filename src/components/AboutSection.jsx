import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6">
          <img
            src={`${import.meta.env.BASE_URL}profile-pic.jpg`}     // your image in public folder
            alt="Diya Kiran Gathani"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary"> Me</span>
          </h2>

          <h3 className="text-2xl font-semibold">
            Passionate about exploring the intersection of technology and design.
          </h3>

          <p className="text-muted-foreground">
            I'm an undergraduate in Computer Science and Design Engineering, driven by a passion for blending technology with thoughtful design. I enjoy building intuitive systems that solve real-world problems and am always eager to learn, collaborate, and contribute to innovative projects.
          </p>

          <p className="text-muted-foreground">
            I enjoy learning new technologies, building real-time projects like SignAssist, and contributing to open-source projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>

            <a
             href={`${import.meta.env.BASE_URL}diya-kiran-gathani-resume.pdf`}  // your CV in public folder
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
