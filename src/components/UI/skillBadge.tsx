/**
 * Skill badge component.
 *
 * Renders a styled badge for a given skill.
 *
 * @param {Object} props - Component props.
 * @param {string} props.skill - The name of the skill to display in the badge.
 * @returns {React.JSX.Element} The rendered skill badge.
 */
export default function SkillBadge({ skill }: { skill: string }): React.JSX.Element {
  return (
    <li
      className="px-3 py-1.5 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 text-sm font-medium transition-all duration-200 hover:bg-primary/20 dark:hover:bg-primary/30 hover:scale-105"
    >
      {skill}
    </li>
  );
}
