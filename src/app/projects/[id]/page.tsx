import type { Projects } from "@/interfaces/interfaces";
import Link from "next/link";
import getAllProjects from "@/utils/getAllProjects";
import ProjectGallery from "@/components/UI/projectGallery";
import Skills from "@/components/fetch/skillsFetch";
import CTA from "@/components/UI/CTA";

export async function generateMetadata ({ params }: { params: Promise<{ id: string }> }) {
  const projects = await getAllProjects();
  const { id } = await params;
  const project = projects.find(p => p.id.toString() === id);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Yousef Osama`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${id}`,
    },
    twitter: {
      title: project.title,
      description: project.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${id}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${id}`,
    },
  };
};


export default async function ProjectPage({ params }: {  params: Promise<{ id: string }> }) {

  const projects = await getAllProjects();

  const { id } = await params;


  const project : Projects | undefined = projects.find((p: Projects) => p.id.toString() === id);

  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base text-gray-400 max-w-md mb-6">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
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
    <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col-reverse md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-primary">{project.title}</h1>
          <p className="">{project.description}</p>
          <Skills skills={project.skills} />
          <time dateTime={project.date} className="text-primary bg-primary/10 rounded-full px-3 py-2 w-fit">{project.date}</time>
          <CTA external href={project.url} className="w-fit"> View Demo </CTA>
        </div>
        <div className="md:w-1/2">
          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      </div>
    </main>
  );
}
