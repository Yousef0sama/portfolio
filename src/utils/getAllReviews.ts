import { Review } from "@/interfaces/interfaces";

export default async function getAllReviews() : Promise<Review[]> {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/reviews`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Failed to fetch reviews");

    return await res.json();

  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }

}