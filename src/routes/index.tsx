import { createFileRoute, Link } from "@tanstack/react-router";
import landingHero from "@/assets/landingpage.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jason & Maranyane — Wedding Invitation" },
      { name: "description", content: "You are invited to celebrate the wedding of Jason and Maranyane. Open the invitation to view the details." },
      { property: "og:title", content: "Jason & Maranyane — Wedding Invitation" },
      { property: "og:description", content: "You are invited to celebrate the wedding of Jason and Maranyane." },
      { property: "og:image", content: landingHero },
      { name: "twitter:image", content: landingHero },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground px-6 text-center">
      <img
        src={landingHero}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_15%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/25 to-foreground/70" />

      <div className="relative z-10 max-w-2xl">
        <h1
          className="animate-fade-up font-display flex flex-col items-center text-white"
          style={{ animationDelay: "0ms" }}
        >
          <span className="flex items-center gap-6 text-6xl uppercase leading-none tracking-wide md:gap-10 md:text-8xl">
            <span>J</span>
            <span>M</span>
          </span>
          <span className="-mt-3 text-7xl italic leading-none text-blush md:-mt-5 md:text-9xl">&</span>
        </h1>
        <p
          className="animate-fade-up mt-6 text-sm uppercase tracking-[0.25em] text-white/85"
          style={{ animationDelay: "150ms" }}
        >
          Jason & Maranyane invite you to their Wedding & Kgoroso
        </p>

        <div className="animate-fade-up mt-10" style={{ animationDelay: "300ms" }}>
          <Link
            to="/home"
            className="inline-flex items-center justify-center rounded-full border border-white bg-white px-10 py-4 font-body text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Open Invitation
          </Link>
        </div>
      </div>
    </main>
  );
}
