import { EducationCard } from "@/components/educationcard";

const educationHistory = [
  {
    logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQFiJHUtgGISZA/company-logo_100_100/company-logo_100_100/0/1631330213238?e=1756339200&v=beta&t=oiHINz2pHHKpNLLE5FxFMpcJh__mn49PatlDD7Wkxas",
    institution: "Universidad Complutense de Madrid",
    degree: "MSc in Market Strategy & Consumer Behavior",
    dates: "Sep 2024 – Jul 2025",
    description: "Postgraduate program focused on project management, strategic decision-making, and market-driven innovation, integrating methodologies for planning, execution, and leadership in dynamic business environments."
  },
  {
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQF5t62bcL0e9g/company-logo_100_100/company-logo_100_100/0/1631318058235?e=1756339200&v=beta&t=Je4FEWYdyV0MMoL2zGX7hqLo05x7e9WCW8-Ta9PGsRo",
    institution: "Harvard University – CS50x",
    degree: "Introduction to Computer Science",
    dates: "Oct 2024 - Jun 2025",
    description: "Core concepts of programming, algorithms, and data structures (C, Python, SQL), applied to problem-solving and the design of scalable digital systems.."
  },
  {
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH7rjBETw5q0w/img-crop_100/B4EZcIuSraHkAM-/0/1748198043424?e=1756339200&v=beta&t=QDXmXaTFQjkhmM97XtqOfq2Hkt76pq5MEqddZI9bAAM",
    institution: "CENTRUM PUCP",
    degree: "Agile Methods Specialization: Scrum and Kanban for Product Design",
    dates: "Jul 2022 – Dec 2022",
    description: "Advanced training in agile project management frameworks (Scrum, Kanban, Scrumban) for product design and iterative development."
  },
  {
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH7rjBETw5q0w/img-crop_100/B4EZcIuSraHkAM-/0/1748198043424?e=1756339200&v=beta&t=QDXmXaTFQjkhmM97XtqOfq2Hkt76pq5MEqddZI9bAAM",
    institution: "CENTRUM PUCP",
    degree: "Advanced Key Account Management for Business Growth",
    dates: "Jan 2022 – May 2022",
    description: "Specialized program in strategic sales planning, merchandising, and operational marketing, focused on growth and client management."
  },
  {
    logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQE956PPTbtIhQ/company-logo_100_100/B4EZVczy2XHgAY-/0/1741018836732/universidad_esan_logo?e=1756339200&v=beta&t=T12YiJeWSl6bFPaK_698tOSdPXYnT2g3Q5LMzYvJkR0",
    institution: "Universidad ESAN",
    degree: "Bachelor of Business Administration (BBA), Marketing Major",
    dates: "Jan 2016 – Jul 2020",
    description: "Focused on business strategy, marketing, and operational management with an emphasis on leadership and decision-making."
  },
];

export function EducationSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Academic Background</h2>
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