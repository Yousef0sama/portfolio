import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default: "Frontend Developer Portfolio | Yousef Osama",
    template: "%s | Yousef Osama - Frontend Developer",
  },
  description:
    "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects, skills, and experience in building beautiful, responsive web applications.",
  keywords: [
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "portfolio",
    "web development",
    "responsive design",
    "frontend engineer",
  ],
  authors: [{ name: "Yousef Osama" }],
  creator: "Yousef Osama",
  publisher: "Yousef Osama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Yousef Osama - Frontend Developer Portfolio",
    title: "Frontend Developer Portfolio | Yousef Osama",
    description:
      "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects and experience.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image path
        width: 1200,
        height: 630,
        alt: "Yousef Osama - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer Portfolio | Yousef Osama",
    description:
      "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@yourtwitter", // Add your Twitter handle
    images: ["/og-image.jpg"], // Add your OG image path
  },
  alternates: {
    canonical: "/",
  },
  category: "Portfolio",
  classification: "Frontend Development Portfolio",
  other: {
    "theme-color": "#000000", // Set your brand color
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
