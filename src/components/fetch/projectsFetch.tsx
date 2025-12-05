// imports

// components
import Project from "../UI/project";

// interfaces
import type { Project as ProjectType } from "@/interfaces/interfaces";

/**
 * ProjectsFetch component
 *
 * Renders a list of Project components based on the provided projects array.
 *
 * @param {Object} props - Component props
 * @param {ProjectType[]} props.projects - Array of projects to display
 * @returns {React.JSX.Element} A fragment containing the rendered Project components
*/

export default function ProjectsFetch({ projects }: { projects: ProjectType[] }): React.JSX.Element {
  return (
    <>
      {/* Map through each project and render a Project component */}
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
}
