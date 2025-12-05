// imports

// components
import Card from "./card";
import Image from "next/image";
import Link from "next/link";

// interfaces
import type { Project as ProjectType } from "@/interfaces/interfaces";

/**
 * Project component that displays a single project inside a card.
 *
 * @param {Object} props - Component props.
 * @param {ProjectType} props.project - The project data to display.
 * @returns {React.JSX.Element} The rendered project component.
 */
export default function Project({ project }: { project: ProjectType }): React.JSX.Element {
  const { title, description, thumbnail, date, slug } = project;

  const endText = description[99] === " " ? 99 : 100;

  return (
    <Card as={"article"} hoverEffect shadow="soft" className="max-w-xs mx-auto sm:mx-0">
      {/* Link to the project page */}
      <Link href={`projects/${slug}`}>
        {/* Header */}
        <header className="flex flex-col gap-4 mb-3">
          {/* Thumbnail */}
          <Image
            src={thumbnail}
            alt={`${title} project photo`}
            width={300}
            height={63825 / 338}
            loading="lazy"
            className="rounded-lg w-full border-2 border-solid shadow"
          />
          {/* Title */}
          <h2 className="text-primary font-bold">{title}</h2>
        </header>

        {/* Description */}
        <p className="mb-6">{description.substring(0, endText)}...</p>

        {/* Date */}
        <footer className="flex justify-end">
          <time dateTime={date} className="text-primary bg-primary/10 rounded-full px-3 py-2">
            {date}
          </time>
        </footer>
      </Link>
    </Card>
  );
}
