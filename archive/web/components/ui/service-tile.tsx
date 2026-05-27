import { cn } from "@/lib/cn";

type ServiceKey =
  | "mail"
  | "bank"
  | "stream"
  | "cloud"
  | "storage"
  | "drive";

const tileStyle: Record<ServiceKey, { bg: string; fg: string; letter: string }> = {
  mail: { bg: "bg-white", fg: "text-[color:var(--color-svc-mail)]", letter: "M" },
  bank: { bg: "bg-[color:var(--color-svc-bank)]", fg: "text-white", letter: "C" },
  stream: { bg: "bg-[color:var(--color-svc-stream)]", fg: "text-white", letter: "N" },
  cloud: { bg: "bg-white", fg: "text-[color:var(--color-svc-cloud)]", letter: "i" },
  storage: { bg: "bg-[color:var(--color-svc-storage)]", fg: "text-white", letter: "D" },
  drive: { bg: "bg-white", fg: "text-[color:var(--color-svc-drive-green)]", letter: "G" },
};

export function ServiceTile({
  service,
  size = "md",
  className,
}: {
  service: ServiceKey;
  size?: "sm" | "md";
  className?: string;
}) {
  const s = tileStyle[service];
  const dim = size === "sm" ? "h-7 w-7 text-[13px]" : "h-9 w-9 text-[15px]";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[8px] font-semibold ring-1 ring-black/5",
        dim,
        s.bg,
        s.fg,
        className,
      )}
      aria-hidden
    >
      {s.letter}
    </span>
  );
}
