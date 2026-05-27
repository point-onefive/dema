import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { DigitalLifeMockup } from "@/components/mockups/digital-life";
import { ExecutorMockup } from "@/components/mockups/executor";
import { PermissionsMockup } from "@/components/mockups/permissions";
import { RequestAccessMockup } from "@/components/mockups/request-access";

type Step = {
  number: string;
  time: string;
  title: string;
  copy: string;
  detail: string;
  mockup: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "01",
    time: "About 15 minutes",
    title: "Map your digital life",
    copy: "List every account that matters. Gmail. Chase. iCloud. Netflix. Dropbox. Crypto. Important documents. Anything you'd want someone to know about.",
    detail: "Most people have more accounts than they realize. Dema prompts you through every category so nothing gets missed.",
    mockup: <DigitalLifeMockup />,
  },
  {
    number: "02",
    time: "Takes 2 minutes",
    title: "Choose your executor",
    copy: "Name a trusted person who will handle things if something happens. A spouse, sibling, close friend. They don't see anything until the moment requires it.",
    detail: "Your executor is verified through a secure identity check before they're granted access to a single thing.",
    mockup: <ExecutorMockup />,
  },
  {
    number: "03",
    time: "Your call, anytime",
    title: "Set exactly what they can see",
    copy: "Photos and memories: shared. Financial accounts: locked. Passwords: your choice. You decide, category by category, with controls you can change anytime.",
    detail: "Granular permissions mean your executor can cancel Netflix without ever touching your bank.",
    mockup: <PermissionsMockup />,
  },
  {
    number: "04",
    time: "Verified in minutes",
    title: "A clear process when it's needed",
    copy: "When the time comes, your executor submits a verified request. The process is structured, logged, and auditable. Nothing happens silently.",
    detail: "Every action your executor takes is signed and logged. Your family gets a clear record of exactly what happened.",
    mockup: <RequestAccessMockup />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <SectionBadge>How it works</SectionBadge>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="mt-5 font-display text-[36px] leading-[1.07] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[46px] lg:text-[54px]">
              Four steps today. Peace of mind forever.
            </h2>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.65] text-[color:var(--color-ink-3)]">
              The whole setup takes under an hour. Everything after that is
              automatic.
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
      <article className="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(280px,2fr)_minmax(380px,3fr)] lg:gap-14 lg:p-12">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-brand)] text-[13px] font-semibold text-white">
              {step.number}
            </span>
            <span className="text-[12px] font-medium text-[color:var(--color-ink-4)]">
              {step.time}
            </span>
          </div>

          <h3 className="mt-5 font-display text-[28px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[34px] lg:text-[38px]">
            {step.title}
          </h3>
          <p className="mt-4 text-[15.5px] leading-[1.65] text-[color:var(--color-ink-3)]">
            {step.copy}
          </p>
          <p className="mt-3 text-[13.5px] leading-[1.6] text-[color:var(--color-ink-4)]">
            {step.detail}
          </p>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="rounded-2xl bg-[color:var(--color-surface-muted)] p-5 sm:p-7">
            {step.mockup}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
