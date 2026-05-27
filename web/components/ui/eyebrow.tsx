import { cn } from "@/lib/cn";

export function SectionBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-3 py-1 text-[color:var(--color-brand)]",
        className
      )}
    >
      {children}
    </span>
  );
}
