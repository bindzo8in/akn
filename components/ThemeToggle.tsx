"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  isScrolled?: boolean;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
  isScrolled,
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine button container styling based on context
  const containerStyle =
    isScrolled === false
      ? "border-white/20 bg-black/35 text-white hover:bg-black/50 hover:border-white/40 shadow-sm"
      : isScrolled === true
      ? "border-border bg-card/90 text-foreground hover:border-teal/40 hover:bg-card shadow-sm"
      : "border-border/80 bg-card/80 text-foreground hover:border-teal/40 hover:bg-card shadow-sm";

  if (!mounted) {
    return (
      <div
        className={`flex size-9 items-center justify-center rounded-xl border backdrop-blur-md ${containerStyle} ${className}`}
        aria-hidden="true"
      >
        <span className="size-4.5 opacity-0" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`group relative flex items-center gap-2 rounded-xl border p-2 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${containerStyle} ${className}`}
    >
      <div className="relative flex size-5 items-center justify-center">
        {/* Sun Icon for Light Mode with rich amber contrast */}
        <Sun
          className={`size-4.5 text-amber-500 fill-amber-500/20 stroke-[2.2] transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          }`}
        />
        {/* Moon Icon for Dark Mode with luminous gold/teal contrast */}
        <Moon
          className={`absolute size-4.5 text-amber-300 fill-amber-300/20 stroke-[2.2] transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>

      {showLabel && (
        <span className="text-xs font-bold text-foreground">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
}
