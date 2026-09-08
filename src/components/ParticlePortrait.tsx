"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Inspired by the "Interactive Particle Logo" CodePen (ParticleSlider): an
// image is sampled into a grid of square particles that spring back to their
// origin, and scatter under the cursor / on click. Rebuilt from scratch here
// (the original pen loads a proprietary hosted library) as a self-contained
// canvas sampler + spring-physics sim.

type Particle = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
};

const SPRING = 0.05;
const DAMPING = 0.85;

export default function ParticlePortrait({
  src,
  size = 320,
  alt,
}: {
  src: string;
  size?: number;
  alt: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Supersample: sample the source image at a higher resolution than the
    // display size so a fine step still lands on distinct source pixels
    // (denser, sharper particles instead of a coarse blocky mosaic).
    const isSmall = window.innerWidth < 640;
    const sampleRes = Math.round(size * (isSmall ? 1.4 : 2));
    const step = 6;
    const spacing = (step / sampleRes) * size;
    const dot = Math.max(1.3, spacing * 0.92);
    const repelRadius = size * 0.16;
    const repelStrength = 14;

    let particles: Particle[] = [];
    let raf = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      const sample = document.createElement("canvas");
      sample.width = sampleRes;
      sample.height = sampleRes;
      const sctx = sample.getContext("2d");
      if (!sctx) return;
      sctx.drawImage(img, 0, 0, sampleRes, sampleRes);
      const { data } = sctx.getImageData(0, 0, sampleRes, sampleRes);

      const built: Particle[] = [];
      for (let py = 0; py < sampleRes; py += step) {
        for (let px = 0; px < sampleRes; px += step) {
          const i = (py * sampleRes + px) * 4;
          const alphaCh = data[i + 3];
          if (alphaCh < 40) continue;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const ox = (px / sampleRes) * size;
          const oy = (py / sampleRes) * size;
          built.push({
            ox,
            oy,
            x: ox + (Math.random() - 0.5) * size * 1.4,
            y: oy + (Math.random() - 0.5) * size * 1.4,
            vx: 0,
            vy: 0,
            color: `rgb(${r}, ${g}, ${b})`,
          });
        }
      }
      particles = built;
      setReady(true);

      function frame() {
        ctx!.clearRect(0, 0, size, size);
        for (const p of particles) {
          if (pointer.active) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < repelRadius && dist > 0.01) {
              const force = ((repelRadius - dist) / repelRadius) * repelStrength;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }
          p.vx += (p.ox - p.x) * SPRING;
          p.vy += (p.oy - p.y) * SPRING;
          p.vx *= DAMPING;
          p.vy *= DAMPING;
          p.x += p.vx;
          p.y += p.vy;

          ctx!.fillStyle = p.color;
          ctx!.fillRect(p.x, p.y, dot, dot);
        }
        raf = requestAnimationFrame(frame);
      }
      raf = requestAnimationFrame(frame);
    };

    function toLocal(clientX: number, clientY: number) {
      const rect = canvas!.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function handleMove(e: PointerEvent) {
      const { x, y } = toLocal(e.clientX, e.clientY);
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
    }
    function handleLeave() {
      pointer.active = false;
    }
    function handleClick() {
      for (const p of particles) {
        p.x = p.ox + (Math.random() - 0.5) * size;
        p.y = p.oy + (Math.random() - 0.5) * size;
      }
    }

    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [reducedMotion, src, size]);

  if (reducedMotion) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-2xl"
        priority
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{ width: size, height: size }}
      className="relative overflow-hidden rounded-2xl"
    >
      {!ready && (
        <Image
          src={src}
          alt=""
          width={size}
          height={size}
          className="absolute inset-0 opacity-40"
          priority
        />
      )}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="relative cursor-crosshair"
      />
    </div>
  );
}
