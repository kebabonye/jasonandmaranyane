import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Slideshow } from "@/components/wedding/Slideshow";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.png";

const galleryImages = [image1, image2, image3, image4];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jason & Maranyane" },
      { name: "description", content: "Photos from Jason and Maranyane's wedding celebrations." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen pb-8">
      <section id="gallery" className="scroll-mt-20 bg-background px-6 pb-10 pt-10 text-center">
        <AnimatedText as="p" text="Our Moments" className="text-xs uppercase tracking-[0.3em] text-muted-foreground" />
        <AnimatedText
          as="h2"
          text="Gallery"
          className="font-display mt-4 text-3xl uppercase tracking-[0.15em] text-black"
        />

        <Slideshow images={galleryImages} />
      </section>

      <section id="share-photos" className="scroll-mt-20 bg-black px-6 py-10 text-center text-white">
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
          <a
            href="https://photos.app.goo.gl/iHryjNq78U5T1PqY7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-4 font-body text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white/20"
          >
            Add To Our Album
          </a>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
