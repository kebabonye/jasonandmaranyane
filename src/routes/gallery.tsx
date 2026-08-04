import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Slideshow } from "@/components/wedding/Slideshow";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";
import image9 from "@/assets/image9.jpg";
import image10 from "@/assets/image10.jpg";

const galleryImages = [
  image2,
  image7,
  image10,
  image8,
  image6,
  image1,
  image5,
  image3,
  image2,
  image9,
];
const sharedAlbumUrl = "https://photos.app.goo.gl/iHryjNq78U5T1PqY7";

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

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="rounded-2xl bg-white p-3">
            <QRCodeSVG value={sharedAlbumUrl} size={160} />
          </div>

          <a
            href={sharedAlbumUrl}
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
