import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/fotter";

// Geist font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata
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
    "UI/UX",
    "portfolio",
    "web development",
    "responsive design",
    "frontend engineer",
    "Yousef Osama",
    "Yousef Osama Portfolio",
    "devbyyou",
    "dev by you"
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
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    siteName: "Yousef Osama - Frontend Developer Portfolio",
    title: "Frontend Developer Portfolio | Yousef Osama",
    description:
      "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects and experience.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  },
  category: "Portfolio",
  classification: "Frontend Development Portfolio",
  other: {
    "theme-color": "#0080FF",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="transition">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
