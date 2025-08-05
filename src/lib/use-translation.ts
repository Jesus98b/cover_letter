import { useLocalization } from "@/components/localization-provider";
import { dictionary, Dictionary } from "./dictionary";

export function useTranslation() {
  const { language } = useLocalization();
  
  const t = (key: keyof Dictionary): string => {
    return dictionary[language][key];
  };
  
  return { t, language };
} 