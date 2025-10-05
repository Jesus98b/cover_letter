"use client";

import { ExperienceCard } from "@/components/experiencecard";
import { useTranslation } from "@/lib/use-translation";
import { motion } from "framer-motion";
import Image from "next/image";

export function ExperienceSection() {
  const { t } = useTranslation();
  
  // Array completo con las 5 experiencias que definiste
  const experiences = [
    {
      role: t('juniorProjectManager'),
      company: t('brooklynFitboxing'),
      dates: t('oct2024Present'),
      descriptionPoints: [
        t('exp1Point1'),
        t('exp1Point2'),
        t('exp1Point3'),
        t('exp1Point4'),
        t('exp1Point5'),
      ],
    },
    {
      role: t('regionalProjectLead'),
      company: t('belcorp'),
      dates: t('mar2023Aug2024'),
      descriptionPoints: [
        t('exp2Point1'),
        t('exp2Point2'),
        t('exp2Point3'),
        t('exp2Point4'),
        t('exp2Point5'),
      ],
    },
    {
      role: t('strategicPlanningAnalyst'),
      company: t('belcorp'),
      dates: t('jan2022Mar2023'),
      descriptionPoints: [
        t('exp3Point1'),
        t('exp3Point2'),
        t('exp3Point3'),
        t('exp3Point4'),
      ],
    },
    {
      role: t('planningMerchandisingAnalyst'),
      company: t('belcorp'),
      dates: t('jan2021Jan2022'),
      descriptionPoints: [
        t('exp4Point1'),
        t('exp4Point2'),
        t('exp4Point3'),
      ],
    },
    {
      role: t('planningMerchandisingIntern'),
      company: t('belcorp'),
      dates: t('jan2020Jan2021'),
      descriptionPoints: [
        t('exp5Point1'),
        t('exp5Point2'),
        t('exp5Point3'),
      ],
    },
  ];

  return (
    <section className="container mx-auto py-24 px-4 relative overflow-hidden">
      {/* Background Image with Motion - Enhanced UX/UI */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none z-0"
        animate={{
          scale: [1, 1.1, 1], // Zoom in/out effect
          rotate: [0, 1, 0], // Subtle rotation for more dynamic feel
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] xl:w-[900px] xl:h-[900px]">
          <Image
            src="/Programmer-amico.svg"
            alt="Programmer illustration"
            width={900}
            height={900}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      <h2 className="text-3xl font-bold text-center mb-12 relative z-10">{t('experienceTitle')}</h2>
      
      {/* Grid Layout for Experience Cards */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              role={exp.role}
              company={exp.company}
              dates={exp.dates}
              descriptionPoints={exp.descriptionPoints}
              hasIntroduction={index < 3} // First 3 jobs have introduction, last 2 don't
            />
          ))}
        </div>
      </div>
    </section>
  );
}