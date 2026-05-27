import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const painPoints = [
  {
    number: "3–6",
    unit: "months",
    description:
      "The average time families spend closing a loved one's accounts and subscriptions after they pass.",
  },
  {
    number: "66",
    unit: "%",
    description:
      "Of adults have no documented plan for their digital assets, leaving families completely in the dark.",
  },
  {
    number: "Billions",
    unit: "lost",
    description:
      "In digital accounts, crypto, stored credits, and subscriptions go unclaimed every year because no one knew they existed.",
  },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=800&q=85&fit=crop"
                alt="Family sitting together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[color:var(--color-line)] bg-white/90 p-4 backdrop-blur-sm shadow-[var(--shadow-md)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-4)]">
                  Without Dema
                </div>
                <ul className="mt-3 space-y-2">
                  {[
                    "Subscriptions still charging months later",
                    "Passwords and accounts lost forever",
                    "Important documents no one can find",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[color:var(--color-ink-2)]">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-red-200 bg-red-50 flex items-center justify-center">
                        <span className="block h-1.5 w-1.5 rounded-full bg-red-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <SectionBadge>The reality</SectionBadge>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="mt-5 font-display text-[36px] leading-[1.07] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[52px]">
                Most families are left guessing.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-[color:var(--color-ink-3)]">
                Managing a loved one&apos;s digital life can be overwhelming. Accounts
                no one knew existed. Subscriptions still charging. Memories locked
                behind passwords that went with them. Dema was built so the people
                you love are never left scrambling.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 space-y-6" stagger={0.1}>
              {painPoints.map((point) => (
                <RevealItem key={point.number}>
                  <div className="flex items-start gap-5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                    <div className="shrink-0">
                      <div className="font-display text-[34px] leading-none text-[color:var(--color-brand)]">
                        {point.number}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-4)]">
                        {point.unit}
                      </div>
                    </div>
                    <p className="pt-1 text-[14px] leading-[1.6] text-[color:var(--color-ink-3)]">
                      {point.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
