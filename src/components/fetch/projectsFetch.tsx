import type { Projects } from "@/interfaces/interfaces";
import Project from "../UI/project";
import getAllProjects from "@/utils/getAllProjects";

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

  const projects = await getAllProjects();

  return <ProjectsFetchUI projects={projects} />;
}

