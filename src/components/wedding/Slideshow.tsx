import { useEffect, useState } from "react";

const CENTER_WIDTH = 42; // % of container width
const SIDE_WIDTH = 27; // % of container width
const STEP_OFFSET = 36; // % of container width between slide positions

export function Slideshow({
  images,
  interval = 3000,
}: {
  images: string[];
  interval?: number;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const length = images.length;

  return (
    <div className="mx-auto mt-10 max-w-3xl px-4">
      <div className="relative mx-auto aspect-[1.7857/1] w-full overflow-hidden">
        {images.map((src, index) => {
          // Shortest signed distance from the center slot, wrapping around the ends
          // of the array so the loop never has to visibly jump back to the start.
          let distance = (index - step) % length;
          if (distance > length / 2) distance -= length;
          if (distance < -length / 2) distance += length;

          const isVisible = Math.abs(distance) <= 1;
          const width = distance === 0 ? CENTER_WIDTH : SIDE_WIDTH;

          return (
            <div
              key={src}
              className="absolute top-1/2 aspect-[3/4] overflow-hidden rounded-2xl border border-border/60 shadow-lg transition-all duration-700 ease-in-out"
              style={{
                left: `${50 + distance * STEP_OFFSET}%`,
                width: `${width}%`,
                transform: "translate(-50%, -50%)",
                opacity: isVisible ? (distance === 0 ? 1 : 0.85) : 0,
                zIndex: 10 - Math.abs(distance),
                pointerEvents: isVisible ? "auto" : "none",
              }}
            >
              <img
                src={src}
                alt={`Jason and Maranyane ${index + 1}`}
                className="h-full w-full object-cover object-top"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
