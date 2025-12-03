export const dynamic = "force-dynamic";

import getAllProjects from "@/utils/getAllProjects";
import type { Projects } from "@/interfaces/interfaces";

export default async function sitemap() {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const baseUrl = url.endsWith("/") ? url.slice(0, -1) : url;

  const projects = await getAllProjects();

  const projectUrls = projects.map((project: Projects) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...projectUrls,
  ];
}
