// Next.js API Route to fetch reviews from Supabase

// Imports
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET request handler
export async function GET(req: NextRequest) {
  // Fetch all reviews from the "reviews" table
  const { data, error } = await supabase.from("reviews").select("*");

  // If there is an error, return 500 with error message
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return the fetched data with caching headers
  return NextResponse.json(data, {
    status: 200,
    headers: {
      // Cache: revalidate every day (86400s) on the edge, allow stale data for 59s
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=59"
    }
  });
}
