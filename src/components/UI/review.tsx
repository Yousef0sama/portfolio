// imports

// components
import Card from "./card";

// icons
import { FaStar } from "react-icons/fa";

// interfaces
import type { Review as ReviewType } from "@/interfaces/interfaces";

/**
 * Review component that displays a single review inside a card.
 *
 * @param {Object} props - Component props.
 * @param {ReviewType} props.review - The review data to display.
 * @returns {React.JSX.Element} The rendered review component.
 */
export default function Review({ review }: { review: ReviewType }): React.JSX.Element {
  const { name, source, sourceLink, comment, rating } = review;

  return (
    <Card
      as="article"
      shadow="soft"
      className="w-full max-w-xl text-gray-800 dark:text-gray-200 p-6"
    >
      <header className="flex items-center justify-between mb-4">
        {/* Avatar: The avatar of the reviewer */}
        <div className="flex items-center gap-3">
          <div
            className="bg-primary/20 text-primary w-12 h-12 rounded-full flex justify-center items-center text-xl font-semibold"
            aria-hidden="true"
          >
            {name[0]}
          </div>

          {/* Reviewer information */}
          <div>
            {/* Reviewer name */}
            <h3 className="text-lg font-semibold">{name}</h3>

            {/* Rating */}
            <div className="flex text-amber-400 text-base mt-1">
              {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Source */}
            <p className="text-sm text-gray-500 dark:text-gray-300 capitalize mt-1">
              from {source}
            </p>
          </div>
        </div>
      </header>

      {/* Review Body */}
      <figure>
        {/* Comment */}
        <blockquote className="leading-relaxed italic" cite={sourceLink}>
          {comment}
        </blockquote>

        {/* Reviewer information */}
        <figcaption className="sr-only">
          Review written by {name} from {source}
        </figcaption>
      </figure>
    </Card>
  );
}
