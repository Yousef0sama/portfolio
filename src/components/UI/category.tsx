import Card from "./card"
import SkillsFetch from "../fetch/skillsFetch"
import type { Skills } from "@/interfaces/interfaces"

type CategoryI = {
  category: string;
  skills: Skills[];
}

export default function Category({category, skills} : CategoryI) {
  return (
    <Card
      as={"article"}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
        {category}
      </h3>
      <SkillsFetch skills={skills} />
    </Card>
  )
}
