import {
  ChevronRight,
  Mail,
  Banknote,
  Repeat,
  Cloud,
  Users,
  FileText,
} from "lucide-react";
import { ServiceTile } from "@/components/ui/service-tile";

const services = [
  { key: "mail" as const, label: "Gmail" },
  { key: "bank" as const, label: "Chase" },
  { key: "stream" as const, label: "Netflix" },
  { key: "cloud" as const, label: "iCloud Photos" },
  { key: "storage" as const, label: "Dropbox" },
  { key: "drive" as const, label: "Google Drive" },
];

const categories = [
  { icon: Mail, label: "Email", count: 3 },
  { icon: Banknote, label: "Banking", count: 2 },
  { icon: Repeat, label: "Subscriptions", count: 8 },
  { icon: Cloud, label: "Cloud & storage", count: 4 },
  { icon: Users, label: "Social", count: 5 },
  { icon: FileText, label: "Documents", count: 12 },
];

export function DigitalLifeMockup() {
  return (
    <div className="grid w-full grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1.1fr]">
      {/* Service list */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-xs)]">
        <ul className="space-y-1">
          {services.map((s) => (
            <li
              key={s.key}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 hover:bg-[color:var(--color-surface-muted)]"
            >
              <ServiceTile service={s.key} size="sm" />
              <span className="text-[13.5px] font-medium text-[color:var(--color-ink-2)]">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connector (folder pictogram) */}
      <div className="hidden items-center justify-center sm:flex">
        <FolderConnector />
      </div>

      {/* Digital life panel */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-xs)]">
        <div className="flex items-center justify-between px-2 pb-2">
          <span className="text-[13px] font-medium text-[color:var(--color-ink-2)]">
            Digital life
          </span>
          <span className="text-[11.5px] font-medium text-[color:var(--color-brand)]">
            + Add
          </span>
        </div>
        <ul className="space-y-1">
          {categories.map((c) => (
            <li
              key={c.label}
              className="flex items-center justify-between rounded-xl px-2 py-1.5 hover:bg-[color:var(--color-surface-muted)]"
            >
              <span className="flex items-center gap-2.5 text-[13.5px] text-[color:var(--color-ink-2)]">
                <c.icon className="h-4 w-4 text-[color:var(--color-ink-4)]" />
                {c.label}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-[color:var(--color-ink-4)]">
                <span className="tabular-nums">{c.count}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FolderConnector() {
  return (
    <div className="relative flex h-full items-center px-2">
      {/* Dotted lines fanning into the folder */}
      <svg
        width="56"
        height="100%"
        viewBox="0 0 56 220"
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0"
        aria-hidden
      >
        {[28, 60, 92, 128, 160, 192].map((y) => (
          <path
            key={y}
            d={`M0 ${y} C 18 ${y} 30 110 56 110`}
            stroke="var(--color-line-strong)"
            strokeDasharray="2 4"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
      <div className="relative ml-8 flex h-11 w-12 items-center justify-center rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-xs)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
            fill="var(--color-surface-muted)"
            stroke="var(--color-line-strong)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
