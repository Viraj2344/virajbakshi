import { research } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="man research" title="Research & publications" />

      <TerminalWindow title="research(1)">
        <div className="px-4 py-6 text-sm leading-relaxed sm:px-8 sm:py-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent">
            NAME
          </p>
          <p className="mt-2 pl-4 text-foreground">{research.project.title}</p>
          <p className="pl-4 text-xs text-muted">
            {research.project.org} · {research.project.period} · Advisor:{" "}
            {research.project.advisor}
          </p>

          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-accent">
            DESCRIPTION
          </p>
          <ul className="mt-2 space-y-2 pl-4">
            {research.project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-muted">
                <span className="shrink-0 text-accent/70">-o</span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-accent">
            PUBLICATION
          </p>
          <div className="mt-2 border-l-2 border-border pl-4">
            <p className="text-foreground">{research.publication.title}</p>
            <p className="mt-1 text-xs text-muted">
              {research.publication.venue}
            </p>
            <p className="mt-2 text-muted">{research.publication.description}</p>
          </div>

          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-accent">
            SEE ALSO
          </p>
          <ul className="mt-2 space-y-2 pl-4">
            {research.interests.map((interest) => (
              <li key={interest} className="flex gap-2.5 text-muted">
                <span className="shrink-0 text-accent/70">-o</span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </TerminalWindow>
    </section>
  );
}
