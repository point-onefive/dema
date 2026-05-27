import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  variant = "muted",
  className,
}: {
  children: React.ReactNode;
  variant?: "muted" | "brand";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center",
        variant === "brand" && "text-[color:var(--color-brand)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-3 py-1 text-[color:var(--color-brand)]">
      {children}
    </span>
  );
}
