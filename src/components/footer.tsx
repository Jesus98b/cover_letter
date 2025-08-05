"use client";

import { useTranslation } from "@/lib/use-translation";
import { ThemeSwitcherSegmented } from "./theme-switcher-segmented";
import { LanguageSwitcher } from "./language-switcher";
import { useState, useEffect } from "react";

export function Footer() {
  const { t } = useTranslation();
  const [showRocket, setShowRocket] = useState(false);
  const [showHeartEffect, setShowHeartEffect] = useState(false);

  // Check if page is scrollable and show/hide rocket
  useEffect(() => {
    const handleScroll = () => {
      setShowRocket(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeartClick = () => {
    setShowHeartEffect(true);
    setTimeout(() => setShowHeartEffect(false), 3000);
  };

  return (
    <>
      {/* Heart Effect Overlay */}
      {showHeartEffect && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="heart-rain">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-red-500 text-2xl animate-heart-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rocket Button */}
      {showRocket && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all duration-300 shadow-lg hover:shadow-xl z-40 flex items-center justify-center group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform duration-200">🚀</span>
        </button>
      )}

      {/* Footer */}
      <footer className="relative border-t border-gray-200 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left Section - Copyright and Credits */}
            <div className="flex flex-col gap-2">
              <p className="text-green-700 font-medium">
                {t('copyright')}
              </p>
              <button
                onClick={handleHeartClick}
                className="text-muted-foreground hover:text-red-500 transition-colors duration-200 flex items-center gap-1 group"
              >
                <span>{t('designedWith')}</span>
                <span className="text-red-500 group-hover:scale-110 transition-transform duration-200">❤️</span>
                <span>{t('by')}</span>
              </button>
            </div>

            {/* Right Section - Controls */}
            <div className="flex flex-col gap-3 relative">
              {/* Language Switcher */}
              <div className="relative z-10">
                <LanguageSwitcher />
              </div>
              
              {/* Theme Switcher */}
              <div className="relative z-0">
                <ThemeSwitcherSegmented />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 