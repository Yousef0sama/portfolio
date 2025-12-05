// imports

// interfaces
import { Skill } from "@/interfaces/interfaces";

/**
 * Fetch all skills from the API.
 *
 * Makes a GET request to `/api/skills` and returns an array of skills.
 * Applies caching and handles errors gracefully.
 *
 * @returns {Promise<Skill[]>} Promise resolving to an array of Skill objects.
 * @throws {Error} Thrown when the response status is not OK, or If an error occurs.
 */
export default async function getAllSkills(): Promise<Skill[]> {
  try {
    // Fetch the skills from the API endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/skills`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    // Throw if the response is not successful
    if (!res.ok) {
      console.error(res);
      throw new Error("Failed to fetch skills", { cause: res.statusText });
    }

    // Return the parsed JSON response
    return await res.json();
  } catch (error) {
    // Log any error that occurs and return an empty array instead
    console.error("Error fetching skills:", error);
    return [];
  }
}
