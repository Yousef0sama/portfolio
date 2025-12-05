import SkillBadge from "../UI/skillBadge"
import type { Skill } from "@/interfaces/interfaces"

/**
 * Renders a list of skills as individual badges.
 * @param {Object} props - Component props
 * @param {Skill[]} props.skills skills - An array of skill objects to be displayed.
 * @returns {React.JSX.Element} A list of rendered skill badges.
 */
export default function Skills({skills} : {skills : Skill[]}): React.JSX.Element {
  return (
    // Wrapper list for all skill badges
    <ul className="flex flex-wrap gap-2">
      {skills.map(({skill, id}) => (
        // Each skill is passed to the SkillBadge component
        // Using 'id' ensures stable keying for React reconciliation
        <SkillBadge skill={skill} key={id} />
      ))}
    </ul>
  )
}
