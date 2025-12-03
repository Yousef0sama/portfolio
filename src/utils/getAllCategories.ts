import { Categories } from "@/interfaces/interfaces";

export default async function getAllCategories() : Promise<Categories[]> {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Failed to fetch categories");

    return await res.json();

  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

}