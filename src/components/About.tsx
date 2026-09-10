import { education, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="cat about.md" title="Who I am" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <TerminalWindow title="about.md">
          <p className="px-4 py-5 text-sm leading-relaxed text-foreground sm:px-6 sm:py-6 sm:text-base">
            {profile.resumeSummary}
          </p>
        </TerminalWindow>

        <TerminalWindow title="education.json">
          <pre className="whitespace-pre-wrap break-words px-4 py-5 text-xs leading-relaxed sm:px-6 sm:py-6 sm:text-sm">
            <code>
              <span className="text-muted">{"{"}</span>
              {"\n  "}
              <span className="text-accent">&quot;school&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-foreground">
                &quot;{education.school}&quot;
              </span>
              <span className="text-muted">,</span>
              {"\n  "}
              <span className="text-accent">&quot;degree&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-foreground">
                &quot;{education.degree}&quot;
              </span>
              <span className="text-muted">,</span>
              {"\n  "}
              <span className="text-accent">&quot;period&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-foreground">
                &quot;{education.period}&quot;
              </span>
              <span className="text-muted">,</span>
              {"\n  "}
              <span className="text-accent">&quot;coursework&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-foreground">
                &quot;{education.coursework}&quot;
              </span>
              {"\n"}
              <span className="text-muted">{"}"}</span>
            </code>
          </pre>
        </TerminalWindow>
      </div>
    </section>
  );
}
