import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ShieldCheck, KeyRound, Fingerprint, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const items: Item[] = [
  {
    icon: ShieldCheck,
    title: "End-to-end encryption",
    copy: "Your vault is encrypted on your device before it leaves it. Nothing readable ever reaches our servers.",
  },
  {
    icon: KeyRound,
    title: "Zero-knowledge architecture",
    copy: "Even Dema's servers cannot read what's inside your vault. Your data belongs to you.",
  },
  {
    icon: Fingerprint,
    title: "Verified access requests",
    copy: "Every executor request is signed, logged, and verifiable. Access is never silent.",
  },
  {
    icon: Server,
    title: "Independently audited",
    copy: "Security reviewed by third-party firms. Reports available to users on request.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[color:var(--color-brand-soft)]/55"
      />
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionBadge>Security and trust</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
              Designed like the people trusting it have one chance.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {items.map((item) => (
            <RevealItem key={item.title}>
              <article className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[16px] font-medium tracking-[-0.005em] text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-3)]">
                  {item.copy}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
