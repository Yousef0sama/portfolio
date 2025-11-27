import type { Projects } from "@/interfaces/interfaces";
import Project from "../UI/project";

type Props = {
  projects: Projects[];
};

function ProjectsFetchUI({ projects }: Props) {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
}

export default async function ProjectsFetch() {
  let projects: Projects[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    projects = await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    // ممكن هنا تحط fallback projects أو رسالة فارغة UI
  }

  return <ProjectsFetchUI projects={projects} />;
}

