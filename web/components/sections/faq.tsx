"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type Q = { q: string; a: string };

const questions: Q[] = [
  {
    q: "What exactly is a digital executor?",
    a: "A digital executor is a trusted person you designate to manage the digital parts of your life if something happens to you. Unlike a legal executor who deals with physical assets and wills, a digital executor handles online accounts, subscriptions, cloud storage, passwords, photos, and digital files. Dema gives them a structured, secure way to do exactly that.",
  },
  {
    q: "How is Dema different from a password manager?",
    a: "Password managers store your passwords for you to use day-to-day. Dema is built for a completely different moment: when you can't use your accounts anymore. It's designed for your executor, not for you. It maps what exists, who should have access to what, and gives them a verified process to step in. Dema doesn't need to store your passwords to do its job.",
  },
  {
    q: "How is this different from estate planning tools like Trust & Will?",
    a: "Estate planning tools focus on legal documents: wills, trusts, beneficiary designations for financial accounts. Dema is built around your digital life specifically: Gmail, iCloud, Netflix, Dropbox, social media, subscriptions, and documents. Most estate plans say nothing about any of these. Dema fills that gap without replacing your will.",
  },
  {
    q: "Does Dema require my passwords?",
    a: "No. Dema is designed to help your executor navigate your digital life without storing the secrets that protect it. You document what accounts exist and what your executor is permitted to do. The actual credentials are up to you to handle separately, or Dema can guide your executor through verified account recovery processes where applicable.",
  },
  {
    q: "Who can access my vault, and when?",
    a: "Only the people you explicitly name, and only with the permissions you grant them. Access requires a verified executor request - a multi-step identity check that is logged and auditable. Nothing in your vault opens automatically. You define both who and when.",
  },
  {
    q: "How is my information protected?",
    a: "Your vault is encrypted on your device using AES-256 encryption before it ever leaves it. The encryption key is yours and never leaves your device. Even Dema's servers cannot read what's inside your vault. Every executor action is signed, timestamped, and logged.",
  },
  {
    q: "What happens to accounts like Gmail or iCloud?",
    a: "Your executor can be given permission to access specific account categories. For services like Gmail or Google, Dema can guide them through Google's Inactive Account Manager process. For iCloud, there are Digital Legacy contact flows. For subscriptions like Netflix or Spotify, your executor can cancel them directly. Dema maps out the right process for each service type.",
  },
  {
    q: "What happens if I stop using Dema?",
    a: "You can export your entire vault or delete it at any time. We don't hold your data hostage, and we don't profit from it. Deleting your account removes everything from our systems permanently.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <Reveal>
              <SectionBadge>Frequently asked</SectionBadge>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="mt-5 font-display text-[36px] leading-[1.07] tracking-[-0.018em] text-[color:var(--color-ink)] sm:text-[46px]">
                Questions, gently answered.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="mt-12">
            <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
              <ul>
                {questions.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={item.q}
                      className={
                        i < questions.length - 1
                          ? "border-b border-[color:var(--color-line)]"
                          : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)] focus-visible:ring-inset sm:px-8"
                      >
                        <span className="text-[15.5px] font-medium leading-[1.4] text-[color:var(--color-ink)] sm:text-[17px]">
                          {item.q}
                        </span>
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-3)]">
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5" />
                          ) : (
                            <Plus className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                          <p className="max-w-[660px] text-[15px] leading-[1.7] text-[color:var(--color-ink-3)]">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="mt-10 text-center">
            <p className="text-[15px] text-[color:var(--color-ink-3)]">
              Still have questions?{" "}
              <Button href="#cta" variant="ghost" size="md" className="inline">
                Reach out and we&apos;ll answer directly.
              </Button>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
