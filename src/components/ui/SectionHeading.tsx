import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "text-label mb-3 inline-block",
            dark ? "text-white/50" : "text-black-deep/50"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-section-title",
          dark ? "text-white" : "text-black-deep"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-body",
            align === "center" && "mx-auto",
            dark ? "text-warm-gray" : "text-mid-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
