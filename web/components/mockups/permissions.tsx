"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Image as ImageIcon,
  Repeat,
  Landmark,
  KeyRound,
  FileText,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Row = {
  icon: LucideIcon;
  label: string;
  level: string;
  willToggle: boolean;
};

const rows: Row[] = [
  { icon: ImageIcon, label: "Photos & memories",  level: "View & save",   willToggle: true  },
  { icon: Repeat,    label: "Subscriptions",       level: "View & cancel", willToggle: true  },
  { icon: Landmark,  label: "Financial accounts",  level: "No access",     willToggle: false },
  { icon: KeyRound,  label: "Passwords",           level: "No access",     willToggle: false },
  { icon: FileText,  label: "Important documents", level: "View only",     willToggle: true  },
];

function Toggle({ on, hovering }: { on: boolean; hovering: boolean }) {
  return (
    <span
      className={[
        "relative inline-flex h-[22px] w-[38px] shrink-0 rounded-full transition-colors duration-300",
        on
          ? "bg-[color:var(--color-brand)]"
          : hovering
          ? "bg-[color:var(--color-ink-5)]"
          : "bg-[color:var(--color-surface-sunken)]",
      ].join(" ")}
      aria-hidden
    >
      <motion.span
        className="absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
        animate={{ x: on ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        style={{ left: 2 }}
      />
    </span>
  );
}

export function PermissionsMockup() {
  const ref       = useRef<HTMLDivElement>(null);
  const inView    = useInView(ref, { margin: "-80px", once: false });
  const cancelRef = useRef(false);

  const [hoverRow, setHoverRow] = useState(-1);
  const [onRows,   setOnRows]   = useState<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    cancelRef.current = false;

    const steps: { delay: number; fn: () => void }[] = [
      { delay: 600,  fn: () => setHoverRow(0) },
      { delay: 750,  fn: () => { setOnRows([0]);       setHoverRow(-1); } },
      { delay: 700,  fn: () => setHoverRow(1) },
      { delay: 750,  fn: () => { setOnRows([0, 1]);    setHoverRow(-1); } },
      { delay: 550,  fn: () => setHoverRow(2) },
      { delay: 480,  fn: () => setHoverRow(3) },
      { delay: 550,  fn: () => setHoverRow(4) },
      { delay: 750,  fn: () => { setOnRows([0, 1, 4]); setHoverRow(-1); } },
      { delay: 2200, fn: () => { setOnRows([]);         setHoverRow(-1); } },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      let acc = 0;
      steps.forEach(({ delay, fn }) => {
        acc += delay;
        timers.push(setTimeout(() => { if (!cancelRef.current) fn(); }, acc));
      });
      timers.push(setTimeout(() => { if (!cancelRef.current) runLoop(); }, acc + 900));
    };

    const start = setTimeout(runLoop, 500);
    timers.push(start);

    return () => {
      cancelRef.current = true;
      timers.forEach(clearTimeout);
      setHoverRow(-1);
      setOnRows([]);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-2.5 shadow-[var(--shadow-xs)]"
    >
      <ul className="divide-y divide-[color:var(--color-line)]">
        {rows.map((r, i) => {
          const isOn      = onRows.includes(i);
          const isHovered = hoverRow === i;
          return (
            <li
              key={r.label}
              className={[
                "grid items-center gap-3 px-3 py-3.5 transition-colors duration-300",
                isHovered ? "bg-[color:var(--color-brand-soft)]/50" : "",
              ].join(" ")}
              style={{ gridTemplateColumns: "32px 1fr 46px 120px" }}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-3)]">
                <r.icon className="h-4 w-4" />
              </span>
              <span
                className={[
                  "text-[14px] transition-colors duration-200",
                  isHovered || isOn
                    ? "font-semibold text-[color:var(--color-ink)]"
                    : "font-medium text-[color:var(--color-ink)]",
                ].join(" ")}
              >
                {r.label}
              </span>
              <Toggle on={isOn} hovering={isHovered && r.willToggle} />
              <span
                className={[
                  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all duration-300",
                  isOn
                    ? "border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-2)]"
                    : "border-transparent bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-4)]",
                ].join(" ")}
              >
                {isOn ? r.level : "No access"}
                {isOn && <ChevronDown className="h-3 w-3 opacity-50" />}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
