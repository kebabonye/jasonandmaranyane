import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { Footer } from "@/components/wedding/Footer";
import { Navigation } from "@/components/wedding/Navigation";

import { Countdown } from "@/components/wedding/Countdown";

export const Route = createFileRoute("/invitation")({
  head: () => ({
    meta: [
      { title: "Invitation — Jason & Maranyane" },
      { name: "description", content: "You are warmly invited to celebrate the wedding of Jason and Maranyane on October 31, 2026." },
      { property: "og:title", content: "Invitation — Jason & Maranyane" },
      { property: "og:description", content: "You are warmly invited to celebrate the wedding of Jason and Maranyane on October 31, 2026." }
     
    ],
  }),
  component: InvitationPage,
});

const schedule = [
  { time: "TBC", event: "Guest Arrival" },
  { time: "TBC", event: "Ceremony" },
  { time: "TBC", event: "Cocktail Hour" },
  { time: "TBC", event: "Lunch & Speeches" },
  { time: "TBC", event: "Toast" },
  { time: "TBC", event: "Celebration" },
];

const giftRegistry = ["@Home", "Game", "Woolworths"];

const navLinks = [
  { label: "Details", href: "#details" },
  { label: "Program", href: "#program" },
  { label: "Gifts", href: "#gifts" },
  { label: "RSVP", href: "#rsvp" },
  { label: "FAQs", href: "#faqs" },
];

const faqs = [
  {
    question: "Are kids welcome?",
    answer: "As much as we love your little ones, this will be an adults-only celebration.",
  }
];

function InvitationPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navigation links={navLinks} />
      <main className="relative">
        {/* Hero / Invitation */}
        <section id="invitation" className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-12 text-center md:min-h-dvh md:py-8">
        
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />

          <div className="relative z-10 max-w-2xl rounded-2xl bg-background/70 px-6 py-10 backdrop-blur-sm md:px-12 md:py-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              With joyful hearts
            </p>
            <h1 className="font-display mt-4 text-3xl leading-tight text-foreground md:mt-4 md:text-6xl">
              Jason <span className="font-display italic text-black">&</span> Maranyane
            </h1>
            <p className="mt-3 text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
              Together with their families, invite you to join them at the celebration of their marriage
            </p>

         

            <p className="font-body text-sm leading-relaxed text-foreground">
              We would be honored to have you join us as we celebrate the love we
              share. Your presence would mean the world to us as we continue this
              beautiful new chapter.
            </p>

            <span className="mt-6 block font-display text-4xl leading-none text-black/30">&ldquo;</span>
            <p className="font-display -mt-2 text-lg italic leading-relaxed text-foreground md:text-xl">
              Therefore what God has joined together, let no one separate.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Mark 10:9
            </p>
          </div>
        </section>

        {/* Countdown */}
        <section className="relative overflow-hidden px-6 py-8 text-center">
        
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Counting down to</p>
            <p className="font-display mt-1 text-lg text-black">October 31, 2026</p>
            <div className="mt-4 flex justify-center">
              <Countdown />
            </div>
          </div>
        </section>

       

        {/* Details */}
        <section id="details" className="mx-auto max-w-4xl px-6 py-20 scroll-mt-20">
          <header className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Celebration</p>
            <h2 className="font-display mt-4 text-5xl font-semibold text-black">Wedding Details</h2>
           
          </header>

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">When</p>
            <p className="font-display mt-2 text-3xl text-foreground">Saturday, October 31, 2026</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Celebration time to be confirmed.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Where</p>
            <p className="font-display mt-2 text-3xl text-foreground">Molapo Gardens</p>
            <p className="mt-2 text-muted-foreground">Mahalapye</p>
          </div>
        </section>

        
        <section id="program" className="relative scroll-mt-20 overflow-hidden bg-wash py-16">
         

          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <h3 className="font-display text-center text-3xl italic text-black">Program</h3>
            <div className="mx-auto mt-8 max-w-2xl">
              {schedule.map((item) => (
                <div
                  key={item.event}
                  className="flex items-center gap-6 border-b border-border/40 py-5 last:border-b-0"
                >
                  <span className="w-24 shrink-0 font-body text-sm font-medium text-black">
                    {item.time}
                  </span>
                  <span className="font-display text-lg text-foreground">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gifts" className="relative overflow-hidden py-16 px-6 text-center scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">With Gratitude</p>
            <h3 className="font-display mt-4 text-3xl font-semibold text-black">Gift Registry</h3>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Your presence at our wedding is the greatest gift we could ask for. However,
              should you wish to bless us further, we kindly request vouchers from the
              stores below.
            </p>

            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">Vouchers</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {giftRegistry.map((store) => (
                <span
                  key={store}
                  className="rounded-full border border-orchid/40 bg-background/80 px-6 py-2 font-display text-base italic text-black"
                >
                  {store}
                </span>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-orchid/30 bg-background/85 px-6 py-6 text-left">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                For Bank Transfers
              </p>
              <dl className="mt-4 space-y-2 text-sm text-foreground">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Bank</dt>
                  <dd className="font-medium">FNB Botswana</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account Name</dt>
                  <dd className="font-medium">Maranyane Marumo</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account Number</dt>
                  <dd className="font-medium">62864156841</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Branch Name</dt>
                  <dd className="font-medium">The Mall</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Branch Code</dt>
                  <dd className="font-medium">283567</dd>
                </div>
              </dl>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Reference: Use your name and surname
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-2xl px-6 text-center">
            {/* RSVP */}
            <section id="rsvp" className="scroll-mt-20">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Please respond</p>
              <h2 className="font-display mt-4 text-5xl font-semibold text-black">RSVP</h2>
           
              <p className="mt-2 text-muted-foreground">
                Kindly let us know by 01 September 2026 if you will be joining us.
              </p>

              <div className="mt-10">
                <a
                  href="https://forms.gle/CpChXe8t76zyVran8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-10 py-4 font-body text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-foreground/90"
                >
                  RSVP Here
                </a>
              </div>

              <p className="mx-auto mt-6 max-w-md text-xs uppercase tracking-[0.15em] text-muted-foreground">
                This invitation is extended solely to the named guest. As we have a
                sealed guest list, we kindly ask that it not be shared with others.
              </p>
            </section>

            <section id="enquiries" className="mt-16 scroll-mt-20">
              <h3 className="font-display text-2xl italic text-black">Enquiries</h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                For any questions, please contact +267 73 209 745.
              </p>
            </section>

            <section id="faqs" className="mt-16 scroll-mt-20 text-left">
              <h3 className="text-center font-display text-2xl italic text-black">FAQs</h3>
              <div className="mx-auto mt-6 max-w-xl divide-y divide-border/50">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="cursor-pointer list-none font-body text-sm font-medium text-foreground marker:content-none">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <p className="mx-auto mt-16 max-w-xl text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold italic text-foreground">
                A Gentle Note on Privacy
              </span>
             : To help us prepare for our special day, this invitation is intended solely for you and should not be shared or forwarded.
              By RSVPing, you kindly consent to the collection of your personal details (such as your name, and contact information) for the purposes 
              of managing our entrance registry upon arrival, arranging table seating, and ensuring security. Please note that photographs and videos captured 
               throughout the celebration may be shared with our loved ones and on our social media pages.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
