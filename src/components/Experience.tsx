import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="cat experience.log" title="Where I've worked" />

      <TerminalWindow title="experience.log">
        <div className="divide-y divide-border">
          {experience.map((job, i) => (
            <div key={job.role + job.org} className="px-4 py-5 text-sm sm:px-6 sm:py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-foreground">
                  <span className="text-muted">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>{" "}
                  <span className="text-accent">{job.role}</span>
                  <span className="text-muted"> @ {job.org}</span>
                </p>
                <span className="text-xs text-muted">{job.period}</span>
              </div>

              <ul className="mt-3 space-y-1.5 pl-1">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 leading-relaxed text-muted">
                    <span className="shrink-0 text-accent/70">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border px-4 py-3 text-xs text-muted sm:px-6">
          <span className="text-accent">$</span> <span className="caret">▍</span>
        </div>
      </TerminalWindow>
    </section>
  );
}
