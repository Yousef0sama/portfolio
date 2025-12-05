// Imports
import Link from "next/link";

// Metadata for SEO, OpenGraph, Twitter, and robots
export const metadata = {
  title: "Message Sent | Yousef Osama - Frontend Developer",
  openGraph: {
    title: "Message Sent | Yousef Osama - Frontend Developer",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/success`,
  },
  twitter: {
    title: "Message Sent | Yousef Osama",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/success`,
  },
  robots: {
    // Do not index this page in search engines
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

// Main Page Component
export default function Page() {
  return (
    <main className="flex-1 container mx-auto px-4 py-20 text-center">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
        Message Sent Successfully
      </h1>

      {/* Confirmation Text */}
      <p className="text-lg text-gray-600 mb-8">
        Thanks for reaching out. I’ll get back to you as soon as possible.
      </p>

      {/* Back to Home CTA */}
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
