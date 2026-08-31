import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import {CoursesandCertificates} from "../components/CoursesandCertificates";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { EducationSection } from "../components/EducationSection";
import InternshipSection from "../components/InternshipSection";
import AchievementsSection from "../components/AchievementsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <InternshipSection/>
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection/>
        <CoursesandCertificates/>
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};