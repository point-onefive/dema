import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
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
    copy: "Your vault is encrypted on your device before it leaves it.",
  },
  {
    icon: KeyRound,
    title: "Zero-knowledge architecture",
    copy: "Even Dema's servers cannot read what's inside your vault.",
  },
  {
    icon: Fingerprint,
    title: "Verified access requests",
    copy: "Every executor request is signed, logged, and verifiable.",
  },
  {
    icon: Server,
    title: "Independently audited",
    copy: "Reviewed by third-party security firms — reports available on request.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="relative py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[color:var(--color-brand-soft)]/55"
      />
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <SectionBadge>Security & trust</SectionBadge>
          <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
            Designed like the people
            <br className="hidden sm:block" /> trusting it have one chance.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[16.5px] font-medium tracking-[-0.005em] text-[color:var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-[color:var(--color-ink-3)]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
