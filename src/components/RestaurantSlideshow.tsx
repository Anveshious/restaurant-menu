"use client";

import { useEffect, useState } from "react";

type RestaurantSlideshowProps = {
  images: string[];
};

export default function RestaurantSlideshow({ images }: RestaurantSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="mx-auto mb-8 flex h-64 items-center justify-center overflow-hidden rounded-4xl border border-charcoal/10 bg-linear-to-br from-spice/20 via-cream to-charcoal/10 shadow-sm sm:h-80">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 text-3xl shadow-sm">
            📷
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-charcoal/60">
            Restaurant photo placeholder
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            Add images to the restaurant-images folder to start the slideshow
          </p>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative mx-auto mb-8 h-64 overflow-hidden rounded-4xl border border-charcoal/10 shadow-sm sm:h-80">
      {images.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image}
          src={image}
          alt={`Restaurant view ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
            index === currentIndex ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10" />

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-charcoal shadow-sm transition hover:bg-white"
      >
        ←
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-charcoal shadow-sm transition hover:bg-white"
      >
        →
      </button>

      <div className="absolute bottom-0 left-1/2 flex w-full max-w-500 -translate-x-1/2 items-center gap-0.2 overflow-hidden rounded-b-4xl">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-1.5 flex-1 overflow-hidden bg-white/40 transition-all duration-500 ${
              index === currentIndex ? "bg-white/60" : ""
            }`}
          >
            <span
              className={`absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-700 ease-out ${
                index === currentIndex ? "w-full" : "w-0 ease-in"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
