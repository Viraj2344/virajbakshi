"use client";

import { useEffect, useRef } from "react";

// Inspired by the "ThreeJS Toys - Particles Cursor" CodePen: colorful
// particles trail the pointer and burst outward with a fresh hue on click.
// The original wraps a WebGL/GPGPU library; this is a dependency-free 2D
// canvas version of the same interaction (trailing decay + click burst).

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

const MAX_PARTICLES = 220;

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    let hue = 27; // starts near the site's amber/orange accent

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x: number, y: number, count: number, speed: number) {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        const angle = Math.random() * Math.PI * 2;
        const v = Math.random() * speed;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * v,
          vy: Math.sin(angle) * v,
          life: 1,
          maxLife: 1,
          size: Math.random() * 2 + 1.5,
          hue: hue + Math.random() * 30 - 15,
        });
      }
    }

    function handleMove(e: PointerEvent) {
      spawn(e.clientX, e.clientY, 2, 0.6);
    }

    function handleClick(e: MouseEvent) {
      hue = Math.random() * 360;
      spawn(e.clientX, e.clientY, 26, 4.5);
    }

    function frame() {
      ctx!.clearRect(0, 0, width, height);
      particles = particles.filter((p) => p.life > 0.02);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life *= 0.94;

        ctx!.beginPath();
        ctx!.fillStyle = `hsla(${p.hue}, 90%, 68%, ${p.life})`;
        ctx!.arc(p.x, p.y, p.size * p.life + 0.4, 0, Math.PI * 2);
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("click", handleClick);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
