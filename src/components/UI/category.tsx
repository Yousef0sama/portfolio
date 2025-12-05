// imports

// components
import Card from "./card";
import SkillsFetch from "../fetch/skillsFetch";

// interfaces
import type { Skill } from "@/interfaces/interfaces";

type CategoryI = {
  category: string;
  skills: Skill[];
};

/**
 * Renders a category section containing a title and a list of skills.
 *
 * @param {CategoryI} props - Category name plus array of skills
 * @returns {React.JSX.Element} Category card component
 */
export default function Category({
  category,
  skills,
}: CategoryI): React.JSX.Element {
  return (
    <Card as={"article"}>
      {/* Category Title */}
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
        {category}
      </h3>

      {/* Skills List */}
      <SkillsFetch skills={skills} />
    </Card>
  );
}
