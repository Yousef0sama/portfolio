// imports

// components
import Category from "../UI/category";

// utils
import getAllCategories from "@/utils/getAllCategories";
import getAllSkills from "@/utils/getAllSkills";

// interfaces
import type { Skill, Category as CategoryType } from "@/interfaces/interfaces";

type Props = {
  categories: CategoryType[];
  skills: Skill[];
};

/**
 * CategoriesFetchUI component
 *
 * Renders a grid of Category components.
 * Each category receives its associated skills filtered by category_id.
 *
 * @param {Props} props - Component props
 * @param {CategoryType[]} props.categories - Array of categories
 * @param {Skill[]} props.skills - Array of skills
 * @returns {React.JSX.Element} A grid of Category components
 */
function CategoriesFetchUI({ categories, skills }: Props): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Render each category with its associated skills */}
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

/**
 * CategoriesFetch server component
 *
 * Fetches categories and skills from the backend.
 * Passes fetched data to CategoriesFetchUI for rendering.
 *
 * @returns {Promise<JSX.Element>} Rendered CategoriesFetchUI component
 */
export default async function CategoriesFetch() {
  // Fetch all categories and skills
  const categories: CategoryType[] = await getAllCategories();
  const skills: Skill[] = await getAllSkills();

  // Render the UI component with fetched data
  return <CategoriesFetchUI categories={categories} skills={skills} />;
}
