"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Line = { prompt: string; output: string };

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function BootSequence({ lines }: { lines: Line[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reduced) return;
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex].output;
    if (charIndex >= current.length) {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setCharIndex((c) => c + 1), 14);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, reduced, lines]);

  const done = reduced || lineIndex >= lines.length;

  return (
    <div className="space-y-4 px-4 py-5 text-sm sm:px-6 sm:py-6">
      {lines.map((line, i) => {
        const isPast = i < lineIndex || done;
        const isCurrent = i === lineIndex && !done;
        if (!isPast && !isCurrent) return null;

        const text = isPast ? line.output : line.output.slice(0, charIndex);

        return (
          <div key={line.prompt}>
            <p className="text-muted">
              <span className="text-accent">$</span> {line.prompt}
            </p>
            <p className="mt-1 whitespace-pre-line text-foreground">
              {text}
              {isCurrent && <span className="caret">▍</span>}
            </p>
          </div>
        );
      })}
      <p className="text-muted">
        <span className="text-accent">$</span>{" "}
        <span className="caret">▍</span>
      </p>
    </div>
  );
}
