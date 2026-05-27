import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/eyebrow";
import { ExecutorMockup } from "@/components/mockups/executor";
import { PermissionsMockup } from "@/components/mockups/permissions";
import { ShieldCheck, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-[640px]">
            <SectionBadge>Digital executor platform</SectionBadge>

            <h1 className="mt-6 font-display text-[44px] leading-[1.04] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[56px] lg:text-[64px]">
              A digital executor
              <br />
              for the life you built.
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.55] text-[color:var(--color-ink-3)] sm:text-[18px]">
              When something happens, your family shouldn&apos;t be left guessing.
              Dema organizes the pieces of your digital life that matter
              — and gives the right person the right access, exactly when it&apos;s needed.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#cta" variant="primary" size="lg">
                Get early access
              </Button>
              <Button href="#how" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-[color:var(--color-ink-4)]">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--color-brand)]" />
                End-to-end encrypted vault
              </li>
              <li className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 text-[color:var(--color-brand)]" />
                Zero-knowledge by design
              </li>
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-[color:var(--color-brand-soft)]/40 to-transparent"
      />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Floating executor card (back layer) */}
      <div className="absolute -top-6 -left-6 hidden w-[58%] sm:block">
        <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4 shadow-[var(--shadow-md)]">
          <ExecutorMockup />
        </div>
      </div>

      {/* Permissions panel (front layer) */}
      <div className="relative sm:ml-[18%] sm:mt-32">
        <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-lg)]">
          <div className="flex items-center justify-between px-3 pt-1 pb-3">
            <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-4)]">
              Executor permissions
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[color:var(--color-brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
              Live
            </div>
          </div>
          <PermissionsMockup />
        </div>
      </div>
    </div>
  );
}
