import { createFileRoute, Link } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Footer } from "@/components/wedding/Footer";

import { Countdown } from "@/components/wedding/Countdown";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import { ScrollDownButton } from "@/components/wedding/ScrollDownButton";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.jpeg";
import kgorosoPrint from "@/assets/kgoroso.jpeg";

export const Route = createFileRoute("/kgoroso")({
  head: () => ({
    meta: [
      { title: "Kgoroso — Jason & Maranyane" },
      {
        name: "description",
        content:
          "You are warmly invited to the Kgoroso of Jason and Maranyane on November 7, 2026.",
      },
      { property: "og:title", content: "Kgoroso — Jason & Maranyane" },
      {
        property: "og:description",
        content:
          "You are warmly invited to the Kgoroso of Jason and Maranyane on November 7, 2026.",
      },
    ],
  }),
  component: KgorosoPage,
});

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.582 7-11.5A7 7 0 0 0 5 9.5C5 14.418 12 21 12 21Z" strokeLinecap="round" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

function KgorosoPage() {
  return (
    <div className="min-h-screen bg-background pb-8">
      <main className="relative">
        {/* Hero — sized to fill exactly one screen on any device */}
        <section id="invitation" className="relative flex h-dvh flex-col">
          {/* Full-bleed photo with monogram overlay — guaranteed a majority share of the
              viewport so it doesn't shrink away on shorter screens. */}
          <div className="relative min-h-[65dvh] flex-1">
            <img
              src={image5}
              alt="Jason and Maranyane"
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-6 text-center text-white">
              <div className="flex items-end gap-3 font-display leading-none">
                <span className="text-6xl md:text-8xl">Kgoroso</span>
              </div>
              <AnimatedText
                as="p"
                text="Jason & Maranyane"
                className="mt-3 text-sm uppercase tracking-[0.35em] md:text-lg"
              />
            </div>
          </div>
        </section>

        {/* Welcome — the verse and countdown, previously part of the hero */}
        <section className="bg-neutral-800 px-6 py-8 text-center text-white md:py-10">
          <div className="mx-auto max-w-2xl">
            <div>
              <span className="block font-display text-4xl leading-none text-white/30">
                &ldquo;
              </span>
              <AnimatedText
                as="p"
                text="Where you go I will go, and where you stay I will stay."
                className="font-display -mt-2 text-lg italic leading-relaxed text-white/90 md:text-xl"
              />
              <AnimatedText
                as="p"
                text="Ruth 1:16"
                className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60"
                delay={150}
              />
            </div>

            {/* Countdown */}
            <div className="mt-6 border-t border-white/20 pt-6">
              <AnimatedText
                as="p"
                text="Counting down to"
                className="text-xs uppercase tracking-[0.3em] text-white/70"
              />
              <AnimatedText
                as="p"
                text="November 7, 2026"
                className="font-display mt-1 text-lg"
                delay={150}
              />
              <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
                <div className="relative">
                  <Countdown targetDate="2026-11-07T00:00:00+02:00" variant="white" />
                  <ScrollDownButton className="absolute -right-3 -top-14 z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section id="details" className="mx-auto max-w-4xl px-6 py-12 scroll-mt-20">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
            <div className="relative aspect-[3/4] w-56 shrink-0 sm:w-64">
              <div className="absolute inset-0 overflow-hidden rounded-t-full shadow-lg">
                <img
                  src={image4}
                  alt="Jason and Maranyane"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:flex-1 md:text-left">
              <header>
                <AnimatedText
                  as="p"
                  text="The Celebration"
                  className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
                />
                <AnimatedText
                  as="h2"
                  text="Kgoroso"
                  className="font-display mt-4 text-5xl font-semibold text-black"
                  delay={150}
                />
              </header>

              <div className="mt-6">
                <AnimatedText
                  as="p"
                  text="When"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                />
                <AnimatedText
                  as="p"
                  text="Saturday, November 7, 2026"
                  className="font-display mt-2 text-3xl text-foreground"
                  delay={150}
                />
                <AnimatedText
                  as="p"
                  text="Luncheon at 1:00 PM (1300 HRS)"
                  className="mt-1 text-muted-foreground"
                  delay={300}
                />
              </div>

              <div className="mt-6">
                <AnimatedText
                  as="p"
                  text="Where"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                />
                <AnimatedText
                  as="p"
                  text="Plot 11155"
                  className="font-display mt-2 text-3xl text-foreground"
                  delay={150}
                />
                <AnimatedText
                  as="p"
                  text="SamSam Ward, Serowe"
                  className="mt-2 text-muted-foreground"
                  delay={300}
                />
                <a
                  href="https://www.google.com/maps?q=-22.395833,26.692556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-primary-foreground"
                >
                  <MapPinIcon className="h-3.5 w-3.5" />
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="dress-code"
          className="relative overflow-hidden py-10 px-6 text-center scroll-mt-20"
        >
          <div className="mx-auto max-w-4xl">
            <AnimatedText
              as="h3"
              text="Traditional Prints"
              className="font-display text-3xl italic text-black"
            />
            <AnimatedText
              as="p"
              text="For the celebration, we invite our guests to wear traditional attire featuring this print."
              className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground"
              delay={150}
            />

            <div className="mx-auto mt-6 max-w-[10rem] overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img
                  src={kgorosoPrint}
                  alt="Kgoroso traditional print"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-4">
                <AnimatedText
                  as="p"
                  text="Traditional Print"
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-black"
                />
                <AnimatedText
                  as="p"
                  text="Guests & Family"
                  className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground"
                  delay={150}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-2xl px-6 text-center">
            {/* RSVP */}
            <section id="rsvp" className="scroll-mt-20">
              <AnimatedText
                as="p"
                text="Please respond"
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              />
              <AnimatedText
                as="h2"
                text="RSVP"
                className="font-display mt-4 text-5xl font-semibold text-black"
                delay={150}
              />

              <AnimatedText
                as="p"
                text="Kindly let us know by 31 August 2026 if you will be joining us."
                className="mt-2 text-muted-foreground"
                delay={300}
              />

              <div className="mt-6">
                <a
                  href="https://forms.gle/fTeL98NoZBZYq5EU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-10 py-4 font-body text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-foreground/90"
                >
                  <AnimatedText text="RSVP Here" />
                </a>
              </div>
            </section>

            <section id="enquiries" className="mt-10 scroll-mt-20">
              <AnimatedText
                as="h3"
                text="Need Assistance?"
                className="font-display text-2xl italic text-black"
              />
              <AnimatedText
                as="p"
                text="RSVP Coordinators"
                className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                delay={150}
              />

              <div className="mx-auto mt-6 max-w-xs text-left">
                <div className="space-y-2 text-sm text-foreground">
                  <div className="flex justify-between gap-4">
                    <AnimatedText text="Rowesai" />
                    <AnimatedText text="+267 72 107 984" className="text-muted-foreground" />
                  </div>
                  <div className="flex justify-between gap-4">
                    <AnimatedText text="Rudo" />
                    <AnimatedText text="+267 78 469 875" className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="mt-10 scroll-mt-20 text-center">
              <AnimatedText
                as="h3"
                text="FAQ"
                className="font-display text-2xl italic text-black"
              />
              <AnimatedText
                as="p"
                text="Answers to common questions (gifts, photography, transport, and more) are on our main invitation page."
                className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground"
                delay={150}
              />
              <Link
                to="/"
                hash="faqs"
                className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-plum underline underline-offset-4 transition-colors hover:text-black"
              >
                View FAQs
              </Link>
            </section>

            <p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
              <AnimatedText
                as="span"
                text="A Gentle Note on Privacy"
                className="font-semibold italic text-foreground"
              />
              <AnimatedText
                as="span"
                text=": To help us prepare for our special day, this invitation is intended solely for you and should not be shared or forwarded. By RSVPing, you kindly consent to the collection of your personal details (such as your name, and contact information) for the purposes of managing our entrance registry upon arrival, arranging table seating, and ensuring security. Please note that photographs and videos captured throughout the celebration may be shared with our loved ones and on our social media pages."
                delay={150}
              />
            </p>
          </div>
        </section>
      </main>

      <Footer date="7 November 2026" />
      <BottomNav />
    </div>
  );
}
