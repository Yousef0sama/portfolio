// imports

// interfaces
import { Category } from "@/interfaces/interfaces";

/**
  * Get all categories from the database
  * @returns {Promise<Category[]>} A promise that resolves to an array of categories
  * @throws {Error} If the response is not ok
  * @throws {Error} If an error occurs
*/

export default async function getAllCategories() : Promise<Category[]> {

  try {
    // fetch the categories from the database
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    // if the response is not ok, throw an error
    if (!res.ok) {
      console.error(res);
      throw new Error("Failed to fetch categories", { cause: res.statusText },);
    }

    return await res.json();

  } catch (error) {
    // if an error occurs, log the error and return an empty array
    console.error("Error fetching categories:", error);
    return [];
  }

}