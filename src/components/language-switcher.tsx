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

export function LanguageSwitcher() {
  const { language, setLanguage } = useLocalization();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        className="h-8 px-3 rounded-lg border-teal-200 bg-background text-foreground font-medium w-[168px] justify-between relative"
        disabled
      >
        <span className="text-sm font-medium">English</span>
        <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="h-8 px-3 rounded-lg border-teal-200 bg-background hover:bg-accent text-foreground font-medium w-[168px] justify-between relative"
        >
          <span className="text-sm font-medium">
            {language === 'en' ? 'English' : 'Español'}
          </span>
          <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full min-w-[168px] z-50 bg-background border border-teal-200 rounded-lg shadow-lg">
        <DropdownMenuItem 
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 px-3 py-2 ${language === 'en' ? 'text-foreground font-medium bg-accent' : 'text-foreground hover:bg-accent/50'}`}
        >
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 px-3 py-2 ${language === 'es' ? 'text-foreground font-medium bg-accent' : 'text-foreground hover:bg-accent/50'}`}
        >
          <span>Español</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 