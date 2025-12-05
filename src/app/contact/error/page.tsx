// Imports
import Link from "next/link";

// Metadata for SEO, OpenGraph, Twitter, and robots
export const metadata = {
  title: "Message Failed | Yousef Osama - Frontend Developer",
  openGraph: {
    title: "Message Failed | Yousef Osama - Frontend Developer",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`,
  },
  twitter: {
    title: "Message Failed | Yousef Osama",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`,
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
    <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
      {/* Error Section */}
      <section className="flex flex-col items-center justify-center text-center px-4">
        {/* Error Title */}
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>

        {/* Error Subtitle */}
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>

        {/* Error Description */}
        <p className="text-base text-gray-400 max-w-md mb-6">
          There was an error sending your message. Please try again later or contact me directly at{" "}
          <a href="mailto:devbyyousef@gmail.com" className="underline">
            devbyyousef@gmail.com
          </a>.
        </p>

        {/* Back to Contact Form CTA */}
        <Link
          href="/contact"
          className="px-6 py-3 bg-primary text-white rounded-xl transition-all duration-300 hover:scale-105"
        >
          Go Back to Contact Form
        </Link>
      </section>
    </main>
  );
}
