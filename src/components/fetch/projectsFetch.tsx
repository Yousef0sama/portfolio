import type { Projects } from "@/interfaces/interfaces";
import Project from "../UI/project";

type Props = {
  projects: Projects[];
};

export default function ProjectsFetch({ projects }: Props) {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
}

