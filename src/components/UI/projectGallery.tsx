"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [thumbRef, thumbApi] = useEmblaCarousel({ dragFree: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = (i: number) => {
    emblaApi?.scrollTo(i);
  };

  // Sync main slider with thumbnail slider
  emblaApi?.on("select", () => {
    const index = emblaApi.selectedScrollSnap();
    thumbApi?.scrollTo(index);
  });

  return (
    <div className="w-full">
      {/* MAIN SLIDER */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="min-w-full">
              <Image
                src={src}
                alt={`Screenshot of ${title} project`}
                className="w-full aspect-video object-contain rounded-2xl border"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          aria-label="slide to left"
          title="slide to left"
          className="absolute hidden md:block cursor-pointer top-1/2 left-0 -translate-y-1/2 hover:bg-primary/40 text-primary/40 dark:text-primary/80 hover:text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          aria-label="slide to right"
          title="slide to right"
          className="absolute hidden md:block cursor-pointer top-1/2 right-0 -translate-y-1/2 hover:bg-primary/40 text-primary/40 dark:text-primary/80 hover:text-white p-2 rounded-full"
        >
          <FaArrowRight/>
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 overflow-hidden" ref={thumbRef}>
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="min-w-[80px] h-[60px] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={src}
                alt={`Thumb ${i}`}
                className="w-full h-full object-contain"
                width={300}
                height={300}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
