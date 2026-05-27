"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, ShieldCheck, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StepDef = {
  icon: LucideIcon;
  label: string;
  date: string;
};

const STEPS: StepDef[] = [
  { icon: Send,        label: "Request submitted",      date: "May 12, 9:41 AM" },
  { icon: ShieldCheck, label: "Verification in progress", date: "May 12, 9:42 AM" },
  { icon: Check,       label: "Access granted",          date: "May 12, 9:45 AM" },
];

type NodeState = "idle" | "active" | "done";

function StepNode({
  step,
  state,
  isLast,
  isFirst,
}: {
  step: StepDef;
  state: NodeState;
  isLast: boolean;
  isFirst: boolean;
}) {
  const isDone   = state === "done";
  const isActive = state === "active";
  const isGrant  = step.label === "Access granted";

  const iconBg =
    isDone && isGrant
      ? "bg-[color:var(--color-brand)] border-[color:var(--color-brand)] text-white shadow-[0_0_0_4px_var(--color-brand-soft)]"
      : isDone
      ? "bg-[color:var(--color-surface)] border-[color:var(--color-brand-line)] text-[color:var(--color-brand)]"
      : isActive
      ? "bg-[color:var(--color-brand-soft)] border-[color:var(--color-brand-line)] text-[color:var(--color-brand)]"
      : "bg-[color:var(--color-surface)] border-[color:var(--color-line)] text-[color:var(--color-ink-4)]";

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-full items-center">
        {/* Left connector */}
        <span
          className={[
            "flex-1 border-t transition-colors duration-500",
            isFirst
              ? "border-transparent"
              : isDone || isActive
              ? "border-[color:var(--color-brand-line)]"
              : "border-dashed border-[color:var(--color-line-strong)]",
          ].join(" ")}
        />

        {/* Node */}
        <div className="relative z-10">
          <motion.span
            className={[
              "inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500",
              iconBg,
            ].join(" ")}
            animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={
              isActive
                ? { duration: 1.0, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
                : { duration: 0.3 }
            }
          >
            <step.icon className="h-5 w-5" strokeWidth={isDone && isGrant ? 3 : 2} />
          </motion.span>

          {/* Active pulse ring */}
          {isActive && (
            <motion.span
              className="absolute inset-0 rounded-full border border-[color:var(--color-brand-line)]"
              animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
              transition={{ duration: 1.1, ease: "easeOut", repeat: Infinity, repeatDelay: 0.4 }}
            />
          )}
        </div>

        {/* Right connector */}
        <span
          className={[
            "flex-1 border-t transition-colors duration-500",
            isLast
              ? "border-transparent"
              : isDone
              ? "border-[color:var(--color-brand-line)]"
              : "border-dashed border-[color:var(--color-line-strong)]",
          ].join(" ")}
        />
      </div>

      {/* Label + date */}
      <div className="mt-3 text-center">
        <div
          className={[
            "text-[13px] font-medium transition-colors duration-300",
            isDone || isActive
              ? "text-[color:var(--color-ink)]"
              : "text-[color:var(--color-ink-4)]",
          ].join(" ")}
        >
          {step.label}
        </div>
        <div
          className={[
            "mt-0.5 text-[11.5px] transition-colors duration-300",
            isDone || isActive
              ? "text-[color:var(--color-ink-4)]"
              : "text-[color:var(--color-ink-5)]",
          ].join(" ")}
        >
          {step.date}
        </div>
      </div>
    </div>
  );
}

export function RequestAccessMockup() {
  const ref       = useRef<HTMLDivElement>(null);
  const inView    = useInView(ref, { margin: "-80px", once: false });
  const cancelRef = useRef(false);

  const [states, setStates] = useState<NodeState[]>(["idle", "idle", "idle"]);

  useEffect(() => {
    if (!inView) return;
    cancelRef.current = false;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      // Reset
      setStates(["idle", "idle", "idle"]);

      const seq: { delay: number; fn: () => void }[] = [
        // Step 0 activates
        { delay: 700,  fn: () => setStates(["active", "idle", "idle"]) },
        // Step 0 done, step 1 activates
        { delay: 1300, fn: () => setStates(["done", "active", "idle"]) },
        // Step 1 done, step 2 activates
        { delay: 2000, fn: () => setStates(["done", "done", "active"]) },
        // Step 2 done - all complete
        { delay: 1100, fn: () => setStates(["done", "done", "done"]) },
        // Hold fully done state
        { delay: 2400, fn: () => setStates(["idle", "idle", "idle"]) },
      ];

      let acc = 0;
      seq.forEach(({ delay, fn }) => {
        acc += delay;
        timers.push(setTimeout(() => { if (!cancelRef.current) fn(); }, acc));
      });

      // Loop
      timers.push(setTimeout(() => { if (!cancelRef.current) runLoop(); }, acc + 900));
    };

    const start = setTimeout(runLoop, 600);
    timers.push(start);

    return () => {
      cancelRef.current = true;
      timers.forEach(clearTimeout);
      setStates(["idle", "idle", "idle"]);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-xs)] sm:p-7"
    >
      <div className="flex w-full items-start">
        {STEPS.map((s, i) => (
          <StepNode
            key={s.label}
            step={s}
            state={states[i]}
            isFirst={i === 0}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
