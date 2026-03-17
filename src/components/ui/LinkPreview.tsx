"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type LinkPreviewProps = {
  href: string;
  previewImage: string;
  previewTitle: string;
  children: React.ReactNode;
};

export function LinkPreview({
  href,
  previewImage,
  previewTitle,
  children,
}: LinkPreviewProps) {
  const [show, setShow] = useState(false);
  const isMobile = useIsMobile(1024);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(true), 120);
  }, []);

  const handleLeave = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setShow(false);
  }, []);

  if (isMobile) {
    return (
      <Link href={href} className="inline">
        {children}
      </Link>
    );
  }

  return (
    <span className="relative inline group/link">
      <Link
        href={href}
        className="inline"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>

      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 pointer-events-none"
          >
            <span className="block w-56 rounded-xl shadow-2xl shadow-black-deep/20 overflow-hidden bg-white ring-1 ring-black-deep/[0.04]">
              <span className="relative block w-full aspect-[16/10]">
                <Image
                  src={previewImage}
                  alt={previewTitle}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </span>
              <span className="block px-3.5 py-3">
                <span className="block font-ui text-[13px] font-medium text-black-deep leading-tight">
                  {previewTitle}
                </span>
                <span className="block font-ui text-[10px] text-black-deep/35 mt-1">
                  moschianosrl.it{href}
                </span>
              </span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
