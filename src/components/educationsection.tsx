"use client";

import { EducationCard } from "@/components/educationcard";
import { useTranslation } from "@/lib/use-translation";

export function EducationSection() {
  const { t } = useTranslation();
  
  const educationHistory = [
    {
      logoUrl: "/harvard_logo.jpeg",
      institution: "Harvard University – CS50x",
      degree: t('harvardCS50'),
      dates: t('oct2024Jun2025'),
      description: t('harvardCS50Desc')
    },
    {
      logoUrl: "/UCM_logo.jpeg",
      institution: "Universidad Complutense de Madrid",
      degree: t('mscMarketStrategy'),
      dates: t('sep2024Jul2025'),
      description: t('mscMarketStrategyDesc')
    },
    {
      logoUrl: "/PUCP_logo.jpeg",
      institution: "CENTRUM PUCP",
      degree: t('centrumAgile'),
      dates: t('jul2022Dec2022'),
      description: t('centrumAgileDesc')
    },
    {
      logoUrl: "/PUCP_logo.jpeg",
      institution: "CENTRUM PUCP",
      degree: t('centrumKeyAccount'),
      dates: t('jan2022May2022'),
      description: t('centrumKeyAccountDesc')
    },
    {
      logoUrl: "/ESAN_logo.jpeg",
      institution: "Universidad ESAN",
      degree: t('esanBBA'),
      dates: t('jan2016Jul2020'),
      description: t('esanBBADesc')
    },
  ];

  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{t('educationTitle')}</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {educationHistory.map((edu, index) => (
          <EducationCard
            key={index}
            logoUrl={edu.logoUrl}
            institution={edu.institution}
            degree={edu.degree}
            dates={edu.dates}
            description={edu.description}
          />
        ))}
      </div>
    </section>
  );
}