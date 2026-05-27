import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I spent four months trying to close my mother's accounts after she passed. I had no idea how many subscriptions she had, where her documents were, or how to access her photos. Dema would have saved us so much grief.",
    name: "Rachel M.",
    role: "Early access member",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&fit=crop&crop=face",
  },
  {
    quote:
      "I'm 34 and I never thought about this stuff. But after a scare with my dad's health I realized my family would have no idea where to start with my digital life. Setting up Dema took about 20 minutes.",
    name: "Marcus T.",
    role: "Early access member",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face",
  },
  {
    quote:
      "Finally something built for real people. Not a lawyer's tool, not a password manager. Just a clear, organized way to say: here's my digital life, here's who handles what.",
    name: "Sandra K.",
    role: "Early access member",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&fit=crop&crop=face",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-[600px] text-center">
          <Reveal>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
              Early access members
            </p>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[40px]">
              The people who need this most already know it.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
                <blockquote className="flex-1 text-[14.5px] leading-[1.65] text-[color:var(--color-ink-2)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-medium text-[color:var(--color-ink)]">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-[color:var(--color-ink-4)]">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
