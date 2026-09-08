import { education, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="About" title="Who I am" />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {profile.resumeSummary}
        </p>

        <div className="rounded-2xl border border-border bg-background-elevated p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Education
          </p>
          <h3 className="mt-3 text-base font-semibold text-foreground">
            {education.school}
          </h3>
          <p className="mt-1 text-sm text-muted">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.period}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            <span className="text-foreground/80">Relevant coursework: </span>
            {education.coursework}
          </p>
        </div>
      </div>
    </section>
  );
}
