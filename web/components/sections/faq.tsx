"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

type Q = { q: string; a: string };

const questions: Q[] = [
  {
    q: "What is Dema?",
    a: "Dema is a digital executor platform. It helps you organize the important digital accounts, files, and instructions in your life so that, if something happens, a trusted person has a clear and secure guide rather than a guessing game.",
  },
  {
    q: "Does Dema require my passwords?",
    a: "No. Dema is designed to help organize and pass on access without storing the secrets that protect it. You keep control of what gets included and what stays private.",
  },
  {
    q: "How is my information protected?",
    a: "Your vault is encrypted on your device before it ever leaves it. Even our own servers cannot read its contents. Every executor request is signed, logged, and verifiable.",
  },
  {
    q: "Who can access my vault, and when?",
    a: "Only the people you explicitly choose, and only with the permissions you grant. Access opens through a verifiable request. It is never automatic and never silent.",
  },
  {
    q: "How is Dema different from estate planning services?",
    a: "Most estate planning tools focus on legal documents and financial assets. Dema is built around your digital life: subscriptions, memories, passwords, files, and accounts. It's less about legal paperwork and more about making sure your family can actually navigate what you've built online.",
  },
  {
    q: "Why would someone use Dema?",
    a: "Managing a loved one's digital life can be overwhelming. Dema reduces confusion by organizing what matters in one place so families aren't scrambling at the worst possible time.",
  },
  {
    q: "What happens to my data if I stop using Dema?",
    a: "You can export or delete your vault at any time. We don't hold your data hostage and we don't profit from it.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <div className="text-center">
            <Reveal>
              <SectionBadge>Frequently asked</SectionBadge>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.015em] text-[color:var(--color-ink)] sm:text-[44px] lg:text-[48px]">
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
                        i === questions.length - 1
                          ? ""
                          : "border-b border-[color:var(--color-line)]"
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] sm:px-8"
                      >
                        <span className="text-[16px] font-medium text-[color:var(--color-ink)] sm:text-[17px]">
                          {item.q}
                        </span>
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-3)]">
                          {isOpen ? (
                            <Minus className="h-3.5 w-3.5" />
                          ) : (
                            <Plus className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                          <p className="max-w-[640px] text-[15px] leading-[1.6] text-[color:var(--color-ink-3)]">
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
        </div>
      </Container>
    </section>
  );
}
