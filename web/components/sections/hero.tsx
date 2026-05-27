"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import {
  ShieldCheck,
  Lock,
  Image as ImageIcon,
  Repeat,
  Landmark,
  KeyRound,
  FileText,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

const vaultItems = [
  { color: "#ea4335", letter: "M", label: "Gmail", desc: "2 accounts" },
  { color: "#1a47b8", letter: "C", label: "Chase Bank", desc: "Checking & savings" },
  { color: "#e50914", letter: "N", label: "Netflix", desc: "Monthly subscription" },
  { color: "#3493fa", letter: "i", label: "iCloud Photos", desc: "14,200 photos" },
  { color: "#0061ff", letter: "D", label: "Dropbox", desc: "Family documents" },
];

const permRows = [
  { icon: ImageIcon, label: "Photos & memories", level: "View & save",   willToggle: true  },
  { icon: Repeat,    label: "Subscriptions",      level: "View & cancel", willToggle: true  },
  { icon: Landmark,  label: "Financial accounts", level: "No access",     willToggle: false },
  { icon: KeyRound,  label: "Passwords",          level: "No access",     willToggle: false },
  { icon: FileText,  label: "Documents",          level: "View only",     willToggle: true  },
];

// ─── Toggle pill with spring-animated thumb ───────────────────────────────────

function TogglePill({ on, hovering }: { on: boolean; hovering: boolean }) {
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
        className="absolute top-[2px] h-[18px] w-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
        animate={{ x: on ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        style={{ left: 2 }}
      />
    </span>
  );
}

// ─── Vault card - cycling row highlight ───────────────────────────────────────

function AnimatedVaultCard() {
  const [activeRow, setActiveRow] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-50px", once: false });

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActiveRow((r) => (r + 1) % vaultItems.length), 950);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-md)]"
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
          Digital vault
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-brand-soft)] px-2.5 py-1 text-[10.5px] font-semibold text-[color:var(--color-brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
          Active
        </span>
      </div>
      {/* Rows - flex children fill the card height evenly */}
      <ul className="flex flex-1 flex-col divide-y divide-[color:var(--color-line)]">
        {vaultItems.map((item, i) => (
          <li
            key={item.label}
            className={[
              "flex flex-1 items-center gap-3 px-4 transition-colors duration-300",
              activeRow === i ? "bg-[color:var(--color-brand-soft)]/70" : "",
            ].join(" ")}
          >
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.letter}
            </span>
            <span
              className={[
                "flex-1 text-[13px] transition-colors duration-300",
                activeRow === i
                  ? "font-semibold text-[color:var(--color-ink)]"
                  : "font-medium text-[color:var(--color-ink-2)]",
              ].join(" ")}
            >
              {item.label}
            </span>
            <span className="text-[11.5px] text-[color:var(--color-ink-4)]">{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Permissions card - sequential toggle animation ───────────────────────────

function AnimatedPermissionsCard() {
  const [hoverRow, setHoverRow]   = useState(-1);
  const [onRows,   setOnRows]     = useState<number[]>([]);
  const cancelRef                 = useRef(false);
  const ref                       = useRef<HTMLDivElement>(null);
  const inView                    = useInView(ref, { margin: "-50px", once: false });

  useEffect(() => {
    if (!inView) return;
    cancelRef.current = false;

    // cumulative delay sequence
    const steps: { delay: number; fn: () => void }[] = [
      { delay: 600,  fn: () => setHoverRow(0) },
      { delay: 700,  fn: () => { setOnRows([0]);       setHoverRow(-1); } },
      { delay: 650,  fn: () => setHoverRow(1) },
      { delay: 700,  fn: () => { setOnRows([0, 1]);    setHoverRow(-1); } },
      { delay: 500,  fn: () => setHoverRow(2) },
      { delay: 450,  fn: () => setHoverRow(3) },
      { delay: 500,  fn: () => setHoverRow(4) },
      { delay: 700,  fn: () => { setOnRows([0, 1, 4]); setHoverRow(-1); } },
      { delay: 1800, fn: () => { setOnRows([]);         setHoverRow(-1); } },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      let acc = 0;
      steps.forEach(({ delay, fn }) => {
        acc += delay;
        timers.push(setTimeout(() => { if (!cancelRef.current) fn(); }, acc));
      });
      timers.push(setTimeout(() => { if (!cancelRef.current) runLoop(); }, acc + 800));
    };

    runLoop();
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
      className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-md)]"
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ink-4)]">
          Executor permissions
        </span>
        <div className="flex items-center gap-2">
          <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D6E0DC] text-[9px] font-semibold text-[#1F3A33]">
            JA
          </div>
          <span className="text-[11.5px] font-medium text-[color:var(--color-ink-2)]">
            John Anderson
          </span>
        </div>
      </div>
      {/* Rows */}
      <ul className="flex flex-1 flex-col divide-y divide-[color:var(--color-line)]">
        {permRows.map((row, i) => {
          const isOn      = onRows.includes(i);
          const isHovered = hoverRow === i;
          return (
            <li
              key={row.label}
              className={[
                "grid flex-1 items-center gap-3 px-4 transition-colors duration-300",
                isHovered ? "bg-[color:var(--color-brand-soft)]/50" : "",
              ].join(" ")}
              style={{ gridTemplateColumns: "20px 1fr 40px 96px" }}
            >
              <row.icon className="h-3.5 w-3.5 text-[color:var(--color-ink-4)]" />
              <span
                className={[
                  "text-[12.5px] transition-colors duration-200",
                  isHovered || isOn
                    ? "font-semibold text-[color:var(--color-ink)]"
                    : "font-medium text-[color:var(--color-ink-2)]",
                ].join(" ")}
              >
                {row.label}
              </span>
              <TogglePill on={isOn} hovering={isHovered && row.willToggle} />
              <span
                className={[
                  "whitespace-nowrap rounded-full px-2 py-0.5 text-center text-[10.5px] font-medium transition-all duration-300",
                  isOn
                    ? "bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand)]"
                    : "bg-[color:var(--color-surface-muted)] text-[color:var(--color-ink-4)]",
                ].join(" ")}
              >
                {isOn ? row.level : "No access"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ─── Slide variants - push left/right with spring ─────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
  }),
  center: { x: "0%" },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
  }),
};

const springTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 1,
};

// ─── Hero visual - fixed-height container, slider inside ─────────────────────

type Slide = "photo" | "product";

function HeroVisual() {
  const [[slide, dir], setState] = useState<[Slide, number]>(["photo", 1]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-100px", once: false });

  const goTo = (next: Slide) => {
    setState(([cur]) => [next, cur === "photo" && next === "product" ? 1 : -1]);
  };

  useEffect(() => {
    // Pause auto-cycling when scrolled out of view
    if (!inView) return;
    const t = setTimeout(() => {
      setState(([cur]) => {
        const next: Slide = cur === "photo" ? "product" : "photo";
        return [next, cur === "photo" ? 1 : -1];
      });
    }, 6500);
    return () => clearTimeout(t);
  }, [slide, inView]);

  return (
    <div ref={ref}>
      {/*
        Fixed-height container: both slides are absolutely positioned inside,
        so the section height never changes as slides swap.
      */}
      <div className="relative h-[520px] overflow-hidden rounded-2xl border border-[color:var(--color-line)] shadow-[var(--shadow-lg)] sm:h-[580px]">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={slide}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            className="absolute inset-0 flex flex-col"
          >
            {slide === "photo" ? (
              /* ── Photo slide ── */
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=85&fit=crop"
                  alt="Family together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur-md">
                  <p className="text-[14px] font-medium leading-snug text-white">
                    Every account, document, and memory - organized for the people you love.
                  </p>
                </div>
              </div>
            ) : (
              /* ── Product slide - two cards flex-grow to fill the fixed height ── */
              <div className="flex h-full flex-col gap-3 bg-[color:var(--color-surface-muted)] p-3">
                <AnimatedVaultCard />
                <AnimatedPermissionsCard />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicator dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {(["photo", "product"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => goTo(s)}
            aria-label={s === "photo" ? "Show lifestyle photo" : "Show product demo"}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              slide === s
                ? "w-6 bg-[color:var(--color-brand)]"
                : "w-1.5 bg-[color:var(--color-ink-5)]",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Hero section ─────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-[color:var(--color-brand-soft)]/60 to-transparent"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left column */}
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
              Gmail. iCloud. Chase. Netflix. Dropbox. When something happens,
              your family shouldn&apos;t be left guessing. Dema puts a trusted
              person in control of exactly what they need, nothing more.
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

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.12 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
