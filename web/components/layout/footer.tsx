import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DemaWordmark } from "@/components/icons/dema-mark";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Security center", href: "#security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-cream)]">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-16 sm:grid-cols-4 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <DemaWordmark />
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.55] text-[color:var(--color-ink-3)]">
              A digital executor for the life you built. Made for the moments
              that matter most.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-4)]">
                {g.title}
              </div>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-line)] py-6 text-[12.5px] text-[color:var(--color-ink-4)] sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Dema. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-[color:var(--color-ink-2)] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[color:var(--color-ink-2)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
