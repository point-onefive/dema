import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[color:var(--color-ink)]">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&fit=crop"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 50%, rgba(47,79,70,0.5), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(47,79,70,0.3), transparent 50%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative px-8 py-20 text-center sm:px-12 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-[640px]">
              <Reveal>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Join the early access list
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-[38px] leading-[1.05] tracking-[-0.018em] text-white sm:text-[52px] lg:text-[60px]">
                  Sit with the people you love.
                  <br className="hidden sm:block" /> Let Dema sit with the rest.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-[480px] text-[16px] leading-[1.65] text-white/65">
                  Be one of the first to set up your vault. Early access is free
                  forever. No credit card, no commitment. Just one less thing to
                  worry about.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mx-auto mt-10 max-w-[420px]">
                  <WaitlistForm
                    size="large"
                    className="[&_form]:border-white/20 [&_form]:bg-white/[0.08] [&_input]:text-white [&_input]:placeholder:text-white/40 [&_button]:bg-[color:var(--color-brand)] [&_button]:hover:bg-[color:var(--color-brand-hover)]"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="mt-5 text-[12.5px] text-white/40">
                  No spam, ever. Unsubscribe in one click.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
