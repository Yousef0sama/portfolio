// imports

// components
import Image from "next/image";
import CTA from "@/components/UI/CTA";

// icons
import { FaDownload } from "react-icons/fa";

/**
 * Home page component showcasing the hero section.
 * Includes introduction, CTA buttons, profile image, and structured data for SEO.
 */
export default function Page() {
  return (
    <>
      {/* Structured Data for SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Yousef Osama - Frontend Developer",
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/`,
            "description": "Frontend developer specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects, skills, and experience in building beautiful, responsive web applications.",
            "inLanguage": "en",
            "author": {
              "@type": "Person",
              "name": "Yousef Osama",
              "url": `${process.env.NEXT_PUBLIC_SITE_URL}/`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Yousef Osama",
            }
          }),
        }}
      />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-16 min-h-[calc(100vh-8rem)]">

        {/* Left Side: Introduction Text */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 animate-fade-in">
            Hi, I&apos;m <span className="text-primary">Yousef Osama</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-secondary font-semibold mb-4 animate-fade-in-delay">
            Frontend Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-delay-2">
            I build modern, responsive, and high-performance web applications
            using React, Next.js, and TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-delay-3">
            {/* Contact Button */}
            <CTA
              href="/contact"
              variant="primary"
              size="lg"
              ariaLabel="Contact me"
              title="Get in touch with me"
            >
              Contact Me
            </CTA>

            {/* Download CV Button */}
            <CTA
              href="/Yousef_Osama_CV.pdf"
              variant="secondary"
              size="lg"
              ariaLabel="Download my CV"
              title="Download my resume"
              download={true}
            >
              <FaDownload /> &nbsp; Download CV
            </CTA>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-float">
            {/* Background gradient glow */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 dark:ring-primary/10">
              <Image
                src="/profile.jpg"
                alt="Yousef Osama - Frontend Developer Profile Photo"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover"
                quality={90}
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 33vw"
              />
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
