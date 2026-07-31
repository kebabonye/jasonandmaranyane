import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Footer } from "@/components/wedding/Footer";
import { Navigation } from "@/components/wedding/Navigation";

import { Countdown } from "@/components/wedding/Countdown";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.jpeg";
import kgorosoPrint from "@/assets/kgoroso.jpeg";


export const Route = createFileRoute("/kgoroso")({
  head: () => ({
    meta: [
      { title: "Kgoroso — Jason & Maranyane" },
      { name: "description", content: "You are warmly invited to the Kgoroso of Jason and Maranyane on November 7, 2026." },
      { property: "og:title", content: "Kgoroso — Jason & Maranyane" },
      { property: "og:description", content: "You are warmly invited to the Kgoroso of Jason and Maranyane on November 7, 2026." },
    ],
  }),
  component: KgorosoPage,
});

const schedule = [{ time: "1:00 PM", event: "Luncheon" }];

const giftRegistry = ["@Home", "Game", "Woolworths"];

const navLinks = [
  { label: "Details", href: "#details" },
  { label: "Program", href: "#program" },
  { label: "Dress Code", href: "#dress-code" },
  { label: "Gifts", href: "#gifts" },
  { label: "RSVP", href: "#rsvp" },
  { label: "FAQs", href: "#faqs" },
];

const faqs = [
  {
    question: "Is there a gifts registry?",
    answer:
      "Your presence at our wedding is the greatest gift of all. If you'd still like to give something more, you may bless us with a gift. Please refer to the Registry tab for more information about our gift registries.",
  },
  {
    question: "Is it alright to take pictures with our phones and cameras during the wedding?",
    answer:
      "Yes! We'd love for you to take photos and share them by scanning the QR codes that will be provided. However, please do give the official photographers the necessary space to capture pictures and videos for us. These will be shared with you. During the church service, photography and videography will be limited. An announcement will be made by the Facilitator to inform the congregation of the moments when photos and videos are allowed or not allowed. We kindly ask everyone to respect and follow these guidelines.",
  },
  {
    question: "Is there transportation being provided from the matrimonial service to the venue?",
    answer: "No, all guests are to make their own arrangements.",
  },
];

function KgorosoPage() {
  return (
    <div className="min-h-screen bg-background pb-8">
      <Navigation links={navLinks} />
      <main className="relative">
        {/* Hero — sized to fill exactly one screen on any device */}
        <section id="invitation" className="relative flex h-dvh flex-col">
          {/* Full-bleed photo with monogram overlay — guaranteed a majority share of the
              viewport so it doesn't shrink away on shorter screens. */}
          <div className="relative min-h-[65dvh] flex-1">
            <img src={image5} alt="Jason and Maranyane" className="h-full w-full object-cover object-top" />
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

          {/* Black intro panel — kept short so hero + panel never exceed one viewport. */}
          <div className="shrink-0 bg-black px-6 pb-16 pt-8 text-center text-white">
            <AnimatedText as="p" text="With joyful hearts" className="text-xs uppercase tracking-[0.3em] text-white/70" />
            <AnimatedText
              as="p"
              text="Jason & Maranyane"
              className="font-display mt-3 text-xl uppercase tracking-[0.15em] md:text-2xl"
              delay={150}
            />
          </div>
        </section>

        {/* Welcome — the rest of the intro copy, verse, and countdown, previously part of the hero */}
        <section className="bg-black px-6 py-12 text-center text-white md:py-16">
          <div className="mx-auto max-w-2xl">
            <AnimatedText
              as="p"
              text="Together with their families, invite you to join them for their Kgoroso"
              className="text-xs font-light uppercase tracking-[0.2em] text-white/80"
            />

            <AnimatedText
              as="p"
              text="We would be honored to have you join us as we celebrate the love we share. Your presence would mean the world to us as we continue this beautiful new chapter."
              className="mt-6 font-body text-sm leading-relaxed text-white/85"
              delay={150}
            />

            <div className="mt-6 border-t border-white/20 pt-6">
              <span className="block font-display text-4xl leading-none text-white/30">&ldquo;</span>
              <AnimatedText
                as="p"
                text="Where you go I will go, and where you stay I will stay."
                className="font-display -mt-2 text-lg italic leading-relaxed text-white/90 md:text-xl"
              />
              <AnimatedText as="p" text="Ruth 1:16" className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60" delay={150} />
            </div>

            {/* Countdown */}
            <div className="mt-6 border-t border-white/20 pt-6">
              <AnimatedText as="p" text="Counting down to" className="text-xs uppercase tracking-[0.3em] text-white/70" />
              <AnimatedText as="p" text="November 7, 2026" className="font-display mt-1 text-lg" delay={150} />
              <div className="mt-4 flex justify-center">
                <Countdown targetDate="2026-11-07T00:00:00+02:00" variant="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section id="details" className="mx-auto max-w-4xl px-6 py-20 scroll-mt-20">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
            <div className="relative aspect-[3/4] w-56 shrink-0 sm:w-64">
              <div className="absolute inset-0 overflow-hidden rounded-t-full shadow-lg">
                <img src={image4} alt="Jason and Maranyane" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="text-center md:flex-1 md:text-left">
              <header>
                <AnimatedText as="p" text="The Celebration" className="text-xs uppercase tracking-[0.3em] text-muted-foreground" />
                <AnimatedText as="h2" text="Kgoroso" className="font-display mt-4 text-5xl font-semibold text-black" delay={150} />
              </header>

              <div className="mt-6">
                <AnimatedText as="p" text="When" className="text-xs uppercase tracking-[0.2em] text-muted-foreground" />
                <AnimatedText
                  as="p"
                  text="Saturday, November 7, 2026"
                  className="font-display mt-2 text-3xl text-foreground"
                  delay={150}
                />
                <AnimatedText as="p" text="Luncheon at 1:00 PM (1300 HRS)" className="mt-1 text-muted-foreground" delay={300} />
              </div>

              <div className="mt-10">
                <AnimatedText as="p" text="Where" className="text-xs uppercase tracking-[0.2em] text-muted-foreground" />
                <AnimatedText as="p" text="Plot 11155" className="font-display mt-2 text-3xl text-foreground" delay={150} />
                <AnimatedText as="p" text="SamSam Ward, Serowe" className="mt-2 text-muted-foreground" delay={300} />
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="relative scroll-mt-20 overflow-hidden bg-wash py-16">
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <AnimatedText as="h3" text="Program" className="font-display text-center text-3xl italic text-black" />
            <div className="mx-auto mt-8 max-w-2xl">
              {schedule.map((item) => (
                <div
                  key={item.event}
                  className="flex items-center gap-6 border-b border-border/40 py-5 last:border-b-0"
                >
                  <span className="w-24 shrink-0 font-body text-sm font-medium text-black">
                    <AnimatedText text={item.time} />
                  </span>
                  <span className="font-display text-lg text-foreground">
                    <AnimatedText text={item.event} delay={150} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dress-code" className="relative overflow-hidden py-16 px-6 text-center scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <AnimatedText as="h3" text="Traditional Prints" className="font-display text-3xl italic text-black" />
            <AnimatedText
              as="p"
              text="For the celebration, we invite our guests to wear traditional attire featuring this print."
              className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground"
              delay={150}
            />

            <div className="mx-auto mt-10 max-w-xs overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src={kgorosoPrint} alt="Kgoroso traditional print" className="h-full w-full object-cover" />
              </div>
              <div className="px-4 py-4">
                <AnimatedText as="p" text="Traditional Print" className="text-sm font-semibold uppercase tracking-[0.15em] text-black" />
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

        <section id="gifts" className="relative overflow-hidden py-16 px-6 text-center scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <AnimatedText as="p" text="With Gratitude" className="text-xs uppercase tracking-[0.3em] text-muted-foreground" />
            <AnimatedText as="h3" text="Gift Registry" className="font-display mt-4 text-3xl font-semibold text-black" delay={150} />

            <AnimatedText
              as="p"
              text="Your presence at our wedding is the greatest gift we could ask for. However, should you wish to bless us further, we kindly request vouchers from the stores below."
              className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground"
              delay={300}
            />

            <AnimatedText as="p" text="Vouchers" className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground" />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {giftRegistry.map((store) => (
                <span
                  key={store}
                  className="rounded-full border border-orchid/40 bg-background/80 px-6 py-2 font-display text-base italic text-black"
                >
                  <AnimatedText text={store} />
                </span>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-orchid/30 bg-background/85 px-6 py-6 text-left">
              <AnimatedText
                as="p"
                text="For Bank Transfers"
                className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
              />
              <dl className="mt-4 space-y-2 text-sm text-foreground">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Bank</dt>
                  <dd className="font-medium"><AnimatedText text="FNB Botswana" /></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account Name</dt>
                  <dd className="font-medium"><AnimatedText text="Maranyane Marumo" /></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account Number</dt>
                  <dd className="font-medium"><AnimatedText text="62864156841" /></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Branch Name</dt>
                  <dd className="font-medium"><AnimatedText text="The Mall" /></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Branch Code</dt>
                  <dd className="font-medium"><AnimatedText text="283567" /></dd>
                </div>
              </dl>
              <AnimatedText
                as="p"
                text="Reference: Use your name and surname"
                className="mt-4 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            {/* RSVP */}
            <section id="rsvp" className="scroll-mt-20">
              <AnimatedText as="p" text="Please respond" className="text-xs uppercase tracking-[0.3em] text-muted-foreground" />
              <AnimatedText as="h2" text="RSVP" className="font-display mt-4 text-5xl font-semibold text-black" delay={150} />

              <AnimatedText
                as="p"
                text="Kindly let us know by 31 August 2026 if you will be joining us."
                className="mt-2 text-muted-foreground"
                delay={300}
              />

              <div className="mt-10">
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

            <section id="enquiries" className="mt-16 scroll-mt-20">
              <AnimatedText as="h3" text="Need Assistance?" className="font-display text-2xl italic text-black" />
              <AnimatedText
                as="p"
                text="RSVP Coordinators"
                className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                delay={150}
              />

              <div className="mx-auto mt-8 grid max-w-md gap-8 text-left sm:grid-cols-2">
                <div>
                  <AnimatedText as="p" text="Bride's Side" className="text-xs uppercase tracking-[0.2em] text-muted-foreground" />
                  <div className="mt-3 space-y-2 text-sm text-foreground">
                    <div className="flex justify-between gap-4">
                      <AnimatedText text="Dineo" />
                      <AnimatedText text="+267 73 209 745 / 71 546 792" className="text-muted-foreground" />
                    </div>
                    <div className="flex justify-between gap-4">
                      <AnimatedText text="Precious" />
                      <AnimatedText text="+267 74 239 138" className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div>
                  <AnimatedText as="p" text="Groom's Side & Kgoroso" className="text-xs uppercase tracking-[0.2em] text-muted-foreground" />
                  <div className="mt-3 space-y-2 text-sm text-foreground">
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
              </div>
            </section>

            <section id="faqs" className="mt-16 scroll-mt-20 text-left">
              <AnimatedText as="h3" text="FAQs" className="text-center font-display text-2xl italic text-black" />
              <div className="mx-auto mt-6 max-w-xl divide-y divide-border/50">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="cursor-pointer list-none font-body text-sm font-medium text-foreground marker:content-none">
                      <AnimatedText text={faq.question} />
                    </summary>
                    <AnimatedText
                      as="p"
                      text={faq.answer}
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    />
                  </details>
                ))}
              </div>
            </section>

            <p className="mx-auto mt-16 max-w-xl text-xs leading-relaxed text-muted-foreground">
              <AnimatedText as="span" text="A Gentle Note on Privacy" className="font-semibold italic text-foreground" />
              <AnimatedText
                as="span"
                text=": To help us prepare for our special day, this invitation is intended solely for you and should not be shared or forwarded. By RSVPing, you kindly consent to the collection of your personal details (such as your name, and contact information) for the purposes of managing our entrance registry upon arrival, arranging table seating, and ensuring security. Please note that photographs and videos captured throughout the celebration may be shared with our loved ones and on our social media pages."
                delay={150}
              />
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
