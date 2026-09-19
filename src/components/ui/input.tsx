import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg bg-elevated px-3.5 text-base text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.12)] placeholder:text-subtle outline-none transition-[box-shadow] duration-(--motion-quick) ease-(--ease-out) focus-visible:shadow-[0_0_0_1px_rgba(238,234,228,0.4)]",
        className,
      )}
      {...props}
    />
  );
}
