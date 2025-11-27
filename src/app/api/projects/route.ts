import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {

  const { data: projectsData, error: projectsError } = await supabase
    .from("projects")
    .select("*");

  if (projectsError) {
    return NextResponse.json({ error: projectsError.message }, { status: 500 });
  }

  const { data: projectsSkillsData, error: projectsSkillsError } = await supabase
    .from("projects_skills")
    .select("*");

  if (projectsSkillsError) {
    return NextResponse.json({ error: projectsSkillsError.message }, { status: 500 });
  }

  const { data: skillsData, error: skillsError } = await supabase
    .from("skills")
    .select("*");

  if (skillsError) {
    return NextResponse.json({ error: skillsError.message }, { status: 500 });
  }

  const projects = projectsData.map(project => {
    const projectSkillIds = projectsSkillsData
      .filter(ps => ps.project_id === project.id)
      .map(ps => ps.skill_id);

    const projectSkills = skillsData
      .filter(skill => projectSkillIds.includes(skill.id));

    return {
      ...project,
      skills: projectSkills
    };
  });

  return NextResponse.json(projects, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=59"
    }
  });
}
