"use client";

import { useEffect, useState } from "react";
import ParticlePortrait from "./ParticlePortrait";

function sizeForWidth(w: number) {
  if (w < 480) return 260;
  if (w < 768) return 320;
  if (w < 1024) return 360;
  if (w < 1280) return 400;
  return 460;
}

export default function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setSize(sizeForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (size === null) {
    return <div className="h-[300px] w-[300px] rounded-2xl bg-background-elevated" />;
  }

  return <ParticlePortrait src={src} size={size} alt={alt} />;
}
