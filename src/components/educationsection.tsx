"use client";

import { EducationCard } from "@/components/educationcard";
import { useTranslation } from "@/lib/use-translation";

export function EducationSection() {
  const { t } = useTranslation();
  
  const educationHistory = [
    {
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFiJHUtgGISZA/company-logo_100_100/company-logo_100_100/0/1631330213238?e=1756339200&v=beta&t=oiHINz2pHHKpNLLE5FxFMpcJh__mn49PatlDD7Wkxas",
      institution: "Universidad Complutense de Madrid",
      degree: t('mscMarketStrategy'),
      dates: t('sep2024Jul2025'),
      description: t('mscMarketStrategyDesc')
    },
    {
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_100_100/company-logo_100_100/0/1631318058235?e=1756339200&v=beta&t=Je4FEWYdyV0MMoL2zGX7hqLo05x7e9WCW8-Ta9PGsRo",
      institution: "Harvard University – CS50x",
      degree: t('harvardCS50'),
      dates: t('oct2024Jun2025'),
      description: t('harvardCS50Desc')
    },
    {
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH7rjBETw5q0w/img-crop_100/B4EZcIuSraHkAM-/0/1748198043424?e=1756339200&v=beta&t=QDXmXaTFQjkhmM97XtqOfq2Hkt76pq5MEqddZI9bAAM",
      institution: "CENTRUM PUCP",
      degree: t('centrumAgile'),
      dates: t('jul2022Dec2022'),
      description: t('centrumAgileDesc')
    },
    {
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH7rjBETw5q0w/img-crop_100/B4EZcIuSraHkAM-/0/1748198043424?e=1756339200&v=beta&t=QDXmXaTFQjkhmM97XtqOfq2Hkt76pq5MEqddZI9bAAM",
      institution: "CENTRUM PUCP",
      degree: t('centrumKeyAccount'),
      dates: t('jan2022May2022'),
      description: t('centrumKeyAccountDesc')
    },
    {
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQE956PPTbtIhQ/company-logo_100_100/B4EZVczy2XHgAY-/0/1741018836732/universidad_esan_logo?e=1756339200&v=beta&t=T12YiJeWSl6bFPaK_698tOSdPXYnT2g3Q5LMzYvJkR0",
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