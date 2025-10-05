import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  dates: string;
  descriptionPoints: string[];
  hasIntroduction?: boolean; // New prop to determine if first point should be introduction
}

export function ExperienceCard({ role, company, dates, descriptionPoints, hasIntroduction = false }: ExperienceCardProps) {
  return (
    <Card className="relative z-10 bg-white/20 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-200 ease-out border border-white/30 hover:border-white/50 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-gray-900 drop-shadow-sm group-hover:text-gray-800 transition-colors duration-200 ease-out leading-tight mb-1">{role}</CardTitle>
            <CardDescription className="text-base font-semibold text-gray-800 drop-shadow-sm group-hover:text-gray-700 transition-colors duration-200 ease-out">{company}</CardDescription>
          </div>
          <div className="text-right text-sm font-medium text-gray-700 whitespace-nowrap drop-shadow-sm group-hover:text-gray-600 transition-colors duration-200 ease-out flex-shrink-0">
            {dates}
          </div>
        </div>
      </CardHeader>
      {descriptionPoints.length > 0 && (
        <CardContent className="pt-0">
          <ul className="space-y-3">
            {descriptionPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800 leading-relaxed drop-shadow-sm font-medium group-hover:text-gray-700 transition-colors duration-200 ease-out">
                {hasIntroduction && index === 0 ? (
                  // First point (introduction) - no bullet (only for first 3 jobs)
                  <span className="text-justify flex-1">{point}</span>
                ) : (
                  // All other points - with bullet
                  <>
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0 group-hover:bg-gray-500 transition-colors duration-200 ease-out"></span>
                    <span className="text-justify flex-1">{point}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}