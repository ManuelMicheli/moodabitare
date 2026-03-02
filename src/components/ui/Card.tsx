import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-warm-gray/50",
        {
          "p-4 sm:p-6": padding === "sm",
          "p-6 sm:p-8": padding === "md",
          "p-8 sm:p-10": padding === "lg",
        },
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:border-gold/30 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
