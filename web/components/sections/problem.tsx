import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const stats = [
  {
    figure: "3–6",
    suffix: "mo",
    label: "Average time families spend closing a loved one's accounts and subscriptions",
  },
  {
    figure: "66%",
    suffix: null,
    label: "Of adults have no documented plan for their digital assets, leaving families in the dark",
  },
  {
    figure: "100+",
    suffix: null,
    label: "Online accounts the average person holds today — most families have no record of any of them",
  },
];

const withoutDema = [
  "Subscriptions still charging for months after",
  "Passwords and accounts lost forever",
  "14,200 photos no one can access",
  "No one knows which accounts even exist",
];

const withDema = [
  "Every account documented and organized by category",
  "Subscriptions cancelled with one executor approval",
  "Photos accessible to the right people, nothing more",
  "A clear, verified process from day one",
];

export function Problem() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <Reveal>
            <SectionBadge>The reality</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[38px] leading-[1.06] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[50px] lg:text-[58px]">
              Most families are left guessing.
            </h2>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.65] text-[color:var(--color-ink-3)]">
              When someone passes or becomes incapacitated, their family faces
              weeks of confusion. Accounts no one knew existed. Subscriptions
              still charging. Memories locked behind passwords that went with them.
            </p>
          </Reveal>
        </div>

        {/* Stats strip */}
        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.1}>
          {stats.map((s) => (
            <RevealItem key={s.figure}>
              <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-7 py-7">
                <div className="whitespace-nowrap font-display text-[56px] leading-none tracking-tight text-[color:var(--color-brand)] sm:text-[60px]">
                  {s.figure}
                  {s.suffix && (
                    <span className="ml-1 text-[30px] text-[color:var(--color-brand)]/60">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-[color:var(--color-ink-3)]">
                  {s.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Photo + before/after comparison */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Clean photo, no overlays */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[color:var(--color-line)] shadow-[var(--shadow-md)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=900&q=85&fit=crop"
                  alt="Family sitting together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Stacked comparison — no overlapping */}
          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-400">
                  Without Dema
                </p>
                <ul className="space-y-2.5">
                  {withoutDema.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[color:var(--color-ink-2)]"
                    >
                      <span className="mt-[3px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-red-200">
                        <span className="h-1 w-1 rounded-full bg-red-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border-2 border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] p-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-brand)]">
                  With Dema
                </p>
                <ul className="space-y-2.5">
                  {withDema.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[color:var(--color-ink-2)]"
                    >
                      <span className="mt-[3px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]">
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                          <path d="M1 3l1.5 1.5L6 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="px-1 text-[14px] leading-[1.65] text-[color:var(--color-ink-3)]">
                The average person today has over 100 online accounts. Most
                families are completely unprepared to deal with any of them.
                Dema gives your executor a clear map: what exists, what matters,
                and exactly what to do with it.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
