import { ExperienceCard } from "@/components/experiencecard.tsx";

// Array completo con las 5 experiencias que definiste
const experiences = [
  {
    role: "Junior Project Manager",
    company: "Brooklyn Fitboxing International",
    dates: "Oct 2024 – Present | Madrid, Spain",
    descriptionPoints: [
      "Led strategic digital transformation initiatives across 5 European markets, reducing franchise opening time by 55% (9 to 4 months).",
      "Built automation systems with n8n, ASANA, and Python to eliminate bottlenecks and accelerate execution.",
      "Migrated Salesforce and legacy data to Business Central, improving cross-team collaboration.",
      "Developed Power BI executive dashboards for real-time KPIs and risk visibility.",
    ],
  },
  {
    role: "Regional Project Lead – Caribbean Markets",
    company: "Belcorp",
    dates: "Mar 2023 – Aug 2024 | Lima, Peru",
    descriptionPoints: [
      "Delivered +15% YoY growth by managing 18 commercial campaigns annually.",
      "Designed Tableau dashboards for real-time commercial KPI tracking.",
      "Piloted digital initiatives (live video commerce, gamification) to boost consumer engagement.",
      "Streamlined campaign workflows through automation and cross-functional coordination.",
    ],
  },
  {
    role: "Strategic Planning & Procurement Analyst – Chile Region",
    company: "Belcorp",
    dates: "Jan 2022 – Mar 2023 | Lima, Peru",
    descriptionPoints: [
      "Led procurement planning for 12 markets, optimizing budgets and reducing FOB costs.",
      "Presented annual procurement strategy to C-level executives, aligning with demand forecasts.",
      "Deployed Tableau dashboards for automated planning and performance tracking.",
    ],
  },
  {
    role: "Planning & Merchandising Analyst – Guatemala",
    company: "Belcorp",
    dates: "Jan 2021 – Jan 2022 | Lima, Peru",
    descriptionPoints: [
      "Reduced out-of-stock rates by 25% through demand forecasting improvements.",
      "Launched digital campaigns aligned with regional consumer trends.",
      "Validated pricing and merchandising assets for compliance with global standards.",
    ],
  },
  {
    role: "Planning & Merchandising Intern",
    company: "Belcorp",
    dates: "Jan 2020 – Jan 2021 | Lima, Peru",
    descriptionPoints: [
      "Created weekly performance trackers for senior management decision-making.",
      "Validated marketing materials across multiple LATAM countries.",
      "Consolidated data and trends for executive presentations.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
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