import Category from "../UI/category";
import type { Skills, Categories } from "@/interfaces/interfaces";

type Props = {
  categories: Categories[];
  skills: Skills[];
};

function CategoriesFetchUI({ categories, skills }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {categories.map(({ id, category }) => (
        <Category
          key={id}
          category={category}
          skills={skills.filter(s => s.category_id === id)}
        />
      ))}
    </div>
  );
}

export default async function CategoriesFetch() {
  let categories: Categories[] = [];
  let skills: Skills[] = [];

  try {
    const [catsRes, skillsRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`, {
        headers: { "Cache-Control": "public, s-maxage=86400" },
        next: { revalidate: 86400 }
      }),
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/skills`, {
        headers: { "Cache-Control": "public, s-maxage=86400" },
        next: { revalidate: 86400 }
      }),
    ]);

    categories = await catsRes.json();
    skills = await skillsRes.json();
  } catch (error) {
    console.error("Failed to fetch categories or skills", error);
  }


  return <CategoriesFetchUI categories={categories} skills={skills} />;
}

