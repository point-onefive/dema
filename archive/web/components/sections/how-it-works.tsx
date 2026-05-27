import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
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
    title: "Map\nwhat matters",
    copy: "List your digital life in minutes, from email to subscriptions to important files.",
    mockup: <DigitalLifeMockup />,
  },
  {
    number: "Step 02",
    title: "Choose\nyour executor",
    copy: "Select a trusted person who will handle things if something happens.",
    mockup: <ExecutorMockup />,
  },
  {
    number: "Step 03",
    title: "Set\npermissions",
    copy: "Control exactly what your executor can see and manage.",
    mockup: <PermissionsMockup />,
  },
  {
    number: "Step 04",
    title: "Request access\nwhen needed",
    copy: "A simple, secure process when your executor needs to step in.",
    mockup: <RequestAccessMockup />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-[680px] text-center">
          <SectionBadge>How it works</SectionBadge>
          <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[52px]">
            Built around the moment
            <br />
            your family needs it most.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.55] text-[color:var(--color-ink-3)]">
            Four small steps today so the people you love aren&apos;t left
            scrambling tomorrow.
          </p>
        </div>

        {/* Steps */}
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
    <article
      className="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(260px,2fr)_minmax(360px,3fr)] lg:gap-12 lg:p-10"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
          {step.number}
        </div>
        <h3 className="mt-3 whitespace-pre-line font-display text-[30px] leading-[1.06] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[36px] lg:text-[40px]">
          {step.title}
        </h3>
        <p className="mt-4 max-w-[360px] text-[15.5px] leading-[1.55] text-[color:var(--color-ink-3)]">
          {step.copy}
        </p>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="rounded-2xl bg-[color:var(--color-surface-muted)] p-4 sm:p-6">
          {step.mockup}
        </div>
      </div>
    </article>
  );
}
