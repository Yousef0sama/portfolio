"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiHome,
  HiUser,
  HiFolder,
  HiMail,
  HiMoon,
  HiSun,
} from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home", icon: HiHome },
  { href: "/about", label: "About", icon: HiUser },
  { href: "/projects", label: "Projects", icon: HiFolder },
  { href: "/contact", label: "Contact", icon: HiMail },
];

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid hydration mismatch
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links - Left Side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={`Go to ${link.label} page`}
                  title={link.label}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base font-medium  transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle Button - Right Side */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
            type="button"
          >
            {mounted && currentTheme === "light" ? (
              <HiMoon className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : mounted && currentTheme === "dark" ? (
              <HiSun className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <div className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
