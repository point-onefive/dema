import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Vault, UserCheck, Clock } from "lucide-react";
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
    title: "Granular access",
    copy: "Decide exactly what each executor sees, what they can change, and what stays locked.",
  },
  {
    icon: Clock,
    title: "Only when it's time",
    copy: "Access opens through a verifiable request — never automatically, never quietly, never alone.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <SectionBadge>What Dema does</SectionBadge>
          <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
            Quiet infrastructure for
            <br className="hidden sm:block" /> the things that outlive us.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-[20px] font-medium tracking-[-0.005em] text-[color:var(--color-ink)]">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-[color:var(--color-ink-3)]">
                {p.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
