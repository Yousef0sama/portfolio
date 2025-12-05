// Next.js API Route to fetch skill categories from Supabase

// Imports
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET request handler
export async function GET(req: NextRequest) {
  // Fetch all skill categories from "skills_categories" table
  const { data, error } = await supabase.from("skills_categories").select("*");

  // Handle any potential error
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return the data with caching headers
  return NextResponse.json(data, {
    status: 200,
    headers: {
      // Cache: revalidate daily, allow stale data for 59s
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=59"
    }
  });
}
