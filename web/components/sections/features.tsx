import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Vault, UserCheck, Clock, FolderOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const pillars: Pillar[] = [
  {
    icon: Vault,
    title: "Encrypted at the core",
    copy: "Your accounts, files, and instructions live in a zero-knowledge vault. Even Dema can't read them.",
  },
  {
    icon: UserCheck,
    title: "Granular access control",
    copy: "Decide exactly what each executor sees, what they can act on, and what stays locked away.",
  },
  {
    icon: Clock,
    title: "Only when it's time",
    copy: "Access opens through a verifiable request. Never automatically. Never quietly. Never without a trail.",
  },
  {
    icon: FolderOpen,
    title: "Everything in one place",
    copy: "From subscriptions to passwords to family photos, every piece of your digital life organized and documented.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionBadge>What Dema does</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
              Quiet infrastructure for the things that outlive us.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-[18px] font-medium tracking-[-0.005em] text-[color:var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--color-ink-3)]">
                  {p.copy}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
