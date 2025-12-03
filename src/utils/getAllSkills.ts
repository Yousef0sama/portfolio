import { Skills } from "@/interfaces/interfaces";

export default async function getAllSkills() : Promise<Skills[]> {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/skills`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Failed to fetch skills");

    return await res.json();

  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }

}