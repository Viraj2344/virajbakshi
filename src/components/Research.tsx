import { research } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Research" title="Research & publications" />

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-foreground">
            {research.project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {research.project.org} · {research.project.period}
          </p>
          <p className="mt-1 text-sm text-muted">
            Advisor: {research.project.advisor}
          </p>

          <ul className="mt-5 space-y-2.5">
            {research.project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl border border-border/70 bg-background p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Publication
            </p>
            <h4 className="mt-2 text-sm font-semibold text-foreground">
              {research.publication.title}
            </h4>
            <p className="mt-1 text-xs text-muted">{research.publication.venue}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {research.publication.description}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Research interests
          </p>
          <ul className="mt-4 space-y-4">
            {research.interests.map((interest) => (
              <li
                key={interest}
                className="text-sm leading-relaxed text-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
