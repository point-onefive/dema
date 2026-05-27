"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DemaWordmark } from "@/components/icons/dema-mark";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how",      label: "How it works" },
  { href: "#features", label: "Features"     },
  { href: "#security", label: "Security"     },
  { href: "#pricing",  label: "Pricing"      },
  { href: "#faq",      label: "FAQ"          },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  // Add a subtle border once the user scrolls past the very top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 backdrop-blur-md transition-colors duration-300",
          scrolled
            ? "border-b border-[color:var(--color-line)]"
            : "border-b border-transparent",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-[color:var(--color-cream)]/85" />
        <Container className="relative">
          <div className="flex h-16 items-center justify-between gap-8">
            <Link href="/" aria-label="Dema home" className="shrink-0">
              <DemaWordmark />
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[13.5px] font-medium text-[color:var(--color-ink-3)] transition-colors hover:text-[color:var(--color-ink)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="#cta"
                variant="primary"
                size="md"
                className="hidden sm:inline-flex"
              >
                Get early access
              </Button>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--color-line)] text-[color:var(--color-ink-3)] transition-colors hover:bg-[color:var(--color-surface)] md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — click to dismiss */}
            <motion.div
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 z-20 bg-[color:var(--color-ink)]/30 md:hidden"
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              key="mobile-nav-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-16 z-30 border-b border-[color:var(--color-line)] bg-[color:var(--color-cream)] shadow-[var(--shadow-md)] md:hidden"
            >
              <Container>
                <nav className="flex flex-col py-4">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[color:var(--color-line)] py-3 text-[15px] font-medium text-[color:var(--color-ink-2)] last:border-0 hover:text-[color:var(--color-ink)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="pt-4 pb-2">
                    <Button
                      href="#cta"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      onClick={() => setOpen(false)}
                    >
                      Get early access
                    </Button>
                  </div>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
