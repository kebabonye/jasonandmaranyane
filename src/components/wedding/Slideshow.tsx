import { useEffect, useState } from "react";

const CARD_ASPECT = 3 / 4; // width / height, matches the source photos

// Horizontal coverflow — sm screens and up.
const CENTER_WIDTH_H = 46; // % of row width
const SIDE_WIDTH_H = 29; // % of row width
const STEP_OFFSET_H = CENTER_WIDTH_H / 2 + SIDE_WIDTH_H / 2; // touching, not overlapping
// Row height is sized off the center card so it isn't clipped; VISIBLE_HEIGHT_FRACTION
// keeps a gentle top/bottom crop for a cinematic frame instead of showing the full card.
const VISIBLE_HEIGHT_FRACTION_H = 0.9;
const ROW_ASPECT_H = 1 / ((CENTER_WIDTH_H / 100 / CARD_ASPECT) * VISIBLE_HEIGHT_FRACTION_H);

// Vertical stack — below sm, cards move up/down instead of left/right.
const CENTER_HEIGHT_V = 54; // % of row height
const SIDE_HEIGHT_V = 32; // % of row height
const STEP_OFFSET_V = CENTER_HEIGHT_V / 2 + SIDE_HEIGHT_V / 2; // touching, not overlapping
// Row width equals the container width; pick a row height that lands the center
// card at roughly 60% of the container's width so it isn't clipped sideways.
const CENTER_WIDTH_FRACTION_TARGET_V = 0.6;
const ROW_ASPECT_V = 1 / ((CENTER_WIDTH_FRACTION_TARGET_V / CARD_ASPECT) * (100 / CENTER_HEIGHT_V));

function useDistances(images: string[], step: number) {
  const length = images.length;
  return images.map((src, index) => {
    // Shortest signed distance from the center slot, wrapping around the ends
    // of the array so the loop never has to visibly jump back to the start.
    let distance = (index - step) % length;
    if (distance > length / 2) distance -= length;
    if (distance < -length / 2) distance += length;
    return { src, index, distance };
  });
}

export function Slideshow({ images, interval = 3000 }: { images: string[]; interval?: number }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const slides = useDistances(images, step);

  return (
    <div className="mx-auto mt-6 max-w-4xl px-2 sm:px-4">
      {/* Vertical stack — mobile only, cards move up/down */}
      <div
        className="relative mx-auto w-full overflow-hidden sm:hidden"
        style={{ aspectRatio: ROW_ASPECT_V }}
      >
        {slides.map(({ src, index, distance }) => {
          const isVisible = Math.abs(distance) <= 1;
          const height = distance === 0 ? CENTER_HEIGHT_V : SIDE_HEIGHT_V;

          return (
            <div
              key={src}
              className="absolute left-1/2 aspect-[3/4] overflow-hidden rounded-2xl border border-border/60 shadow-lg transition-all duration-700 ease-in-out"
              style={{
                top: `${50 + distance * STEP_OFFSET_V}%`,
                height: `${height}%`,
                width: "auto",
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

      {/* Horizontal coverflow — sm and up, cards move left/right */}
      <div
        className="relative mx-auto hidden w-full overflow-hidden sm:block"
        style={{ aspectRatio: ROW_ASPECT_H }}
      >
        {slides.map(({ src, index, distance }) => {
          const isVisible = Math.abs(distance) <= 1;
          const width = distance === 0 ? CENTER_WIDTH_H : SIDE_WIDTH_H;

          return (
            <div
              key={src}
              className="absolute top-1/2 aspect-[3/4] overflow-hidden rounded-2xl border border-border/60 shadow-lg transition-all duration-700 ease-in-out"
              style={{
                left: `${50 + distance * STEP_OFFSET_H}%`,
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
