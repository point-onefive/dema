import { Send, ShieldCheck, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  label: string;
  date: string;
  state: "done" | "active" | "idle";
};

const steps: Step[] = [
  {
    icon: Send,
    label: "Request submitted",
    date: "May 12, 9:41 AM",
    state: "done",
  },
  {
    icon: ShieldCheck,
    label: "Verification in progress",
    date: "May 12, 9:42 AM",
    state: "active",
  },
  {
    icon: Check,
    label: "Access granted",
    date: "May 12, 9:45 AM",
    state: "done",
  },
];

function Node({ step, isLast }: { step: Step; isLast: boolean }) {
  const isGranted = step.label === "Access granted";
  const tone =
    step.state === "active"
      ? "bg-[color:var(--color-brand-soft)] border-[color:var(--color-brand-line)] text-[color:var(--color-brand)]"
      : isGranted
        ? "bg-[color:var(--color-brand)] border-[color:var(--color-brand)] text-white"
        : "bg-[color:var(--color-surface)] border-[color:var(--color-line)] text-[color:var(--color-ink-2)]";

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-full items-center">
        <span className="flex-1 border-t border-dashed border-[color:var(--color-line-strong)]" />
        <span
          className={
            "z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[var(--shadow-xs)] " +
            tone
          }
        >
          <step.icon className="h-5 w-5" strokeWidth={isGranted ? 3 : 2} />
        </span>
        <span
          className={
            "flex-1 border-t " +
            (isLast ? "border-transparent" : "border-dashed border-[color:var(--color-line-strong)]")
          }
        />
      </div>
      <div className="mt-3 text-center">
        <div className="text-[13px] font-medium text-[color:var(--color-ink)]">
          {step.label}
        </div>
        <div className="text-[11.5px] text-[color:var(--color-ink-4)]">
          {step.date}
        </div>
      </div>
    </div>
  );
}

export function RequestAccessMockup() {
  return (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 sm:p-7 shadow-[var(--shadow-xs)]">
      <div className="flex w-full items-start">
        {steps.map((s, i) => (
          <Node key={s.label} step={s} isLast={i === steps.length - 1} />
        ))}
      </div>
    </div>
  );
}
