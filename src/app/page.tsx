import { HeroSection } from "@/components/heroselection";
import { AboutSection } from "@/components/aboutsection";
import { KeyAchievementsSection } from "@/components/keyachievementsection";
import { ExperienceSection } from "@/components/experiencesection";
import { SkillsSection } from "@/components/skilsssection"; 
import { BackgroundBubbles } from "@/components/background-bubbles";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundBubbles />
      <main>
        <HeroSection />
        <AboutSection />
        <KeyAchievementsSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </div>
  );
}