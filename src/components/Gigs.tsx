import { gigs, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, FiverrIcon } from "./icons";

export default function Gigs() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Services" title="Work with me on Fiverr" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gigs.map((gig) => (
          <a
            key={gig.title}
            href={profile.socials.fiverr}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground">
                {gig.title}
              </h3>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {gig.blurb}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {gig.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-2.5 py-1 text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}

        <a
          href={profile.socials.fiverr}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-dashed border-border p-6 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <FiverrIcon className="h-6 w-6" />
          <span>
            See all gigs, pricing tiers, and reviews on my Fiverr profile.
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-foreground group-hover:text-accent">
            Visit Fiverr <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
