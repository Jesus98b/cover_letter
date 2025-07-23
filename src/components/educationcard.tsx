import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface EducationCardProps {
  logoUrl: string;
  institution: string;
  degree: string;
  dates: string;
  description?: string; // La descripción ahora es opcional
}

export function EducationCard({ logoUrl, institution, degree, dates, description }: EducationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Image
            src={logoUrl}
            alt={`${institution} logo`}
            width={48}
            height={48}
            className="rounded-md border"
          />
          <div className="flex-1">
            <CardTitle>{institution}</CardTitle>
            <CardDescription>{degree}</CardDescription>
            <p className="text-sm text-muted-foreground mt-1">{dates}</p>
          </div>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}