import { Projects } from "@/interfaces/interfaces";

export default async function getAllProjects() : Promise<Projects[]> {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
      headers: { "Cache-Control": "public, s-maxage=86400" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    return await res.json();

  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

}