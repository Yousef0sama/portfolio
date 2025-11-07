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
  return (
    <footer className="w-full bg-primary text-white backdrop-blur-sm mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 py-6">
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <HiCode className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base font-medium text-center sm:text-left">
              &copy; 2025 Yousef Osama.
            </p>
          </div>

          {/* Right Side (Social Links) */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const linkContent = (
                <div className="flex items-center gap-2 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-110">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="hidden sm:inline">{link.label}</span>
                </div>
              );

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                    aria-label={link.label}
                  >
                    {linkContent}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus:outline-none"
                  aria-label={link.label}
                >
                  {linkContent}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
