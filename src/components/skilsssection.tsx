"use client";

// Importamos los iconos de Lucide
import { Database, Bot, Code, Wind, Users, GanttChartSquare, KanbanSquare } from "lucide-react";

// Importamos los iconos de marcas desde react-icons/si
import { SiJira, SiAsana, SiTrello, SiTableau, SiFigma, SiMiro, SiSap, SiN8N } from "react-icons/si";

// Importamos los iconos de Office desde react-icons/pi, como descubriste
import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill} from "react-icons/pi";

import { useTranslation } from "@/lib/use-translation";

export function SkillsSection() {
  const { t } = useTranslation();
  
  // --- DATOS ---
  const techStack = [
    { icon: Bot, name: t('python') },
    { icon: Database, name: t('sql') },
    { icon: Code, name: t('nextjsReact') },
    { icon: Wind, name: t('tailwindCSS') },
  ];

  const toolbox = [
    { icon: SiAsana, name: t('asana') },
    { icon: SiJira, name: t('jira') },
    { icon: SiTableau, name: t('tableau') },
    { icon: SiN8N, name: t('n8n') },
    { icon: SiTrello, name: t('trello') },
    { icon: GanttChartSquare, name: t('scrum') },
    { icon: KanbanSquare, name: t('kanban') },
    { icon: PiMicrosoftExcelLogoFill, name: t('excel') },
    { icon: PiMicrosoftPowerpointLogoFill, name: t('powerpoint') },
    { icon: SiSap, name: t('sap') },
    { icon: SiFigma, name: t('figma') },
    { icon: SiMiro, name: t('miro') },
    { icon: Users, name: t('teamLeadership') }
  ];

  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">{t('skillsTitle')}</h2>
      
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">{t('managementToolbox')}</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {toolbox.map((tool) => (
            <div key={tool.name} className="flex items-center gap-3 rounded-lg border bg-card text-card-foreground p-3">
              <tool.icon className="h-6 w-6" />
              <span className="font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">{t('technicalStack')}</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-3 rounded-lg border bg-card text-card-foreground p-3">
              <tech.icon className="h-6 w-6" />
              <span className="font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}