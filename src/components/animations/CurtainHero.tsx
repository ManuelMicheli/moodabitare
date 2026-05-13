"use client";

interface CurtainHeroProps {
  children: React.ReactNode;
}

export function CurtainHero({ children }: CurtainHeroProps) {
  return <>{children}</>;
}
