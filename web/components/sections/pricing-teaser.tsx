import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const inclusions = [
  "Unlimited accounts in your vault",
  "Up to 3 trusted executors",
  "Granular permission controls",
  "End-to-end encrypted storage",
  "Verified access request workflow",
  "Free for early-access members",
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionBadge>Pricing</SectionBadge>
            <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
              One plan.
              <br />
              No nickel-and-diming.
            </h2>
            <p className="mt-5 max-w-[440px] text-[16px] leading-[1.55] text-[color:var(--color-ink-3)]">
              Early-access members keep their plan free forever as we grow.
              You shouldn&apos;t have to pay extra to protect the people you love.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#cta" variant="primary" size="lg">
                Claim early access
              </Button>
              <Button href="#faq" variant="ghost" size="lg">
                Read the FAQ
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-md)] sm:p-9">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
                  Dema · Early access
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-[56px] leading-none text-[color:var(--color-ink)]">
                    $0
                  </span>
                  <span className="text-[14px] text-[color:var(--color-ink-4)]">
                    /forever
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-brand)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
                Limited spots
              </span>
            </div>

            <hr className="my-6 border-[color:var(--color-line)]" />

            <ul className="space-y-3">
              {inclusions.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14.5px] text-[color:var(--color-ink-2)]"
                >
                  <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)] text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
