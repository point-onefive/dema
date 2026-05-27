import { Lock, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

function PersonCard({
  name,
  role,
  verified = false,
}: {
  name: string;
  role: string;
  verified?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-6 py-7 shadow-[var(--shadow-xs)]">
      <div className="relative">
        <Avatar name={name} size="lg" />
        {verified && (
          <span className="absolute -right-0.5 -bottom-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-brand)] ring-2 ring-[color:var(--color-surface)]">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </span>
        )}
      </div>
      <div className="mt-3 text-center">
        <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-ink-4)]">
          {role}
        </div>
        <div className="mt-1 text-[15px] font-medium text-[color:var(--color-ink)]">
          {name}
        </div>
      </div>
    </div>
  );
}

export function ExecutorMockup() {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
      <PersonCard name="You" role="Account owner" />
      <div className="flex items-center justify-center">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-3)] shadow-[var(--shadow-xs)]">
          <Lock className="h-4 w-4" />
        </span>
      </div>
      <PersonCard name="John Anderson" role="Trusted executor" verified />
    </div>
  );
}
