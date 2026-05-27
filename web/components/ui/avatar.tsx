import { cn } from "@/lib/cn";

const palette = [
  { bg: "bg-[#E8DACB]", fg: "text-[#3E2C1E]" },
  { bg: "bg-[#D6E0DC]", fg: "text-[#1F3A33]" },
  { bg: "bg-[#E2D5E5]", fg: "text-[#3B2A40]" },
  { bg: "bg-[#E6DFD0]", fg: "text-[#3A3422]" },
];

function hash(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return Math.abs(h) % palette.length;
}

export function Avatar({
  name,
  size = "lg",
  className,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const c = palette[hash(name)];
  const dim =
    size === "sm"
      ? "h-8 w-8 text-[12px]"
      : size === "md"
        ? "h-12 w-12 text-[15px]"
        : "h-16 w-16 text-[19px]";
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium ring-1 ring-black/5",
        dim,
        c.bg,
        c.fg,
        className
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
