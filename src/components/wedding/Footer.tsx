import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-cream py-12 text-center">
      <Link
        to="/"
        className="font-display text-2xl italic text-orchid transition-colors hover:text-plum md:text-3xl"
      >
        Jason & Maranyane
      </Link>
      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        31 October 2026
      </p>
      <p className="mt-6 text-xs text-muted-foreground">With love and gratitude</p>

      <div className="mt-10 w-full border-t border-border/50" />

      <div className="mt-8">
        <p className="text-xs text-muted-foreground">Website designed by</p>
        <p className="font-display mt-1 text-lg italic text-plum">Kopano Invites</p>
        <p className="mt-1 text-xs tracking-[0.05em] text-mauve">+267 72818651</p>
      </div>
    </footer>
  );
}
