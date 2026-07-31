import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Slideshow } from "@/components/wedding/Slideshow";
import { AnimatedText } from "@/components/wedding/AnimatedText";
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
    <div className="min-h-screen pb-8">
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={homeHero}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_15%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-2xl">
          <AnimatedText
            as="p"
            text="With joyful hearts"
            className="text-xs uppercase tracking-[0.3em] text-white/85"
          />
          <h1 className="font-display mt-4 text-4xl leading-tight text-white md:text-6xl">
            <span className="sr-only">Jason &amp; Maranyane</span>
            <span aria-hidden="true" className="inline-flex flex-wrap items-center justify-center gap-x-2">
              <AnimatedText as="span" text="Jason" delay={150} />
              <span
                className="animate-char-in inline-block font-display italic text-blush"
                style={{ animationDelay: "220ms" }}
              >
                &amp;
              </span>
              <AnimatedText as="span" text="Maranyane" delay={260} />
            </span>
          </h1>
          <AnimatedText
            as="p"
            text="Together with their families, invite you to join them at the celebration of their marriage"
            className="mt-4 text-xs font-light uppercase tracking-[0.2em] text-white/85"
            delay={450}
          />

          <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <span className="mt-6 block font-display text-4xl leading-none text-white/40">&ldquo;</span>
            <AnimatedText
              as="p"
              text="For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
              className="font-display -mt-2 text-lg italic leading-relaxed text-white md:text-xl"
            />
            <AnimatedText
              as="p"
              text="Mark 10:7-9"
              className="mt-2 text-xs uppercase tracking-[0.3em] text-white/85"
              delay={300}
            />
          </div>
        </div>
      </main>

      <section id="gallery" className="scroll-mt-20 bg-background px-6 py-16 text-center">
        <AnimatedText as="p" text="Our Moments" className="text-xs uppercase tracking-[0.3em] text-muted-foreground" />
        <AnimatedText
          as="h2"
          text="Gallery"
          className="font-display mt-4 text-3xl uppercase tracking-[0.15em] text-black"
        />

        <Slideshow images={galleryImages} />
      </section>

      <section id="share-photos" className="scroll-mt-20 bg-black px-6 py-16 text-center text-white">
        <AnimatedText as="p" text="Share Your Photos" className="text-xs uppercase tracking-[0.3em] text-white/70" />
        <AnimatedText
          as="h2"
          text="Add To Our Album"
          className="font-display mt-4 text-3xl uppercase tracking-[0.15em]"
          delay={150}
        />
        <AnimatedText
          as="p"
          text="Did you capture some great moments? Upload your photos and videos from the celebration to our shared Google Photos album so we can relive the day together."
          className="mx-auto mt-4 max-w-xl leading-relaxed text-white/80"
          delay={300}
        />

        <div className="mt-8">
          <span className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-4 font-body text-xs uppercase tracking-[0.25em] text-white/60">
            Google Photos link coming soon
          </span>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
