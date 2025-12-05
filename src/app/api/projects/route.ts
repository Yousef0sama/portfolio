// Next.js API Route to fetch projects with their associated skills from Supabase

// Imports
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET request handler
export async function GET(req: NextRequest) {

  // Fetch all projects
  const { data: projectsData, error: projectsError } = await supabase
    .from("projects")
    .select("*");
  if (projectsError) {
    return NextResponse.json({ error: projectsError.message }, { status: 500 });
  }

  // Fetch all project-skill relations
  const { data: projectsSkillsData, error: projectsSkillsError } = await supabase
    .from("projects_skills")
    .select("*");
  if (projectsSkillsError) {
    return NextResponse.json({ error: projectsSkillsError.message }, { status: 500 });
  }

  // Fetch all skills
  const { data: skillsData, error: skillsError } = await supabase
    .from("skills")
    .select("*");
  if (skillsError) {
    return NextResponse.json({ error: skillsError.message }, { status: 500 });
  }

  // Map projects to include their related skills
  const projects = projectsData.map(project => {
    // Find skill IDs related to this project
    const projectSkillIds = projectsSkillsData
      .filter(ps => ps.project_id === project.id)
      .map(ps => ps.skill_id);

    // Match skill IDs to actual skill objects
    const projectSkills = skillsData
      .filter(skill => projectSkillIds.includes(skill.id));

    // Return project with its skills attached
    return {
      ...project,
      skills: projectSkills
    };
  });

  // Return the enriched projects data with caching headers
  return NextResponse.json(projects, {
    status: 200,
    headers: {
      // Cache: revalidate daily, allow stale data for 59s
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=59"
    }
  });
}
