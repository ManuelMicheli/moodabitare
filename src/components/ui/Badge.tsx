import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "dark";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        {
          "bg-cream text-black-deep": variant === "default",
          "bg-gold/10 text-gold-dark": variant === "gold",
          "bg-black-deep text-white": variant === "dark",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
