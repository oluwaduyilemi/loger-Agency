"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="h-10 w-10"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
    >
      {isDark ? (
        <Sun
          size={17}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      ) : (
        <Moon
          size={17}
          strokeWidth={1.7}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}