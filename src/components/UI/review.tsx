import Card from "./card"
import { FaStar } from "react-icons/fa";
import type { Review as Rev } from "@/interfaces/interfaces"

interface ReviewI {
  review : Rev
}

export default function Review({review} : ReviewI) {

  const {name, source, sourceLink, comment, rating} = review

  return (
    <Card
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
  )
}
