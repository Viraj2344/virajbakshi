"use client";

import { useRef } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRightIcon, FiverrIcon } from "./icons";
import BlackHoleField from "./BlackHoleField";
import HeroPortrait from "./HeroPortrait";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <BlackHoleField className="absolute inset-0 h-full w-full" targetRef={portraitRef} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent lg:via-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {profile.location} · Available for select freelance work
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.socials.fiverr}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              <FiverrIcon className="h-4 w-4" />
              View my services
            </a>
            <a
              href="#experience"
              className="flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              See my work
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="rounded-[28px] border border-border/80 bg-background-elevated/40 p-3 backdrop-blur-sm">
            <div ref={portraitRef} className="inline-block leading-none">
              <HeroPortrait
                src="/images/viraj.png"
                alt="Portrait of Viraj Bakshi — move your cursor over it"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              hover · click
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
