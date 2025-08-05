"use client";

import { ExperienceCard } from "@/components/experiencecard";
import { useTranslation } from "@/lib/use-translation";

export function ExperienceSection() {
  const { t } = useTranslation();
  
  // Array completo con las 5 experiencias que definiste
  const experiences = [
    {
      role: t('juniorProjectManager'),
      company: t('brooklynFitboxing'),
      dates: `${t('oct2024Present')} | ${t('madridSpain')}`,
      descriptionPoints: [
        t('exp1Point1'),
        t('exp1Point2'),
        t('exp1Point3'),
        t('exp1Point4'),
      ],
    },
    {
      role: t('regionalProjectLead'),
      company: t('belcorp'),
      dates: `${t('mar2023Aug2024')} | ${t('limaPeru')}`,
      descriptionPoints: [
        t('exp2Point1'),
        t('exp2Point2'),
        t('exp2Point3'),
        t('exp2Point4'),
      ],
    },
    {
      role: t('strategicPlanningAnalyst'),
      company: t('belcorp'),
      dates: `${t('jan2022Mar2023')} | ${t('limaPeru')}`,
      descriptionPoints: [
        t('exp3Point1'),
        t('exp3Point2'),
        t('exp3Point3'),
      ],
    },
    {
      role: t('planningMerchandisingAnalyst'),
      company: t('belcorp'),
      dates: `${t('jan2021Jan2022')} | ${t('limaPeru')}`,
      descriptionPoints: [
        t('exp4Point1'),
        t('exp4Point2'),
        t('exp4Point3'),
      ],
    },
    {
      role: t('planningMerchandisingIntern'),
      company: t('belcorp'),
      dates: `${t('jan2020Jan2021')} | ${t('limaPeru')}`,
      descriptionPoints: [
        t('exp5Point1'),
        t('exp5Point2'),
        t('exp5Point3'),
      ],
    },
  ];

  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{t('experienceTitle')}</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index} 
            role={exp.role}
            company={exp.company}
            dates={exp.dates}
            descriptionPoints={exp.descriptionPoints}
          />
        ))}
      </div>
    </section>
  );
}