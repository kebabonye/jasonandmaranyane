import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import homeHero from "@/assets/homepage.jpeg";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.png";

const galleryImages = [image1, image2, image3, image4];

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
    <div className="min-h-screen pb-16">
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
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
      </main>

      <section id="gallery" className="scroll-mt-20 bg-background px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Moments</p>
        <h2 className="font-display mt-4 text-3xl uppercase tracking-[0.15em] text-black">Gallery</h2>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div key={src} className="aspect-square overflow-hidden rounded-2xl border border-border/60">
              <img
                src={src}
                alt={`Jason and Maranyane ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
