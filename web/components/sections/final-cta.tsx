import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand)] px-8 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.08), transparent 40%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.06), transparent 40%)",
              }}
            />
            <div className="relative mx-auto max-w-[640px]">
              <h2 className="font-display text-[36px] leading-[1.06] tracking-[-0.015em] text-white sm:text-[48px] lg:text-[56px]">
                Sit with the people you love.
                <br className="hidden sm:block" /> Let Dema sit with the rest.
              </h2>
              <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.6] text-white/75">
                Join the early access list. Be one of the first to set up your
                vault and keep your plan free forever.
              </p>
              <div className="mx-auto mt-9 max-w-[440px]">
                <WaitlistForm
                  size="large"
                  className="[&_form]:border-white/20 [&_form]:bg-white/10 [&_input]:text-white [&_input]:placeholder:text-white/50 [&_button]:bg-white [&_button]:text-[color:var(--color-brand)] [&_button]:hover:bg-white/90"
                />
              </div>
              <p className="mt-5 text-[12.5px] text-white/50">
                No spam. No credit card. Just early access.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
