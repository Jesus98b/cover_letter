"use client";

import { HeroIllustration } from "./heroillustration";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "@/lib/use-translation";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t, language } = useTranslation();
  const [key, setKey] = useState(0);
  
  // Force re-render of TypeAnimation when language changes
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [language]);
  
  return (
    <section className="container mx-auto min-h-screen px-4 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Columna de Texto */}
        <div className="text-center md:text-left">
          {/* AÑADIMOS LA CLASE "text-primary" AQUÍ */}
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl text-primary">
            {t('heroTitle')}
          </h1>
          <div
            className="mt-6 flex justify-center md:justify-start"
            style={{ maxWidth: '32rem' }} // 512px, adjust as needed
          >
            <TypeAnimation
              key={key}
              sequence={[
                t('heroSubtitle1'),
                2000,
                t('heroSubtitle2'),
                2000,
                t('heroSubtitle3'),
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-2xl text-primary font-semibold text-left w-full whitespace-normal break-words overflow-wrap-anywhere min-h-[56px]"
              repeat={Infinity}
            />
          </div>
        </div>
        
        {/* Columna de Ilustración */}
        <div className="w-full">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}