// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

// imports

// components
import Link from "next/link";
import ProjectGallery from "@/components/UI/projectGallery";
import Skills from "@/components/fetch/skillsFetch";
import CTA from "@/components/UI/CTA";

// utils
import getAllProjects from "@/utils/getAllProjects";

// interfaces
import type { Project } from "@/interfaces/interfaces";

/**
 * Generates dynamic metadata for each project page.
 * Used by Next.js for SEO, OpenGraph, Twitter cards, and canonical URLs.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projects = await getAllProjects();
  const { slug } = await params;
  const project = projects.find((p) => p.slug.toString() === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Yousef Osama`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
    },
    twitter: {
      title: project.title,
      description: project.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
    },
  };
}

/**
 * Project page component.
 * Fetches project data and renders project details, skills, gallery, and demo link.
 */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const projects = await getAllProjects();
  const { slug } = await params;

  const project: Project | undefined = projects.find(
    (p: Project) => p.slug.toString() === slug
  );

  // If project not found, render 404
  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base text-gray-400 max-w-md mb-6">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-xl transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`,
            description: `A modern frontend project showcasing ${project.title}, built with up-to-date web technologies by Yousef Osama.`,
            image: project.thumbnail,
            datePublished: project.date,
            author: {
              "@type": "Person",
              name: "Yousef Osama",
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            },
            publisher: {
              "@type": "Organization",
              name: "Yousef Osama",
            },
            keywords: project.skills.join(", "),
          }),
        }}
      />

      {/* Main project content */}
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
        <div className="flex flex-col-reverse md:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left column: project details */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-primary">{project.title}</h1>
            <p>{project.description}</p>

            {/* Skills badges */}
            <Skills skills={project.skills} />

            {/* Project date */}
            <time
              dateTime={project.date}
              className="text-primary bg-primary/10 rounded-full px-3 py-2 w-fit"
            >
              {project.date}
            </time>

            {/* CTA to view live demo */}
            <CTA external href={project.url} className="w-fit">
              View Demo
            </CTA>
          </div>

          {/* Right column: project gallery */}
          <div className="md:w-1/2">
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        </div>
      </main>
    </>
  );
}
