import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ShieldCheck, SlidersHorizontal, Clock4, LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  copy: string;
  detail: string;
};

const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Zero-knowledge vault",
    copy: "Your accounts and files are encrypted on your device before they ever leave it. Even Dema's servers cannot read your vault.",
    detail: "AES-256 encryption at rest. TLS in transit. Your key never leaves your device.",
  },
  {
    icon: SlidersHorizontal,
    title: "Granular permission controls",
    copy: "Give your executor access to iCloud Photos without touching your Chase account. Control every category independently.",
    detail: "Per-account, per-category settings. Change them anytime from your dashboard.",
  },
  {
    icon: Clock4,
    title: "Access only when needed",
    copy: "Your vault doesn't open automatically. Your executor submits a verified request. You get to define the conditions.",
    detail: "Multi-step verification. Logged audit trail. Notifications on every action.",
  },
  {
    icon: LayoutGrid,
    title: "Every piece of your digital life",
    copy: "Email. Banking. Subscriptions. Cloud storage. Crypto. Social media. Important documents. One organized place for all of it.",
    detail: "Supports 100+ account types. Import from CSV. Works with any service.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionBadge>What Dema does</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[36px] leading-[1.07] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[46px] lg:text-[52px]">
              Quiet infrastructure for the things that outlive us.
            </h2>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="mx-auto mt-5 max-w-[500px] text-[17px] leading-[1.65] text-[color:var(--color-ink-3)]">
              Built around the way real families actually face this. Not legal
              paperwork. Not a password manager. Something built specifically for
              this moment.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-[color:var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--color-ink-3)]">
                  {p.copy}
                </p>
                <p className="mt-4 text-[12.5px] leading-[1.5] text-[color:var(--color-ink-5)]">
                  {p.detail}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
