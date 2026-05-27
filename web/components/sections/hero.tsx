"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { ShieldCheck, Lock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* Soft background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-[color:var(--color-brand-soft)]/60 to-transparent"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">

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

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.12 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  const services = [
    { color: "#ea4335", letter: "M", label: "Gmail", desc: "2 accounts" },
    { color: "#1a47b8", letter: "C", label: "Chase Bank", desc: "Checking & savings" },
    { color: "#e50914", letter: "N", label: "Netflix", desc: "Monthly subscription" },
    { color: "#3493fa", letter: "i", label: "iCloud Photos", desc: "14,200 photos" },
    { color: "#0061ff", letter: "D", label: "Dropbox", desc: "Family documents" },
    { color: "#34a853", letter: "G", label: "Google Drive", desc: "Shared folders" },
  ];

  return (
    <div className="relative">
      {/* Main photo */}
      <div className="overflow-hidden rounded-3xl border border-[color:var(--color-line)] shadow-[var(--shadow-lg)]">
        <div className="relative aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=85&fit=crop"
            alt="Family together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/20 via-transparent to-transparent" />
        </div>
      </div>

      {/* Floating vault card — top left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
        className="absolute -top-4 -left-4 w-[260px] rounded-2xl border border-[color:var(--color-line)] bg-white/95 p-3 shadow-[var(--shadow-lg)] backdrop-blur-sm sm:-top-6 sm:-left-8 sm:w-[290px]"
      >
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
            Digital vault
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-brand-soft)] px-2 py-0.5 text-[10.5px] font-semibold text-[color:var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
            Active
          </span>
        </div>
        <ul className="space-y-1">
          {services.slice(0, 4).map((s) => (
            <li key={s.label} className="flex items-center gap-2.5 rounded-xl px-1 py-1.5">
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.letter}
              </span>
              <div className="min-w-0">
                <div className="text-[12.5px] font-medium text-[color:var(--color-ink)]">{s.label}</div>
                <div className="text-[11px] text-[color:var(--color-ink-4)]">{s.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Floating permissions card — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.65 }}
        className="absolute -bottom-6 -right-4 w-[220px] rounded-2xl border border-[color:var(--color-line)] bg-white/95 p-3.5 shadow-[var(--shadow-lg)] backdrop-blur-sm sm:-bottom-8 sm:-right-6"
      >
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
          Executor access
        </div>
        <div className="flex items-center gap-2.5 rounded-xl bg-[color:var(--color-surface-muted)] px-2.5 py-2">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6E0DC] text-[12px] font-semibold text-[#1F3A33]">
            JA
          </div>
          <div>
            <div className="text-[12.5px] font-medium text-[color:var(--color-ink)]">John Anderson</div>
            <div className="text-[11px] text-[color:var(--color-brand)]">Access granted</div>
          </div>
        </div>
        <div className="mt-2 space-y-1.5 px-0.5">
          {[
            { label: "Photos", on: true },
            { label: "Subscriptions", on: true },
            { label: "Banking", on: false },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-[11.5px] text-[color:var(--color-ink-3)]">{r.label}</span>
              <span className={`text-[11px] font-medium ${r.on ? "text-[color:var(--color-brand)]" : "text-[color:var(--color-ink-5)]"}`}>
                {r.on ? "Shared" : "Private"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
