'use client';
import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  duration?: number;
  spread?: number;
  textLength?: number;
}

export function TextShimmer({
  children,
  className,
  shimmerColor = '#7A2638',
  duration = 3,
  spread = 2,
  textLength = 40,
}: TextShimmerProps) {
  const dynamicSpread = useMemo(() => {
    return textLength * spread;
  }, [textLength, spread]);

  const maskGradient = `linear-gradient(90deg, transparent calc(50% - ${dynamicSpread}px), black, transparent calc(50% + ${dynamicSpread}px))`;

  return (
    <span className={cn('relative inline-block', className)}>
      {/* Base layer — always visible */}
      {children}

      {/* Shimmer layer — CSS animated mask sweep */}
      <span
        className="absolute inset-0 pointer-events-none animate-shimmer-sweep"
        aria-hidden="true"
        style={{
          color: shimmerColor,
          WebkitMaskImage: maskGradient,
          maskImage: maskGradient,
          WebkitMaskSize: '250% 100%',
          maskSize: '250% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
