import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { DigitalLifeMockup } from "@/components/mockups/digital-life";
import { ExecutorMockup } from "@/components/mockups/executor";
import { PermissionsMockup } from "@/components/mockups/permissions";
import { RequestAccessMockup } from "@/components/mockups/request-access";

type Step = {
  number: string;
  title: string;
  copy: string;
  mockup: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "Step 01",
    title: "Map what matters",
    copy: "List your digital life in minutes: email, subscriptions, financial accounts, photos, and important documents.",
    mockup: <DigitalLifeMockup />,
  },
  {
    number: "Step 02",
    title: "Choose your executor",
    copy: "Select a trusted person who will handle things if something happens. They don't see anything until they need to.",
    mockup: <ExecutorMockup />,
  },
  {
    number: "Step 03",
    title: "Set permissions",
    copy: "Control exactly what your executor can see and manage. Financial accounts can stay locked while memories stay open.",
    mockup: <PermissionsMockup />,
  },
  {
    number: "Step 04",
    title: "Request access when needed",
    copy: "A simple, verified process lets your executor step in when the moment comes. Every action is logged and auditable.",
    mockup: <RequestAccessMockup />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[52px]">
              Built around the moment your family needs it most.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6] text-[color:var(--color-ink-3)]">
              Four small steps today so the people you love aren&apos;t left
              scrambling tomorrow.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-5">
          {steps.map((step, i) => (
            <StepRow key={step.number} step={step} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StepRow({ step, reverse }: { step: Step; reverse: boolean }) {
  return (
    <Reveal>
      <article className="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(260px,2fr)_minmax(360px,3fr)] lg:gap-12 lg:p-10">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
            {step.number}
          </div>
          <h3 className="mt-3 font-display text-[30px] leading-[1.06] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[36px] lg:text-[40px]">
            {step.title}
          </h3>
          <p className="mt-4 max-w-[360px] text-[15.5px] leading-[1.6] text-[color:var(--color-ink-3)]">
            {step.copy}
          </p>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="rounded-2xl bg-[color:var(--color-surface-muted)] p-4 sm:p-6">
            {step.mockup}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
