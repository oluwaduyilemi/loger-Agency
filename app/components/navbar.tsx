"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--foreground)] transition-opacity hover:opacity-70"
        >
          AGENCY NAME
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--foreground)] px-4 py-3 text-[13px] font-medium text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center text-[var(--foreground)]"
          >
            {isOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[var(--border)] py-4 text-[15px] font-medium text-[var(--foreground)] transition-opacity hover:opacity-70"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex w-fit items-center gap-2 bg-[var(--foreground)] px-4 py-3 text-[13px] font-medium text-[var(--background)]"
            >
              Start a project
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}