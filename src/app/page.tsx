"use client";

import { HeroSection } from "@/components/heroselection";
import { AboutSection } from "@/components/aboutsection";
import { KeyAchievementsSection } from "@/components/keyachievementsection";
import { ExperienceSection } from "@/components/experiencesection";
import { SkillsSection } from "@/components/skilsssection"; 
import { EducationSection } from "@/components/educationsection";
import { BackgroundBubbles } from "@/components/background-bubbles";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundBubbles />
      <main>
        <HeroSection />
        <AboutSection />
        <KeyAchievementsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <BackgroundBubbles />
      </main>
      <Footer />
    </div>
  );
}