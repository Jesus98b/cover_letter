"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeSwitcherSegmented() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex rounded-lg border border-teal-200 bg-background p-1 w-[168px]">
        <button className="px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 text-muted-foreground">
          Light
        </button>
        <button className="px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 text-muted-foreground">
          Dark
        </button>
        <button className="px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 text-muted-foreground">
          System
        </button>
      </div>
    );
  }

  return (
    <div className="flex rounded-lg border border-teal-200 bg-background p-1 w-[168px]">
      <button
        onClick={() => setTheme("light")}
        className={`px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 ${
          theme === "light"
            ? "bg-teal-600 text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 ${
          theme === "dark"
            ? "bg-teal-600 text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 flex-1 ${
          theme === "system"
            ? "bg-teal-600 text-white shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        System
      </button>
    </div>
  );
} 