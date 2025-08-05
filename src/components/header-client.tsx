"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeSwitcherHeader } from "./theme-switcher-header";
import { LanguageSwitcherHeader } from "./language-switcher-header";
import { useTranslation } from "@/lib/use-translation";

export function HeaderClient() {
  const { t } = useTranslation();
  
  return (
    <header className="p-4">
      <nav className="container mx-auto flex items-center justify-end gap-4">
        <Button asChild size="lg">
          <Link href="/cv-jesus-valencia.pdf" download>
            {t('downloadCV')}
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL || ''} target="_blank">
            {t('contactMe')}
          </Link>
        </Button>
        <LanguageSwitcherHeader />
        <ThemeSwitcherHeader />
      </nav>
    </header>
  );
} 