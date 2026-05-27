"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Mail,
  Banknote,
  Repeat,
  Cloud,
  Users,
  FileText,
} from "lucide-react";
import { useInView } from "framer-motion";
import { ServiceTile } from "@/components/ui/service-tile";

const services = [
  { key: "mail"    as const, label: "Gmail"        },
  { key: "bank"    as const, label: "Chase"         },
  { key: "stream"  as const, label: "Netflix"       },
  { key: "cloud"   as const, label: "iCloud Photos" },
  { key: "storage" as const, label: "Dropbox"       },
  { key: "drive"   as const, label: "Google Drive"  },
];

const categories = [
  { icon: Mail,     label: "Email",         count: 3  },
  { icon: Banknote, label: "Banking",       count: 2  },
  { icon: Repeat,   label: "Subscriptions", count: 8  },
  { icon: Cloud,    label: "Cloud storage", count: 4  },
  { icon: Users,    label: "Social",        count: 5  },
  { icon: FileText, label: "Documents",     count: 12 },
];

// Which category index each service maps to
const SERVICE_TO_CATEGORY = [0, 1, 2, 3, 3, 5];

export function DigitalLifeMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px", once: false });

  const [activeService,  setActiveService]  = useState(-1);
  const [activeCategory, setActiveCategory] = useState(-1);
  const cancelRef = useRef(false);

  useEffect(() => {
    if (!inView) return;

    cancelRef.current = false;

    const HOLD   = 900;  // ms each service is highlighted
    const OFFSET = 320;  // ms delay before matching category lights up
    const PAUSE  = 1800; // ms gap before loop restarts

    const timers: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      let acc = 0;

      services.forEach((_, i) => {
        const catIdx = SERVICE_TO_CATEGORY[i];

        // Light up service row
        timers.push(setTimeout(() => {
          if (cancelRef.current) return;
          setActiveService(i);
        }, acc));

        // Light up category after brief offset
        timers.push(setTimeout(() => {
          if (cancelRef.current) return;
          setActiveCategory(catIdx);
        }, acc + OFFSET));

        // Clear both
        timers.push(setTimeout(() => {
          if (cancelRef.current) return;
          setActiveService(-1);
          setActiveCategory(-1);
        }, acc + HOLD));

        acc += HOLD + 120; // gap between rows
      });

      // Pause then loop
      timers.push(setTimeout(() => {
        if (!cancelRef.current) runLoop();
      }, acc + PAUSE));
    };

    // Small delay before first run so the section is settled
    const startTimer = setTimeout(runLoop, 400);
    timers.push(startTimer);

    return () => {
      cancelRef.current = true;
      timers.forEach(clearTimeout);
      setActiveService(-1);
      setActiveCategory(-1);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="grid w-full grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1.15fr]"
    >
      {/* Service list */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-xs)]">
        <ul className="space-y-0.5">
          {services.map((s, i) => (
            <li
              key={s.key}
              className={[
                "flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors duration-300",
                activeService === i
                  ? "bg-[color:var(--color-brand-soft)]/80"
                  : "hover:bg-[color:var(--color-surface-muted)]",
              ].join(" ")}
            >
              <ServiceTile service={s.key} size="sm" />
              <span
                className={[
                  "text-[13.5px] transition-all duration-300",
                  activeService === i
                    ? "font-semibold text-[color:var(--color-ink)]"
                    : "font-medium text-[color:var(--color-ink-2)]",
                ].join(" ")}
              >
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Folder connector */}
      <div className="hidden items-center justify-center sm:flex">
        <FolderConnector activeService={activeService} />
      </div>

      {/* Digital life panel */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-xs)]">
        <div className="flex items-center justify-between px-2.5 pb-2.5">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Digital life
          </span>
          <span className="text-[11.5px] font-semibold text-[color:var(--color-brand)]">
            + Add
          </span>
        </div>
        <ul className="space-y-0.5">
          {categories.map((c, i) => (
            <li
              key={c.label}
              className={[
                "flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors duration-300",
                activeCategory === i
                  ? "bg-[color:var(--color-brand-soft)]/80"
                  : "hover:bg-[color:var(--color-surface-muted)]",
              ].join(" ")}
            >
              <c.icon
                className={[
                  "h-4 w-4 shrink-0 transition-colors duration-300",
                  activeCategory === i
                    ? "text-[color:var(--color-brand)]"
                    : "text-[color:var(--color-ink-4)]",
                ].join(" ")}
              />
              <span
                className={[
                  "min-w-0 flex-1 truncate text-[13.5px] transition-all duration-300",
                  activeCategory === i
                    ? "font-semibold text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-ink-2)]",
                ].join(" ")}
              >
                {c.label}
              </span>
              <span className="flex shrink-0 items-center gap-1 text-[12px] text-[color:var(--color-ink-4)]">
                <span className="min-w-[16px] text-right tabular-nums">{c.count}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FolderConnector({ activeService }: { activeService: number }) {
  // Pulse the dotted line that corresponds to the active service row
  return (
    <div className="relative flex h-full items-center px-2">
      <svg
        width="56"
        height="100%"
        viewBox="0 0 56 220"
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0"
        aria-hidden
      >
        {[28, 60, 92, 128, 160, 192].map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} C 18 ${y} 30 110 56 110`}
            stroke={
              activeService === i
                ? "var(--color-brand)"
                : "var(--color-line-strong)"
            }
            strokeDasharray="2 4"
            strokeWidth={activeService === i ? 1.5 : 1}
            fill="none"
            style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
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
