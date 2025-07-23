// Importamos los iconos de Lucide
import { Database, Bot, Code, Wind, Users, GanttChartSquare, KanbanSquare } from "lucide-react";

// Importamos los iconos de marcas desde react-icons/si
import { SiJira, SiAsana, SiTrello, SiTableau, SiFigma, SiMiro, SiSap, SiN8N } from "react-icons/si";

// Importamos los iconos de Office desde react-icons/pi, como descubriste
import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill} from "react-icons/pi";

// --- DATOS ---
const techStack = [
  { icon: Bot, name: "Python" },
  { icon: Database, name: "SQL" },
  { icon: Code, name: "Next.js & React" },
  { icon: Wind, name: "Tailwind CSS" },
];

const toolbox = [
  { icon: SiAsana, name: "Asana" },
  { icon: SiJira, name: "Jira" },
  { icon: SiTableau, name: "Tableau" },
  { icon: SiN8N, name: "n8n" },
  { icon: SiTrello, name: "Trello" },
  { icon: GanttChartSquare, name: "Scrum" },
  { icon: KanbanSquare, name: "Kanban" },
  { icon: PiMicrosoftExcelLogoFill, name: "Excel" },
  { icon: PiMicrosoftPowerpointLogoFill, name: "PowerPoint" },
  { icon: SiSap, name: "SAP" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiMiro, name: "Miro" },
  { icon: Users, name: "Team Leadership" }
];

export function SkillsSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Habilidades y Herramientas</h2>
      
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">Toolbox de Gestión y Metodologías</h3>
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
        <h3 className="text-2xl font-semibold text-center mb-8">Stack Técnico y Lenguajes</h3>
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