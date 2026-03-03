import React from "react";

const ACCENT_MAP: Record<string, string> = {
  à: "a",
  è: "e",
  ì: "i",
  ò: "o",
  ù: "u",
};

const ACCENT_REGEX = /[àèìòù]/g;

/**
 * Renders text replacing accented vowels with a styled <span class="accent-a">
 * so Double Porte 3 font displays them correctly with a CSS pseudo-element accent.
 */
export function AccentText({ children }: { children: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = ACCENT_REGEX.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push(children.slice(lastIndex, match.index));
    }
    const base = ACCENT_MAP[match[0]];
    parts.push(
      <span key={match.index} className="accent-a">
        {base}
      </span>
    );
    lastIndex = match.index + 1;
  }

  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  return <>{parts}</>;
}
