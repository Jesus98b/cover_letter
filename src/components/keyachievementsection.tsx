import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Array actualizado con tus nuevos títulos e iconos
const achievements = [
  {
    emoji: "🎯",
    title: "Product Strategy",
    description: "Guided product strategy and execution in dynamic environments, aligning business needs with scalable tech solutions."
  },
  {
    emoji: "📦",
    title: "Project Leadership",
    description: "Led complex project lifecycles across marketing, operations, and IT, improving time to market and ensuring measurable impact."
  },
  {
    emoji: "🤝",
    title: "Tech Collaboration",
    description: "Collaborated closely with developers and technical stakeholders, leveraging foundational knowledge in computer science to align business needs with technical solutions."
  },
  {
    emoji: "🔗",
    title: "API Integration",
    description: "Built and integrated APIs to automate key processes and improve data flow between platforms, reducing manual intervention and enabling real time visibility."
  },
  {
    emoji: "⚙️",
    title: "Automation Systems",
    description: "Designed and implemented end-to-end digital workflows and automation systems using Asana, n8n, and Python, resolving dependencies and boosting team efficiency."
  },
  {
    emoji: "📊",
    title: "Data Analytics",
    description: "Created and deployed advanced analytics dashboards (Power BI, Tableau), enhancing decision making and ensuring data governance."
  }
];

export function KeyAchievementsSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      {/* Título de la sección actualizado */}
      <h2 className="text-3xl font-bold text-center mb-12">What have I achieved?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <Card key={achievement.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                {/* Ícono y título actualizados */}
                <span>{achievement.emoji}</span>
                {achievement.title}
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                {achievement.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}