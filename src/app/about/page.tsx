// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

// Imports

// components
import Post from "@/components/UI/post";
import CategoriesFetch from "@/components/fetch/categoriesFetch";
import ReviewsFetch from "@/components/fetch/reviewsFetch";

// Metadata for SEO, OpenGraph, and Twitter cards
export const metadata = {
  title: "About Me | Yousef Osama - Frontend Developer",
  description:
    "Learn more about Yousef Osama — a frontend developer specializing in React, Next.js, TypeScript, and modern web development.",

  openGraph: {
    title: "About Me | Yousef Osama - Frontend Developer",
    description:
      "Discover who Yousef Osama is, his frontend expertise, skills, and professional background.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },

  twitter: {
    title: "About Me | Yousef Osama",
    description:
      "Learn more about frontend developer Yousef Osama and his experience with React, Next.js, and TypeScript.",
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
};

// Main About Page Component
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yousef Osama",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            "sameAs": [
              "https://github.com/Yousef0sama",
              "https://www.linkedin.com/in/yousef-osama-652667380"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Self-employed",
            },
            "jobTitle": "Frontend Developer",
            "knowsAbout": [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Bootstrap",
              "Redux.js",
              "Responsive Web Design",
              "Frontend Performance Optimization"
            ],
            "image": `${process.env.NEXT_PUBLIC_SITE_URL}/profile.jpg`,
            "description": "Frontend developer specializing in React, Next.js, TypeScript, and modern web development."
          }),
        }}
      />

      {/* Main content */}
      <main className="flex-1 min-h-[calc(100vh-8rem)]">

        {/* About Section */}
        <section
          aria-labelledby="about-heading"
          className="container mx-auto flex flex-col justify-center items-center gap-12 px-4 py-12 sm:px-6 sm:py-20 lg:gap-16"
        >
          {/* Page Main Title (hidden for accessibility) */}
          <h1 id="about-heading" className="sr-only">
            About Yousef Osama – Frontend Developer
          </h1>

          {/* Main About Card */}
          <Post />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          {/* Skills Section Title */}
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Skills & Technologies
          </h2>

          {/* Categories and Skills Fetch */}
          <CategoriesFetch />
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          {/* Reviews Section Title */}
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Reviews
          </h2>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <ReviewsFetch />
          </div>
        </section>

      </main>
    </>
  );
}
