"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type State = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  className,
  size = "default",
  placeholder = "Your email address",
}: {
  className?: string;
  size?: "default" | "large";
  placeholder?: string;
}) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading" || state === "success") return;
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setState("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          (data as { error?: string }).error ?? "Something went wrong. Please try again."
        );
        setState("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-[color:var(--color-brand-line)] bg-[color:var(--color-brand-soft)] px-5 py-3 text-[14.5px] font-medium text-[color:var(--color-brand)]",
          className
        )}
      >
        <span className="h-2 w-2 rounded-full bg-[color:var(--color-brand)]" />
        You&apos;re on the list. We&apos;ll be in touch soon.
      </div>
    );
  }

  const isLarge = size === "large";

  return (
    <div className={cn("w-full", className)}>
      <form
        onSubmit={handleSubmit}
        aria-label="Join the Dema early access list"
        className={cn(
          "flex w-full items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-[var(--shadow-sm)] transition-shadow focus-within:shadow-[var(--shadow-md)]",
          isLarge ? "p-1.5 sm:p-2" : "p-1"
        )}
      >
        <label htmlFor={inputId} className="sr-only">
          Your email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder={placeholder}
          disabled={state === "loading"}
          className={cn(
            "min-w-0 flex-1 bg-transparent text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-ink-5)]",
            isLarge ? "px-4 text-[16px]" : "px-3 text-[14px]"
          )}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={cn(
            "shrink-0 rounded-full bg-[color:var(--color-brand)] font-medium text-white transition-colors hover:bg-[color:var(--color-brand-hover)] disabled:opacity-60",
            isLarge ? "px-6 py-3 text-[15px]" : "px-4 py-2 text-[14px]"
          )}
        >
          {state === "loading" ? "Joining..." : "Get early access"}
        </button>
      </form>
      {state === "error" && errorMsg && (
        <p className="mt-2 pl-4 text-[13px] text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}
