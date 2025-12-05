// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

// Imports

// components
import ProjectsFetch from "@/components/fetch/projectsFetch";

// utils
import getAllProjects from "@/utils/getAllProjects";

// Metadata for SEO, OpenGraph, and Twitter cards
export const metadata = {
  title: "Projects | Yousef Osama - Frontend Developer",
  description: "Explore the portfolio of Yousef Osama — frontend developer specializing in React, Next.js, TypeScript, and modern web applications.",
  openGraph: {
    title: "Projects | Yousef Osama - Frontend Developer",
    description:
      "Browse Yousef Osama's projects showcasing his frontend expertise, skills, and experience building modern web applications.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },

  twitter: {
    title: "Projects | Yousef Osama",
    description:
      "Check out the projects by frontend developer Yousef Osama, built with React, Next.js, and TypeScript.",
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },
};

// Main Page Component
export default async function Page() {
  // Fetch all projects from the backend / CMS
  const projects = await getAllProjects();

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Portfolio Projects of Yousef Osama",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
            "description": "Frontend developer specializing in React, Next.js, TypeScript, and modern web development.",
            "author": {
              "@type": "Person",
              "name": "Yousef Osama",
              "url": `${process.env.NEXT_PUBLIC_SITE_URL}/about`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Yousef Osama"
            },
            "itemListElement": projects.map((proj, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "CreativeWork",
                "name": proj.title,
                "url": `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${proj.slug}`,
                "description": `A modern frontend project showcasing ${proj.title}, built with up-to-date web technologies by Yousef Osama.`,
                "image": proj.thumbnail,
                "datePublished": proj.date,
                "keywords": proj.skills?.join(", ") || "",
              }
            }))
          }),
        }}
      />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ProjectsFetch projects={projects} />
        </div>
      </main>
    </>
  )
}
