import SkillBadge from "../UI/skillBadge"
import type { Skills } from "@/interfaces/interfaces"

export default function Skills({skills} : {skills : Skills[]}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map(({skill, id}) => (
        <SkillBadge skill={skill} key={id} />
      ))}
    </ul>
  )
}
