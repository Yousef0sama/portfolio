// imports

// interfaces
import { Project } from "@/interfaces/interfaces";

/**
 * Fetch all projects from the API.
 *
 * Performs a GET request to `/api/projects` and returns an array of Project objects.
 * Includes caching and handles any request or parsing errors safely.
 *
 * @returns {Promise<Project[]>} Promise resolving to an array of projects.
 * @throws {Error} Thrown when the response status is not OK, or If an error occurs.
 */
export default async function getAllProjects(): Promise<Project[]> {
  try {
    // Fetch the projects from the API endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    // Throw if the response indicates failure
    if (!res.ok) {
      console.error(res);
      throw new Error("Failed to fetch projects", { cause: res.statusText });
    }

    // Return parsed JSON response
    return await res.json();
  } catch (error) {
    // Log the error and return an empty array as fallback
    console.error("Error fetching projects:", error);
    return [];
  }
}
