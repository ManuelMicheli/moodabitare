import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string; target?: string; rel?: string } & Record<string, unknown>)
  | ({ href?: never } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">)
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-black-deep text-white hover:bg-black-soft",
  secondary:
    "bg-cream text-black-deep hover:bg-warm-gray",
  outline:
    "border-2 border-black-deep text-black-deep hover:bg-black-deep hover:text-white",
  ghost:
    "text-black-deep hover:bg-cream",
  gold:
    "bg-gold text-black-deep font-semibold hover:bg-gold-dark",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-out",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
