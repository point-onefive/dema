"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DemaWordmark } from "@/components/icons/dema-mark";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-transparent backdrop-blur-md">
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
                  className="text-[13.5px] font-medium text-[color:var(--color-ink-3)] hover:text-[color:var(--color-ink)] transition-colors"
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
                aria-label="Toggle menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--color-line)] text-[color:var(--color-ink-3)] md:hidden"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
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
                    className="py-3 text-[15px] font-medium text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] border-b border-[color:var(--color-line)] last:border-0"
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
        )}
      </AnimatePresence>
    </>
  );
}
