import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DemaWordmark } from "@/components/icons/dema-mark";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent backdrop-blur-md">
      <div className="absolute inset-0 bg-[color:var(--color-cream)]/80" />
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
            <Button href="#" variant="ghost" size="md" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button href="#cta" variant="primary" size="md">
              Get early access
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
