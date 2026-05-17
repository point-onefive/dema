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
  on: boolean;
};

const rows: Row[] = [
  { icon: ImageIcon, label: "Photos & memories", level: "View & download", on: true },
  { icon: Repeat, label: "Subscriptions", level: "View & cancel", on: true },
  { icon: Landmark, label: "Financial accounts", level: "No access", on: false },
  { icon: KeyRound, label: "Passwords", level: "No access", on: false },
  { icon: FileText, label: "Important documents", level: "View only", on: true },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={
        "relative inline-flex h-[22px] w-[38px] shrink-0 rounded-full transition-colors " +
        (on
          ? "bg-[color:var(--color-brand)]"
          : "bg-[color:var(--color-surface-sunken)]")
      }
      aria-hidden
    >
      <span
        className={
          "absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-all " +
          (on ? "left-[18px]" : "left-[2px]")
        }
      />
    </span>
  );
}

export function PermissionsMockup() {
  return (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-2.5 shadow-[var(--shadow-xs)]">
      <ul className="divide-y divide-[color:var(--color-line)]">
        {rows.map((r) => (
          <li
            key={r.label}
            className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 px-3 py-3.5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-3)]">
              <r.icon className="h-4 w-4" />
            </span>
            <span className="text-[14px] font-medium text-[color:var(--color-ink)]">
              {r.label}
            </span>
            <Toggle on={r.on} />
            <span
              className={
                "ml-2 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11.5px] font-medium " +
                (r.on
                  ? "border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-2)]"
                  : "border-transparent bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-4)]")
              }
            >
              {r.level}
              {r.on && <ChevronDown className="h-3 w-3 opacity-60" />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
