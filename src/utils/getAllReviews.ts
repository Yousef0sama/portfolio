// imports

// interfaces
import { Review } from "@/interfaces/interfaces";

/**
 * Fetch all reviews from the API.
 *
 * Makes a GET request to `/api/reviews` and returns an array of Review objects.
 * Uses caching and handles failed responses or unexpected errors.
 *
 * @returns {Promise<Review[]>} Promise resolving to an array of reviews.
 * @throws {Error} Thrown when the response is not OK, or If an error occurs.
 */
export default async function getAllReviews(): Promise<Review[]> {
  try {
    // Fetch reviews from the API endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/reviews`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    // Throw if the response indicates failure
    if (!res.ok) {
      console.error(res);
      throw new Error("Failed to fetch reviews", { cause: res.statusText });
    }

    // Return parsed JSON response
    return await res.json();
  } catch (error) {
    // Log error and return empty array as fallback
    console.error("Error fetching reviews:", error);
    return [];
  }
}
