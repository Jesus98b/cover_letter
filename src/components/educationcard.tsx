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
    <Card className="shadow-lg hover:shadow-xl transition-all duration-200 ease-out border border-gray-200 hover:border-gray-300 transform hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer group">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Image
            src={logoUrl}
            alt={`${institution} logo`}
            width={48}
            height={48}
            className="rounded-md border group-hover:scale-105 transition-transform duration-200 ease-out"
          />
          <div className="flex-1">
            <CardTitle className="group-hover:text-gray-800 transition-colors duration-200 ease-out">{institution}</CardTitle>
            <CardDescription className="group-hover:text-gray-600 transition-colors duration-200 ease-out">{degree}</CardDescription>
            <p className="text-sm text-muted-foreground mt-1 group-hover:text-gray-500 transition-colors duration-200 ease-out">{dates}</p>
          </div>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-muted-foreground group-hover:text-gray-600 transition-colors duration-200 ease-out">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}