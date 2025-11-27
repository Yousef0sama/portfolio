import ProjectsFetch from "@/components/fetch/projectsFetch"

export const metadata = {
  title: "Projects | Yousef Osama - Frontend Developer",
  description:
    "Explore the portfolio of Yousef Osama — frontend developer specializing in React, Next.js, TypeScript, and modern web applications.",

  openGraph: {
    title: "Projects | Yousef Osama - Frontend Developer",
    description:
      "Browse Yousef Osama's projects showcasing his frontend expertise, skills, and experience building modern web applications.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },

  twitter: {
    title: "Projects | Yousef Osama",
    description:
      "Check out the projects by frontend developer Yousef Osama, built with React, Next.js, and TypeScript.",
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },
};


export default function Page() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 sm:py-20 min-h-[calc(100vh-8rem)]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ProjectsFetch />
      </div>
    </main>
  )
}
