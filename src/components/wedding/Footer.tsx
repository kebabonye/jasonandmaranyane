import { Link } from "@tanstack/react-router";
import { AnimatedText } from "@/components/wedding/AnimatedText";

export function Footer({ date = "31 October 2026" }: { date?: string }) {
  return (
    <footer className="border-t border-border/40 bg-cream py-12 text-center">
      <Link
        to="/"
        className="font-display text-2xl italic text-orchid transition-colors hover:text-plum md:text-3xl"
      >
        <AnimatedText text="Jason & Maranyane" />
      </Link>
      <AnimatedText
        as="p"
        text={date}
        className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        delay={150}
      />
      <AnimatedText
        as="p"
        text="With love and gratitude"
        className="mt-6 text-xs text-muted-foreground"
        delay={300}
      />

      <div className="mt-10 w-full border-t border-border/50" />

      <div className="mt-8">
        <AnimatedText as="p" text="Website designed by" className="text-xs text-muted-foreground" />
        <AnimatedText
          as="p"
          text="Kopano Invites"
          className="font-display mt-1 text-lg italic text-plum"
          delay={150}
        />
        <AnimatedText
          as="p"
          text="+267 72818651"
          className="mt-1 text-xs tracking-[0.05em] text-mauve"
          delay={300}
        />
      </div>
    </footer>
  );
}
