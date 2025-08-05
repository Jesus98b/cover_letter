"use client";

import * as React from "react";
import { useLocalization } from "./localization-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcherHeader() {
  const { language, setLanguage } = useLocalization();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-10 h-10 p-0" disabled>
        <span className="text-lg">🇺🇸</span>
        <span className="sr-only">Toggle language</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 p-0">
          <span className="text-lg">
            {language === 'en' ? '🇺🇸' : '🇪🇸'}
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem 
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === 'en' ? 'text-green-600 font-medium' : 'text-gray-700'}`}
        >
          <span className="text-base">🇺🇸</span>
          <span>EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 ${language === 'es' ? 'text-green-600 font-medium' : 'text-gray-700'}`}
        >
          <span className="text-base">🇪🇸</span>
          <span>ES</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 