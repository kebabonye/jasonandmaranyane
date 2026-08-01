import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Footer } from "@/components/wedding/Footer";

import { Countdown } from "@/components/wedding/Countdown";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import { FaqSection } from "@/components/wedding/FaqSection";
import bgImage from "@/assets/homepage.jpeg";
import programImage from "@/assets/program.jpeg";
import groomstrad from "@/assets/groomstrad.jpeg";
import bridestrad from "@/assets/bridestrad.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Invitation — Jason & Maranyane" },
      {
        name: "description",
        content:
          "You are warmly invited to celebrate the wedding of Jason and Maranyane on October 31, 2026.",
      },
      { property: "og:title", content: "Invitation — Jason & Maranyane" },
      {
        property: "og:description",
        content:
          "You are warmly invited to celebrate the wedding of Jason and Maranyane on October 31, 2026.",
      },
    ],
  }),
  component: InvitationPage,
});

const schedule = [
  { event: "Church Service", detail: "Spiritual Healing Church, Mahalapye" },
  { event: "Photography" },
  { event: "The Wedding Celebration", detail: "Molapo Gardens, Mahalapye" },
];

function InvitationPage() {
  return (
    <div className="min-h-screen pb-8">
      {/* Fixed full-page photo backdrop — every section below scrolls over this same image
          in its own translucent card, rather than each section carrying its own background. */}
      <div className="fixed inset-0 -z-10">
        <img src={bgImage} alt="" className="h-full w-full object-cover object-[50%_15%]" />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <main className="relative">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <img
            src={bgImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_15%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

          <div className="relative z-10 mt-24 max-w-2xl md:mt-32">
            <AnimatedText
              as="p"
              text="With joyful hearts"
              className="text-xs uppercase tracking-[0.3em] text-white/85"
            />
            <h1 className="font-display mt-4 text-4xl leading-tight text-white md:text-6xl">
              <span className="sr-only">Jason &amp; Maranyane</span>
              <span
                aria-hidden="true"
                className="inline-flex flex-wrap items-center justify-center gap-x-2"
              >
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

            <div
              className="animate-fade-up mt-6 border-t border-white/20 pt-6"
              style={{ animationDelay: "500ms" }}
            >
              <AnimatedText
                as="p"
                text="Counting down to"
                className="text-xs uppercase tracking-[0.3em] text-white/70"
              />
              <AnimatedText
                as="p"
                text="October 31, 2026"
                className="font-display mt-1 text-lg text-white"
                delay={150}
              />
              <div className="mt-4 flex justify-center">
                <Countdown variant="dark" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 py-6">
          {/* Details */}
          <section
            id="details"
            className="scroll-mt-20 bg-background/95 px-6 py-8 text-center md:px-12"
          >
            <header>
              <AnimatedText
                as="p"
                text="The Celebration"
                className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              />
              <AnimatedText
                as="h2"
                text="Wedding Details"
                className="font-display mt-4 text-5xl font-semibold text-black"
                delay={150}
              />
            </header>

            <div className="mx-auto mt-6 max-w-xl">
              <span className="block font-display text-4xl leading-none text-muted-foreground/40">
                &ldquo;
              </span>
              <AnimatedText
                as="p"
                text="For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
                className="font-display -mt-2 text-lg italic leading-relaxed text-foreground md:text-xl"
              />
              <AnimatedText
                as="p"
                text="Mark 10:7-9"
                className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                delay={300}
              />
            </div>

            <div className="mt-6 border-t border-border/40 pt-6">
              <AnimatedText
                as="p"
                text="When"
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
              />
              <AnimatedText
                as="p"
                text="Saturday, October 31, 2026"
                className="font-display mt-2 text-3xl text-foreground"
                delay={150}
              />
              <AnimatedText
                as="p"
                text="Celebration time to be confirmed."
                className="mt-1 text-sm text-muted-foreground"
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
                text="Molapo Gardens"
                className="font-display mt-2 text-3xl text-foreground"
                delay={150}
              />
              <AnimatedText
                as="p"
                text="Mahalapye"
                className="mt-2 text-muted-foreground"
                delay={300}
              />
            </div>
          </section>

          {/* Program */}
          <section id="program" className="relative scroll-mt-20 overflow-hidden">
            <img
              src={programImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative px-6 py-8 md:px-12">
              <AnimatedText
                as="h3"
                text="Schedule of Events"
                className="font-display text-center text-3xl italic text-white"
              />
              <div className="mx-auto mt-6 max-w-2xl">
                {schedule.map((item) => (
                  <div
                    key={item.event}
                    className="border-b border-white/20 py-4 text-center last:border-b-0"
                  >
                    <AnimatedText
                      as="p"
                      text={item.event}
                      className="font-display text-lg text-white/90"
                    />
                    {item.detail && (
                      <AnimatedText
                        as="p"
                        text={item.detail}
                        className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60"
                        delay={150}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dress Code */}
          <section
            id="dress-code"
            className="scroll-mt-20 bg-background/95 px-6 py-8 text-center md:px-12"
          >
            <AnimatedText
              as="h3"
              text="Traditional Prints"
              className="font-display text-3xl italic text-black"
            />
            <AnimatedText
              as="p"
              text="For the celebration, we invite our guests to wear traditional attire featuring these fabrics."
              className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground"
              delay={150}
            />

            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
              <div className="w-40 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={groomstrad}
                    alt="Groom's traditional print"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <AnimatedText
                    as="p"
                    text="Groom's Print"
                    className="text-sm font-semibold uppercase tracking-[0.15em] text-black"
                  />
                  <AnimatedText
                    as="p"
                    text="Groom's Friends & Family"
                    className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    delay={150}
                  />
                </div>
              </div>

              <div className="w-40 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={bridestrad}
                    alt="Bride's traditional print"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <AnimatedText
                    as="p"
                    text="Bride's Print"
                    className="text-sm font-semibold uppercase tracking-[0.15em] text-black"
                  />
                  <AnimatedText
                    as="p"
                    text="Bride's Friends & Family"
                    className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    delay={150}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* RSVP, Enquiries, FAQs, Privacy */}
          <section className="bg-background/95 px-6 py-8 text-center md:px-12">
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
                  href="https://forms.gle/CpChXe8t76zyVran8"
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

              <div className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-foreground">
                <div className="flex justify-between gap-4">
                  <AnimatedText text="Dineo" />
                  <AnimatedText
                    text="+267 73 209 745 / 71 546 792"
                    className="text-muted-foreground"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <AnimatedText text="Precious" />
                  <AnimatedText text="+267 74 239 138" className="text-muted-foreground" />
                </div>
              </div>
            </section>

            <FaqSection />

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
          </section>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
