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
    label: "Of adults have no plan for their digital assets, leaving families completely in the dark",
  },
  {
    figure: "$B",
    suffix: null,
    label: "In digital accounts, crypto, credits, and subscriptions go unclaimed every year",
  },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
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
              still charging. Memories locked behind passwords that went with
              them.
            </p>
          </Reveal>
        </div>

        {/* Stats strip */}
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.1}>
          {stats.map((s) => (
            <RevealItem key={s.figure}>
              <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-7 py-8">
                <div className="font-display text-[56px] leading-none tracking-tight text-[color:var(--color-brand)] sm:text-[64px]">
                  {s.figure}
                  {s.suffix && (
                    <span className="ml-1 text-[32px] text-[color:var(--color-brand)]/60 sm:text-[36px]">
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

        {/* Photo + overlay */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--color-line)] shadow-[var(--shadow-md)]">
                <div className="relative aspect-[3/2]">
                  <Image
                    src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=900&q=85&fit=crop"
                    alt="Family sitting together, thinking about the future"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-ink)]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Chaos card overlay */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-red-100 bg-white/92 p-4 shadow-[var(--shadow-md)] backdrop-blur-sm sm:left-6 sm:right-auto sm:w-[280px]">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-red-400">
                  Without Dema
                </p>
                <ul className="space-y-2">
                  {[
                    "Subscriptions charging for months after",
                    "Passwords and accounts lost forever",
                    "14,200 photos no one can access",
                    "No one knows what accounts exist",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-[color:var(--color-ink-2)]"
                    >
                      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-red-100">
                        <span className="h-1 w-1 rounded-full bg-red-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-[30px] leading-[1.1] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[38px]">
                Your digital life doesn&apos;t disappear. It just becomes someone
                else&apos;s problem.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--color-ink-3)]">
                The average person today has over 100 online accounts. Banking.
                Cloud storage. Streaming. Social media. Work tools. Photos spread
                across three platforms. Most families are completely unprepared to
                deal with any of it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--color-ink-3)]">
                Dema was built so the people you love are never left scrambling.
                Your executor gets a clear map: what exists, what matters, and
                exactly what to do with it.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 rounded-2xl border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] p-5">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-brand)]">
                  With Dema
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Every account documented, organized by category",
                    "Subscriptions cancelled automatically on executor approval",
                    "Photos accessible to the right people, nothing more",
                    "A clear, verified process from day one",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-[color:var(--color-ink-2)]"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
