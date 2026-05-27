"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { ShieldCheck, Lock, Image as ImageIcon, Repeat, Landmark, KeyRound, FileText } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const permissionRows = [
  { icon: ImageIcon, label: "Photos & memories", level: "View & download", on: true },
  { icon: Repeat, label: "Subscriptions", level: "View & cancel", on: true },
  { icon: Landmark, label: "Financial accounts", level: "No access", on: false },
  { icon: KeyRound, label: "Passwords", level: "No access", on: false },
  { icon: FileText, label: "Important documents", level: "View only", on: true },
];

const vaultItems = [
  { color: "#ea4335", letter: "M", label: "Gmail", desc: "2 accounts" },
  { color: "#1a47b8", letter: "C", label: "Chase Bank", desc: "Checking & savings" },
  { color: "#e50914", letter: "N", label: "Netflix", desc: "Monthly subscription" },
  { color: "#3493fa", letter: "i", label: "iCloud Photos", desc: "14,200 photos" },
  { color: "#0061ff", letter: "D", label: "Dropbox", desc: "Family documents" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-[color:var(--color-brand-soft)]/60 to-transparent"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">

          {/* Left — copy */}
          <div className="max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <SectionBadge>Now in early access</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.07 }}
              className="mt-6 font-display text-[46px] leading-[1.03] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[56px] lg:text-[64px]"
            >
              Your digital life,
              <br className="hidden sm:block" /> organized for the
              <br className="hidden sm:block" /> people you love.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="mt-6 max-w-[500px] text-[17px] leading-[1.65] text-[color:var(--color-ink-3)]"
            >
              Gmail. iCloud. Chase. Netflix. Dropbox. When something happens, your
              family shouldn&apos;t be left guessing. Dema puts a trusted person in
              control of exactly what they need, nothing more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.23 }}
              className="mt-8 max-w-[440px]"
            >
              <WaitlistForm size="large" />
              <p className="mt-3 pl-1 text-[12.5px] text-[color:var(--color-ink-5)]">
                No credit card. Free for early-access members, forever.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.36 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13px] text-[color:var(--color-ink-4)]"
            >
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[color:var(--color-brand)]" />
                End-to-end encrypted vault
              </li>
              <li className="inline-flex items-center gap-2">
                <Lock className="h-4 w-4 shrink-0 text-[color:var(--color-brand)]" />
                Zero-knowledge by design
              </li>
            </motion.ul>
          </div>

          {/* Right — product UI mockup */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.12 }}
            className="relative"
          >
            <HeroProductCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function TogglePill({ on }: { on: boolean }) {
  return (
    <span
      className={
        "relative inline-flex h-[20px] w-[36px] shrink-0 rounded-full " +
        (on ? "bg-[color:var(--color-brand)]" : "bg-[color:var(--color-surface-sunken)]")
      }
      aria-hidden
    >
      <span
        className={
          "absolute top-[2px] h-[16px] w-[16px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all " +
          (on ? "left-[18px]" : "left-[2px]")
        }
      />
    </span>
  );
}

function HeroProductCard() {
  return (
    <div className="space-y-3">
      {/* Vault overview card */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-md)]">
        <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
            Digital vault
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-2.5 py-1 text-[10.5px] font-semibold text-[color:var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
            Active
          </span>
        </div>
        <ul className="divide-y divide-[color:var(--color-line)]">
          {vaultItems.map((item) => (
            <li key={item.label} className="flex items-center gap-3 px-4 py-2.5">
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-medium text-[color:var(--color-ink)]">{item.label}</div>
              </div>
              <div className="text-[11.5px] text-[color:var(--color-ink-4)]">{item.desc}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Permissions card */}
      <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-md)]">
        <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
            Executor permissions
          </span>
          <div className="flex items-center gap-2">
            <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D6E0DC] text-[9px] font-semibold text-[#1F3A33]">
              JA
            </div>
            <span className="text-[11.5px] font-medium text-[color:var(--color-ink-2)]">John Anderson</span>
          </div>
        </div>
        <ul className="divide-y divide-[color:var(--color-line)]">
          {permissionRows.map((row) => (
            <li key={row.label} className="grid grid-cols-[20px_1fr_44px_110px] items-center gap-3 px-4 py-2.5">
              <row.icon className="h-4 w-4 text-[color:var(--color-ink-4)]" />
              <span className="text-[13px] font-medium text-[color:var(--color-ink)]">{row.label}</span>
              <TogglePill on={row.on} />
              <span
                className={
                  "rounded-full px-2 py-0.5 text-center text-[11px] font-medium " +
                  (row.on
                    ? "bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-3)]"
                    : "text-[color:var(--color-ink-5)]")
                }
              >
                {row.level}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
