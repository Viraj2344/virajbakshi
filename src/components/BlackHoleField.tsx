"use client";

import { useEffect, useRef } from "react";

// Ported from the "Interactive Blackhole" CodePen (StarKnightt) — orbital stars
// drawn as rotating trail segments around a center point, with hover-collapse
// and click-expand behaviour. Recolored to the site's accent palette and
// rewritten in TypeScript/React with dpr-aware sizing and cleanup.

type RGB = [number, number, number];

const ACCENT: RGB = [249, 115, 22]; // #f97316
const ACCENT_2: RGB = [251, 191, 36]; // #fbbf24

function lerpColor(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function rotatePoint(cx: number, cy: number, x: number, y: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const nx = cos * (x - cx) + sin * (y - cy) + cx;
  const ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny] as const;
}

class Star {
  orbital: number;
  x: number;
  y: number;
  yOrigin: number;
  originalY: number;
  speed: number;
  rotation = 0;
  startRotation: number;
  collapseBonus: number;
  hoverPos: number;
  expansePos: number;
  prevR: number;
  prevX: number;
  prevY: number;
  color: RGB;

  constructor(centerX: number, centerY: number, maxOrbit: number, id: number) {
    const r1 = Math.random() * (maxOrbit / 2) + 1;
    const r2 = Math.random() * (maxOrbit / 2) + maxOrbit;
    this.orbital = (r1 + r2) / 2;

    this.x = centerX;
    this.y = centerY + this.orbital;
    this.yOrigin = this.y;
    this.originalY = this.y;

    this.speed = ((Math.floor(Math.random() * 2.5) + 1.5) * Math.PI) / 180;
    this.startRotation = ((Math.floor(Math.random() * 360) + 1) * Math.PI) / 180;

    this.collapseBonus = Math.max(0, this.orbital - maxOrbit * 0.7);
    this.hoverPos = centerY + maxOrbit / 2 + this.collapseBonus;
    this.expansePos = centerY + (id % 100) * -10 + (Math.random() * 20 + 1);

    this.prevR = this.startRotation;
    this.prevX = this.x;
    this.prevY = this.y;

    this.color = lerpColor(ACCENT, ACCENT_2, this.orbital / maxOrbit);
  }

  draw(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    maxOrbit: number,
    currentTime: number,
    state: { collapse: boolean; expanse: boolean; returning: boolean }
  ) {
    const { collapse, expanse, returning } = state;

    if (!expanse && !returning) {
      this.rotation = this.startRotation + currentTime * this.speed;
      if (!collapse) {
        if (this.y > this.yOrigin) this.y -= 2.5;
        if (this.y < this.yOrigin - 4) this.y += (this.yOrigin - this.y) / 10;
      } else {
        if (this.y > this.hoverPos) this.y -= (this.hoverPos - this.y) / -5;
        if (this.y < this.hoverPos - 4) this.y += 2.5;
      }
    } else if (expanse && !returning) {
      this.rotation = this.startRotation + currentTime * (this.speed / 2);
      if (this.y > this.expansePos) {
        this.y -= Math.floor(this.expansePos - this.y) / -80;
      }
    } else if (returning) {
      this.rotation = this.startRotation + currentTime * this.speed;
      if (Math.abs(this.y - this.originalY) > 2) {
        this.y += (this.originalY - this.y) / 50;
      } else {
        this.y = this.originalY;
        this.yOrigin = this.originalY;
      }
    }

    const alpha = Math.max(0.05, 1 - this.orbital / maxOrbit);
    const [r, g, b] = this.color;

    ctx.save();
    ctx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`;
    ctx.beginPath();
    const [ox, oy] = rotatePoint(centerX, centerY, this.prevX, this.prevY, -this.prevR);
    ctx.moveTo(ox, oy);
    ctx.translate(centerX, centerY);
    ctx.rotate(this.rotation);
    ctx.translate(-centerX, -centerY);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.restore();

    this.prevR = this.rotation;
    this.prevX = this.x;
    this.prevY = this.y;
  }
}

export default function BlackHoleField({
  className,
  targetRef,
}: {
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let centerX = 0;
    let centerY = 0;
    let maxOrbit = 200;
    let hoverRadius = 110;
    let stars: Star[] = [];
    let raf = 0;
    const startTime = performance.now();
    let currentTime = 0;

    const state = { collapse: false, expanse: false, returning: false };
    let expandTimer: ReturnType<typeof setTimeout> | undefined;
    let returnTimer: ReturnType<typeof setTimeout> | undefined;

    const pointer = { x: -9999, y: -9999, active: false };

    function starCount() {
      const area = width * height;
      const n = Math.round(area / 1400);
      return Math.max(220, Math.min(window.innerWidth < 768 ? 320 : 800, n));
    }

    function build() {
      const rect = canvas!.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas!.width = Math.ceil(width * dpr);
      canvas!.height = Math.ceil(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const desktop = window.innerWidth >= 1024;
      const target = targetRef?.current;
      const targetRect = target?.getBoundingClientRect();

      if (targetRect && rect) {
        // Center precisely on the portrait and size the orbit relative to it.
        centerX = targetRect.left - rect.left + targetRect.width / 2;
        centerY = targetRect.top - rect.top + targetRect.height / 2;
        const base = Math.max(targetRect.width, targetRect.height);
        maxOrbit = Math.max(140, Math.min(base * 0.95, 460));
      } else {
        centerX = width * (desktop ? 0.66 : 0.5);
        centerY = height * (desktop ? 0.48 : 0.4);
        maxOrbit = Math.max(90, Math.min(Math.min(width, height) * 0.4, 260));
      }
      hoverRadius = maxOrbit * 0.55;

      state.collapse = false;
      state.expanse = false;
      state.returning = false;
      clearTimeout(expandTimer);
      clearTimeout(returnTimer);

      const count = starCount();
      stars = Array.from({ length: count }, (_, i) => new Star(centerX, centerY, maxOrbit, i));

      ctx!.fillStyle = "rgba(5, 7, 13, 1)";
      ctx!.fillRect(0, 0, width, height);
    }

    function toLocal(clientX: number, clientY: number) {
      const rect = canvas!.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function handlePointerMove(e: PointerEvent) {
      const { x, y } = toLocal(e.clientX, e.clientY);
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      if (!state.expanse) {
        const dist = Math.hypot(x - centerX, y - centerY);
        state.collapse = dist < hoverRadius;
      }
    }

    function handlePointerLeave() {
      pointer.active = false;
      state.collapse = false;
    }

    function handleClick(e: MouseEvent) {
      const { x, y } = toLocal(e.clientX, e.clientY);
      const dist = Math.hypot(x - centerX, y - centerY);
      if (dist >= hoverRadius || state.expanse || state.returning) return;

      state.collapse = false;
      state.expanse = true;
      state.returning = false;

      clearTimeout(expandTimer);
      clearTimeout(returnTimer);
      expandTimer = setTimeout(() => {
        state.expanse = false;
        state.returning = true;
        returnTimer = setTimeout(() => {
          state.returning = false;
        }, 3000);
      }, 6000);
    }

    function loop(now: number) {
      currentTime = (now - startTime) / 50;
      ctx!.fillStyle = "rgba(5, 7, 13, 0.18)";
      ctx!.fillRect(0, 0, width, height);
      for (const star of stars) star.draw(ctx!, centerX, centerY, maxOrbit, currentTime, state);
      raf = requestAnimationFrame(loop);
    }

    build();
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("click", handleClick);

    // The portrait can resize after mount (responsive size picked client-side,
    // image swapping in) — re-measure so the orbit stays centered on it.
    let resizeObserver: ResizeObserver | undefined;
    if (targetRef?.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => build());
      resizeObserver.observe(targetRef.current);
    }

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(loop);
    } else {
      for (const star of stars) star.draw(ctx, centerX, centerY, maxOrbit, 0, state);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(expandTimer);
      clearTimeout(returnTimer);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [targetRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
