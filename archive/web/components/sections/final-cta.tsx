import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
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
              <br className="hidden sm:block" />
              Let Dema sit with the rest.
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/75">
              Join the early access list. Be one of the first to set up your
              vault, and keep your plan free forever.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="#"
                size="lg"
                className="bg-white text-[color:var(--color-brand)] hover:bg-white/95"
              >
                Get early access
              </Button>
              <Button
                href="#how"
                size="lg"
                className="bg-transparent text-white border border-white/30 hover:border-white/60"
              >
                See how it works
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
