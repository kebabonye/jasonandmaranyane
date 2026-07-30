import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import homeHero from "@/assets/homepage.jpeg";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Jason & Maranyane — Wedding Invitation" },
      { name: "description", content: "You are invited to celebrate the wedding of Jason and Maranyane." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 text-center">
      <img
        src={homeHero}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_15%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/85">
          With joyful hearts
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-white md:text-6xl">
          Jason <span className="font-display italic text-blush">&</span> Maranyane
        </h1>
        <p className="mt-4 text-xs font-light uppercase tracking-[0.2em] text-white/85">
          Together with their families, invite you to join them at the celebration of their marriage
        </p>

        <span className="mt-6 block font-display text-4xl leading-none text-white/40">&ldquo;</span>
        <p className="font-display -mt-2 text-lg italic leading-relaxed text-white md:text-xl">
          For this reason a man will leave his father and mother and be united to his
          wife, and the two will become one flesh. So they are no longer two, but one
          flesh. Therefore what God has joined together, let no one separate.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/85">
          Mark 10:7-9
        </p>
      </div>

      <BottomNav />
    </main>
  );
}
