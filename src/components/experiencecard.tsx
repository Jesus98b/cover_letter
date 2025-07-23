import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  dates: string;
  descriptionPoints: string[];
}

export function ExperienceCard({ role, company, dates, descriptionPoints }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle>{role}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <div className="text-right text-sm text-muted-foreground whitespace-nowrap">
            {dates}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}