export const dynamic = "force-dynamic";

import Post from "@/components/UI/post";
import CategoriesFetch from "@/components/fetch/categoriesFetch";
import ReviewsFetch from "@/components/fetch/reviewsFetch";

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


export default function AboutPage() {

  return (
    <>
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

      <main className="flex-1 min-h-[calc(100vh-8rem)]">
        <section
          aria-labelledby="about-heading"
          className="container mx-auto flex flex-col justify-center items-center gap-12 px-4 py-12 sm:px-6 sm:py-20 lg:gap-16"
        >
          {/* Page Main Title */}
          <h1 id="about-heading" className="sr-only">
            About Yousef Osama – Frontend Developer
          </h1>

          {/* Main About Card */}

          <Post />

        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Skills & Technologies
          </h2>

          <CategoriesFetch />

        </section>

        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <ReviewsFetch />
          </div>
        </section>

      </main>
    </>
  );
}
