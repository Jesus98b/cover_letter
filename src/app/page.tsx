import { HeroSection } from "@/components/heroselection.tsx";
import { AboutSection } from "@/components/aboutsection.tsx";
import { KeyAchievementsSection } from "@/components/keyachievementsection.tsx";
import { ExperienceSection } from "@/components/experiencesection.tsx";
import { EducationSection } from "@/components/educationsection.tsx";
import { SkillsSection } from "@/components/skilsssection.tsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <KeyAchievementsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
    </main>
  );
}