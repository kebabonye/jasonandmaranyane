import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/wedding/BottomNav";
import { AnimatedText } from "@/components/wedding/AnimatedText";
import ribbon from "@/assets/ribbon.png";

const giftRegistry = ["@Home", "Game", "Woolworths"];

const bankDetails = [
  { label: "Bank", value: "FNB Botswana" },
  { label: "Account Number", value: "62864156841", copyable: true },
  { label: "Branch Name", value: "The Mall" },
  { label: "Branch Code", value: "283567" },
];

export const Route = createFileRoute("/gift-registry")({
  head: () => ({
    meta: [
      { title: "Gift Registry — Jason & Maranyane" },
      {
        name: "description",
        content: "Gift registry details for Jason and Maranyane's wedding celebrations.",
      },
    ],
  }),
  component: GiftRegistryPage,
});

function GiftIcon({ className }: { className?: string }) {
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
      <rect x="3" y="9" width="18" height="4" rx="1" strokeLinecap="round" />
      <rect x="4" y="13" width="16" height="8" rx="1" strokeLinecap="round" />
      <path d="M12 9v12" strokeLinecap="round" />
      <path d="M12 9C9.5 9 8 7.657 8 6a2 2 0 1 1 4 0v3ZM12 9c2.5 0 4-1.343 4-3a2 2 0 1 0-4 0v3Z" />
    </svg>
  );
}

function BankIcon({ className }: { className?: string }) {
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
      <path d="M3 10 12 4l9 6" strokeLinecap="round" />
      <path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9" strokeLinecap="round" />
      <path d="M3 21h18" strokeLinecap="round" />
    </svg>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — nothing to fall back to gracefully.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1 rounded-full bg-orchid/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:bg-orchid/20 hover:text-black"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Ornament() {
  return (
    <div className="mx-auto mt-6 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-orchid/30" />
      <span className="h-1.5 w-1.5 rotate-45 border border-orchid/50" />
      <span className="h-px w-10 bg-orchid/30" />
    </div>
  );
}

function GiftRegistryPage() {
  return (
    <div className="min-h-screen pb-8">
      <section className="relative scroll-mt-20 overflow-hidden bg-background px-6 pb-10 pt-10 text-center">
        <img
          src={ribbon}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 -top-4 w-24 -rotate-6 opacity-90 sm:-left-8 sm:-top-6 sm:w-32 md:-left-10 md:-top-8 md:w-40"
        />
        <img
          src={ribbon}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-4 w-24 rotate-6 scale-x-[-1] opacity-90 sm:-right-8 sm:-top-6 sm:w-32 md:-right-10 md:-top-8 md:w-40"
        />

        <div className="relative z-10">
          <AnimatedText
            as="p"
            text="With Gratitude"
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          />
          <AnimatedText
            as="h2"
            text="Gift Registry"
            className="font-display mt-4 text-3xl uppercase tracking-[0.15em] text-black"
            delay={150}
          />
          <Ornament />
        </div>

        <AnimatedText
          as="p"
          text="Your presence at our celebrations is the greatest gift we could ask for. However, should you wish to bless us further, we kindly request vouchers from the stores below."
          className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground"
          delay={300}
        />

        <AnimatedText
          as="p"
          text="Vouchers"
          className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        />
        <div className="mx-auto mt-4 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-3">
          {giftRegistry.map((store, i) => (
            <div
              key={store}
              className="elegant-shadow group flex flex-col items-center gap-1.5 rounded-2xl bg-background/85 px-3 py-4"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full text-black">
                <GiftIcon className="h-3 w-3" />
              </span>
              <AnimatedText
                text={store}
                className="font-display text-lg italic text-black"
                delay={100 * i}
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl bg-background/85 text-left elegant-shadow">
          <div className="flex items-center justify-center gap-2 bg-orchid/5 px-6 py-4">
            <BankIcon className="h-4 w-4 text-muted-foreground" />
            <AnimatedText
              as="p"
              text="For Bank Transfers"
              className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
            />
          </div>
          <dl className="space-y-3 px-6 py-6 text-sm text-foreground">
            {bankDetails.map((detail) => (
              <div key={detail.label} className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">{detail.label}</dt>
                <dd className="flex items-center gap-2 font-medium">
                  <AnimatedText text={detail.value} />
                  {detail.copyable && <CopyButton value={detail.value} />}
                </dd>
              </div>
            ))}
          </dl>
          <AnimatedText
            as="p"
            text="Reference: Use your name and surname"
            className="bg-orchid/5 py-3 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground"
          />
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
