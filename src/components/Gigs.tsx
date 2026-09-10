import { gigs, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, FiverrIcon } from "./icons";
import TerminalWindow from "./TerminalWindow";

export default function Gigs() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="services --list" title="Work with me on Fiverr" />

      <TerminalWindow title="services --list">
        <div className="divide-y divide-border text-sm">
          {gigs.map((gig, i) => (
            <a
              key={gig.title}
              href={profile.socials.fiverr}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 px-4 py-5 transition-colors hover:bg-background sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div>
                <p className="text-foreground">
                  <span className="text-muted">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>{" "}
                  <span className="group-hover:text-accent">{gig.title}</span>
                </p>
                <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-muted">
                  {gig.blurb}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {gig.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
            </a>
          ))}
        </div>

        <a
          href={profile.socials.fiverr}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 border-t border-border px-4 py-4 text-sm text-muted transition-colors hover:text-accent sm:px-6"
        >
          <FiverrIcon className="h-4 w-4" />
          <span className="text-accent">→</span> fiverr --open-profile
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </TerminalWindow>
    </section>
  );
}
