import { AnimatedText } from "@/components/wedding/AnimatedText";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section id="faqs" className="mt-10 scroll-mt-20 text-left">
      <AnimatedText as="h3" text="FAQs" className="text-center font-display text-2xl italic text-black" />
      <div className="mx-auto mt-4 max-w-xl divide-y divide-border/50">
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
  );
}
