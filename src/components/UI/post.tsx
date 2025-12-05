// imports

// components
import Card from "./card";
import Image from "next/image";

// icons
import { BiSolidLike, BiSolidShare, BiSolidCommentDetail } from "react-icons/bi";

/**
 * Post component that displays the about me section inside a card.
 *
 * @returns {React.JSX.Element} The rendered about me section component.
 */
export default function Post(): React.JSX.Element {
  return (
    // Card: The card that contains the about me section
    <Card
      as="article"
      shadow="soft"
      className="w-full max-w-xl text-gray-800 dark:text-gray-200"
    >
      <header className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <Image
          src="/profile.jpg"
          alt="Profile photo of frontend developer Yousef Osama"
          width={56}
          height={56}
          className="rounded-full border-2 border-primary object-cover"
          loading="lazy"
        />

        {/* Author information */}
        <div>
          <h2 className="text-lg font-semibold">Yousef Osama</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Frontend Developer · React & Next.js Specialist
          </p>
        </div>
      </header>

      {/* Content */}
      <p className="leading-relaxed">
        Hey! I&apos;m Yousef Osama, a passionate Frontend Developer. I love turning ideas into modern, responsive, and high-performance web applications. I mainly work with React, Next.js, and TypeScript, and I enjoy exploring new technologies that make web experiences smoother and more interactive. Outside coding, I&apos;m always learning and looking for ways to level up my skills.
      </p>

      {/* Footer */}
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
  );
}
