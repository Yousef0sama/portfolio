// This forces Next.js to treat this route as dynamic, so it always fetches fresh data
export const dynamic = "force-dynamic";

// imports

// utils
import getAllProjects from "@/utils/getAllProjects";

// interfaces
import type { Project } from "@/interfaces/interfaces";
import type { MetadataRoute } from "next";

/**
 * Generates the sitemap for the website.
 * It includes main pages plus all project pages dynamically fetched from the database.
 *
 * @returns {Promise<MetadataRoute.Sitemap>} Array of sitemap entries with URL, lastModified, changeFrequency, and priority
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  // Get the base URL from environment variables
  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  // Fetch all projects from the database
  const projects = await getAllProjects();

  // Map each project to a sitemap entry
  const projectUrls: MetadataRoute.Sitemap  = projects.map((project: Project) => ({
    url: `${url}/projects/${project.slug}`, // Project page URL
    lastModified: new Date(project.date),  // Last modification date of the project
    changeFrequency: "monthly",           // How often this page is likely to change
    priority: 0.8,                        // Importance of the page relative to other pages
  }));

  // Return the full sitemap including main pages and project pages
  return [
    { url: `${url}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 }, // Home page
    { url: `${url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }, // About page
    { url: `${url}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 }, // Projects listing
    { url: `${url}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 }, // Contact page
    ...projectUrls, // All individual project pages
  ];
}
