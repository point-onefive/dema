import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Check } from "lucide-react";

const inclusions = [
  "Unlimited accounts and categories in your vault",
  "Up to 3 trusted executors with individual permissions",
  "Granular per-category access controls",
  "End-to-end encrypted storage, always",
  "Verified executor request workflow",
  "Signed audit log of every action",
  "Export or delete your vault anytime",
  "Free for early-access members, forever",
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionBadge>Pricing</SectionBadge>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="mt-5 font-display text-[36px] leading-[1.07] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[46px] lg:text-[50px]">
                One plan. No nickel-and-diming.
              </h2>
            </Reveal>
            <Reveal delay={0.13}>
              <p className="mt-5 max-w-[440px] text-[17px] leading-[1.65] text-[color:var(--color-ink-3)]">
                Most estate planning services charge $200 to $400 per year. Other
                digital asset tools charge per account. Dema is free for
                early-access members, and it stays that way forever.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-[color:var(--color-ink-4)]">
                We believe protecting your family shouldn&apos;t cost extra. Early
                access is limited. Once the doors open to the public, prices
                will change.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#cta" variant="primary" size="lg">
                  Claim early access
                </Button>
                <Button href="#faq" variant="ghost" size="lg">
                  Read the FAQ
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-md)] sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
                    Dema &middot; Early access
                  </div>
                  <div className="mt-3 flex items-end gap-3">
                    <span className="font-display text-[64px] leading-none tracking-tight text-[color:var(--color-ink)]">
                      $0
                    </span>
                    <div className="mb-2">
                      <div className="text-[13px] font-medium text-[color:var(--color-ink-4)]">/ month</div>
                      <div className="text-[13px] font-semibold text-[color:var(--color-brand)]">forever</div>
                    </div>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1.5 text-[11.5px] font-semibold text-[color:var(--color-brand)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
                  Limited spots
                </span>
              </div>

              <div className="my-7 h-px bg-[color:var(--color-line)]" />

              <RevealGroup className="space-y-3.5" stagger={0.05}>
                {inclusions.map((line) => (
                  <RevealItem key={line}>
                    <div className="flex items-start gap-3 text-[14.5px] text-[color:var(--color-ink-2)]">
                      <span className="mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                      </span>
                      {line}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-7 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-muted)] px-4 py-3">
                <div className="text-[12.5px] text-[color:var(--color-ink-4)]">
                  Compare: Trust &amp; Will charges $199/yr for a basic plan.
                  Everplans starts at $75/yr. Dema early access is free, forever.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
