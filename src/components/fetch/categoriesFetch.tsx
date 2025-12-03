import Category from "../UI/category";
import type { Skills, Categories } from "@/interfaces/interfaces";
import getAllCategories from "@/utils/getAllCategories";
import getAllSkills from "@/utils/getAllSkills";

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
  const categories: Categories[] = await getAllCategories();
  const skills: Skills[] = await getAllSkills();


  return <CategoriesFetchUI categories={categories} skills={skills} />;
}

