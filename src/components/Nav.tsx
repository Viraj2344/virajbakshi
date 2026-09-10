"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import {
  FiverrIcon,
  InstagramIcon,
  LinkedInIcon,
  MenuIcon,
  CloseIcon,
  XIcon,
} from "./icons";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#research", label: "research" },
  { href: "#skills", label: "skills" },
  { href: "#services", label: "services" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="font-semibold tracking-tight text-foreground">
          viraj@portfolio<span className="text-accent">:~$</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-accent"
            >
              --{link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="text-muted transition-colors hover:text-accent">
            <XIcon className="h-5 w-5" />
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted transition-colors hover:text-accent">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.fiverr}
            target="_blank"
            rel="noreferrer"
            className="hard-shadow flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent"
          >
            <FiverrIcon className="h-4 w-4" />
            --hire-me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted transition-colors hover:text-accent"
              >
                --{link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-5 border-t border-border pt-5">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="text-muted hover:text-accent">
              <XIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted hover:text-accent">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.fiverr} target="_blank" rel="noreferrer" aria-label="Fiverr" className="text-muted hover:text-accent">
              <FiverrIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
