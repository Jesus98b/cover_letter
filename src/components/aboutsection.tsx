"use client";

import { useTranslation } from "@/lib/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AboutSection() {
    const { t } = useTranslation();
    
    return (
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
          {t('aboutTitle')}
        </h2>
        
        <Card className="max-w-5xl mx-auto bg-background/50 backdrop-blur-sm border-border/50 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Photo Space - Left Column */}
              <div className="lg:col-span-1 flex justify-center">
                <Image 
                  src="/Jesus valencia-cover letter.jpeg" 
                  alt="Jesús Valencia" 
                  width={224}
                  height={288}
                  className="w-56 h-72 object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
              
              {/* Text Content - Right Columns */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-muted-foreground text-justify leading-relaxed">
                  {t('aboutDescription1')}
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  {t('aboutDescription2')}
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed font-bold">
                  {t('aboutDescription3')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }