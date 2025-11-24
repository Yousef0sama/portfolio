"use client";

import Link from "next/link";
import { HiMail, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/Yousef0sama",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "https://linkedin.com/in/yousef-osama-652667380",
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    href: "mailto:devbyyou@gmail.com",
    label: "Email",
    icon: HiMail,
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white backdrop-blur-sm h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">

          <div className="flex items-center gap-2">
            <HiCode className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base font-medium">
              © {year} Yousef Osama.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4">
            {socialLinks.map(({ href, label, icon: Icon, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only sm:not-sr-only">{label}</span>
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className="flex items-center gap-2 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only sm:not-sr-only">{label}</span>
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}
