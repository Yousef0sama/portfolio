// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

// Imports

// components
import Card from "@/components/UI/card";
import Form from "@/components/UI/form";

// Metadata for SEO, OpenGraph, and Twitter cards
export const metadata = {
  title: "Contact | Yousef Osama - Frontend Developer",
  description:
    "Get in touch with Yousef Osama — a frontend developer specializing in React, Next.js, and TypeScript. Feel free to reach out for project inquiries or collaboration.",
  openGraph: {
    title: "Contact | Yousef Osama - Frontend Developer",
    description:
      "Contact Yousef Osama, a frontend developer experienced in building modern web applications using React, Next.js, and TypeScript.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  twitter: {
    title: "Contact | Yousef Osama",
    description:
      "Reach out to frontend developer Yousef Osama for inquiries, questions, or potential collaborations.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
};

// Main Page Component
export default function Page() {
  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Yousef Osama",
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
            mainEntityOfPage: {
              "@type": "Person",
              name: "Yousef Osama",
              email: "mailto:devbyyousef@example.com",
              sameAs: [
                "https://github.com/Yousef0sama",
                "https://www.linkedin.com/in/yousef-osama-652667380"
              ]
            }
          }),
        }}
      />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary">
          Contact me
        </h1>

        {/* Contact Form Card */}
        <Card as="div" shadow="none" className="max-w-3xl mx-auto">
          <Form />
        </Card>
      </main>
    </>
  );
}
