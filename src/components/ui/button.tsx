import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-bg),0_0_0_4px_var(--color-accent)] disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg shadow-[0_0_0_1px_rgba(238,234,228,0.08)] hover:bg-fg",
        secondary:
          "bg-elevated text-fg shadow-[0_0_0_1px_rgba(238,234,228,0.12)] hover:shadow-[0_0_0_1px_rgba(238,234,228,0.22)]",
        ghost: "bg-transparent text-muted hover:text-fg hover:bg-elevated",
        danger:
          "bg-transparent text-danger shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-danger)_45%,transparent)] hover:bg-danger/10",
      },
      size: {
        md: "h-11 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-xl px-5 text-base",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
