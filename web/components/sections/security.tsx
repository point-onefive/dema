import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ShieldCheck, KeyRound, Fingerprint, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const items: Item[] = [
  {
    icon: ShieldCheck,
    title: "End-to-end encryption",
    copy: "Your vault is encrypted on your device before it leaves. AES-256 at rest. Nothing readable ever reaches our servers.",
  },
  {
    icon: KeyRound,
    title: "Zero-knowledge architecture",
    copy: "We cannot read your vault. Your encryption key is yours alone. Even a subpoena to Dema would return nothing useful.",
  },
  {
    icon: Fingerprint,
    title: "Verified executor requests",
    copy: "Every request is identity-verified and multi-factor authenticated. Access is never silent. Every action is logged.",
  },
  {
    icon: FileCheck,
    title: "Auditable by design",
    copy: "Every vault action produces a signed, timestamped log. Your family gets a clear record of exactly what happened and when.",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-[#14130f] py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Security and trust
              </span>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="mt-6 font-display text-[34px] leading-[1.07] tracking-[-0.018em] text-white sm:text-[42px] lg:text-[48px]">
                Designed like the people trusting it have one chance.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.65] text-white/70">
                This holds your family&apos;s most sensitive information at their
                most vulnerable moment. We don&apos;t take that lightly.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=85&fit=crop"
                    alt="Digital security and protection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14130f]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm">
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-white/50">
                        Vault encryption status
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-[13.5px] font-medium text-white">
                          All data encrypted at rest
                        </span>
                      </div>
                      <div className="mt-0.5 text-[12px] text-white/40">
                        AES-256 &middot; Zero-knowledge &middot; Device-local key
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right - security cards */}
          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.08}>
            {items.map((item) => (
              <RevealItem key={item.title}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-white/65">
                    {item.copy}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
