import { useEffect, useState } from "react";

export function Slideshow({
  images,
  interval = 3000,
}: {
  images: string[];
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Jason and Maranyane ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-plum" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
