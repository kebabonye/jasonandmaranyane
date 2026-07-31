import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const CHAR_STAGGER_MS = 14;
const MAX_TOTAL_STAGGER_MS = 900;

// Reveals text one letter at a time as it scrolls into view. Words are kept
// in their own non-wrapping span so the per-letter split never breaks a
// word mid-way; the real space between words stays a normal text node so
// line-wrapping between words still works.
export function AnimatedText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const totalChars = text.replace(/ /g, "").length;
  const step = Math.min(CHAR_STAGGER_MS, MAX_TOTAL_STAGGER_MS / Math.max(totalChars, 1));

  let charIndex = 0;
  const nodes: ReactNode[] = [];
  words.forEach((word, wi) => {
    nodes.push(
      <span key={`w${wi}`} className="inline-block whitespace-nowrap">
        {Array.from(word).map((char) => {
          const i = charIndex++;
          return (
            <span
              key={i}
              aria-hidden="true"
              className={`inline-block ${inView ? "animate-char-in" : "opacity-0"}`}
              style={inView ? { animationDelay: `${delay + i * step}ms` } : undefined}
            >
              {char}
            </span>
          );
        })}
      </span>,
    );
    if (wi < words.length - 1) nodes.push(" ");
  });

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {nodes}
    </Tag>
  );
}
