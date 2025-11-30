import Card from "@/components/UI/card";
import Image from "next/image";
import { BiSolidLike, BiSolidShare, BiSolidCommentDetail } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { reviews } from "@/data/testimonials";
import CategoriesFetch from "@/components/fetch/categoriesFetch";

export const metadata = {
  title: "About Me | Yousef Osama - Frontend Developer",
  description:
    "Learn more about Yousef Osama — a frontend developer specializing in React, Next.js, TypeScript, and modern web development.",

  openGraph: {
    title: "About Me | Yousef Osama - Frontend Developer",
    description:
      "Discover who Yousef Osama is, his frontend expertise, skills, and professional background.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },

  twitter: {
    title: "About Me | Yousef Osama",
    description:
      "Learn more about frontend developer Yousef Osama and his experience with React, Next.js, and TypeScript.",
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
};


export default function AboutPage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yousef Osama",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            "sameAs": [
              "https://github.com/Yousef0sama",
              "https://www.linkedin.com/in/yousef-osama-652667380"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Self-employed",
            },
            "jobTitle": "Frontend Developer",
            "knowsAbout": [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Bootstrap",
              "Redux.js",
              "Responsive Web Design",
              "Frontend Performance Optimization"
            ],
            "image": `${process.env.NEXT_PUBLIC_SITE_URL}/profile.jpg`,
            "description": "Frontend developer specializing in React, Next.js, TypeScript, and modern web development."
          }),
        }}
      />

      <main className="flex-1 min-h-[calc(100vh-8rem)]">
        <section
          aria-labelledby="about-heading"
          className="container mx-auto flex flex-col justify-center items-center gap-12 px-4 py-12 sm:px-6 sm:py-20 lg:gap-16"
        >
          {/* Page Main Title */}
          <h1 id="about-heading" className="sr-only">
            About Yousef Osama – Frontend Developer
          </h1>

          {/* Main About Card */}
          <Card
            as="article"
            shadow="soft"
            className="w-full max-w-xl text-gray-800 dark:text-gray-200"
          >
            <header className="flex items-center gap-3 mb-4">
              <Image
                src="/profile.jpg"
                alt="Profile photo of frontend developer Yousef Osama"
                width={56}
                height={56}
                className="rounded-full border-2 border-primary object-cover"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  Yousef Osama
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Frontend Developer · React & Next.js Specialist
                </p>
              </div>
            </header>

            <p className="leading-relaxed">
              Hey! I&apos;m Yousef Osama, a passionate Frontend Developer. I love turning ideas into modern, responsive, and high-performance web applications. I mainly work with React, Next.js, and TypeScript, and I enjoy exploring new technologies that make web experiences smoother and more interactive. Outside coding, I&apos;m always learning and looking for ways to level up my skills.
            </p>

            <footer className="flex items-center gap-8 mt-4 text-gray-600 dark:text-gray-300">
              <button aria-label="Like this post" className="text-2xl transition">
                <BiSolidLike />
              </button>
              <button aria-label="Comment on this post" className="text-2xl transition">
                <BiSolidCommentDetail />
              </button>
              <button aria-label="Share this post" className="text-2xl transition">
                <BiSolidShare />
              </button>
            </footer>
          </Card>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Skills & Technologies
          </h2>

          <CategoriesFetch />

        </section>

        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="container mx-auto px-4 py-12 sm:px-6 sm:py-20"
        >
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {reviews.map(({ name, source, sourceLink, comment, rating }, id) => (
              <Card
                key={id}
                as="article"
                shadow="soft"
                className="w-full max-w-xl text-gray-800 dark:text-gray-200 p-6"
              >
                <header className="flex items-center justify-between mb-4">
                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-primary/20 text-primary w-12 h-12 rounded-full flex justify-center items-center text-xl font-semibold"
                      aria-hidden="true"
                    >
                      {name[0]}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <div className="flex text-amber-400 text-base mt-1">
                        {Array.from({ length: rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-300 capitalize mt-1">
                        from {source}
                      </p>
                    </div>
                  </div>
                </header>

                {/* Review Body */}
                <figure>
                  <blockquote
                    className="leading-relaxed italic"
                    cite={sourceLink}
                  >
                    {comment}
                  </blockquote>
                  <figcaption className="sr-only">
                    Review written by {name} from {source}
                  </figcaption>
                </figure>
              </Card>
            ))}
          </div>
        </section>


      </main>
    </>
  );
}
