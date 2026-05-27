"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { ShieldCheck, Lock, Users } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "End-to-end encrypted" },
  { icon: Lock, label: "Zero-knowledge vault" },
  { icon: Users, label: "Free for early access" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-0 sm:pt-20">
      {/* Subtle background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-[color:var(--color-brand-soft)]/50 to-transparent"
      />

      <Container>
        {/* Text block — centered */}
        <div className="mx-auto max-w-[760px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <SectionBadge>Now in early access</SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="mt-6 font-display text-[48px] leading-[1.03] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[60px] lg:text-[72px]"
          >
            A digital executor for
            <br className="hidden sm:block" /> the life you built.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.6] text-[color:var(--color-ink-3)] sm:text-[18px]"
          >
            When something happens, your family shouldn&apos;t have to figure it
            out alone. Dema organizes everything so the right person has the
            right access, exactly when it matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
            className="mx-auto mt-9 max-w-[440px]"
          >
            <WaitlistForm size="large" />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.38 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[12.5px] text-[color:var(--color-ink-4)]"
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 text-[color:var(--color-brand)]" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="relative mx-auto mt-14 max-w-[960px]"
        >
          <div className="relative overflow-hidden rounded-t-[28px] border border-b-0 border-[color:var(--color-line)] shadow-[var(--shadow-lg)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-[color:var(--color-line)] bg-[color:var(--color-surface-muted)] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
              <div className="mx-auto rounded-md bg-[color:var(--color-surface-sunken)] px-12 py-1.5 text-[11px] text-[color:var(--color-ink-4)]">
                app.dema.co
              </div>
            </div>

            <div className="relative aspect-[16/9] bg-[color:var(--color-cream)]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85&fit=crop"
                alt="A family sitting together, planning for the future"
                fill
                sizes="960px"
                className="object-cover opacity-25"
                priority
              />
              {/* Overlay dashboard mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function DashboardMockup() {
  const items = [
    { color: "#ea4335", letter: "M", label: "Gmail", count: "3 accounts", pct: 80 },
    { color: "#1a47b8", letter: "C", label: "Chase Bank", count: "2 accounts", pct: 65 },
    { color: "#e50914", letter: "N", label: "Netflix", count: "1 subscription", pct: 90 },
    { color: "#3493fa", letter: "i", label: "iCloud", count: "4,200 photos", pct: 55 },
    { color: "#0061ff", letter: "D", label: "Dropbox", count: "14 GB", pct: 70 },
  ];

  return (
    <div className="w-full max-w-[680px] rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-lg)] overflow-hidden">
      {/* Panel header */}
      <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-5 py-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-4)]">Digital vault</div>
          <div className="mt-0.5 text-[15px] font-medium text-[color:var(--color-ink)]">Marcus&apos;s digital life</div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-3 py-1.5 text-[11px] font-medium text-[color:var(--color-brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
          Executor active
        </div>
      </div>

      {/* Rows */}
      <ul className="divide-y divide-[color:var(--color-line)]">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-4 px-5 py-3.5">
            <span
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] font-bold text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.letter}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[13.5px] font-medium text-[color:var(--color-ink)]">{item.label}</span>
                <span className="text-[12px] text-[color:var(--color-ink-4)]">{item.count}</span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-[color:var(--color-surface-muted)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[color:var(--color-brand)] opacity-40"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
