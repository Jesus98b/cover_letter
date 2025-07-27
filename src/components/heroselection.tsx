"use client";

import { HeroIllustration } from "./heroillustration";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section className="container mx-auto min-h-screen px-4 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Columna de Texto */}
        <div className="text-center md:text-left">
          {/* AÑADIMOS LA CLASE "text-primary" AQUÍ */}
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl text-primary">
            Jesús Alfredo Valencia Bedoya
          </h1>
          <TypeAnimation
            sequence={[
              'Empowering teams to deliver meaningful solutions',
              2000,
              'Agile & Data-Driven Expert',
              2000,
              'Digital Transformation Lead',
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="mt-6 text-2xl text-primary font-semibold"
            repeat={Infinity}
          />
        </div>
        
        {/* Columna de Ilustración */}
        <div className="w-full">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}