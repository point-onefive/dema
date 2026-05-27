import { cn } from "@/lib/cn";

export function DemaMark({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        fill="var(--color-brand)"
      />
      <path
        d="M10.5 22V10h4.4c4 0 6.6 2.3 6.6 6s-2.6 6-6.6 6h-4.4Zm3-2.6h1.4c2 0 3.4-1.3 3.4-3.4S16.9 12.6 14.9 12.6h-1.4v6.8Z"
        fill="#FAF8F3"
      />
    </svg>
  );
}

export function DemaWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <DemaMark size={26} />
      <span className="font-display text-[22px] leading-none tracking-tight text-[color:var(--color-ink)]">
        Dema
      </span>
    </span>
  );
}
