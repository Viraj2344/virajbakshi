import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="ls -la skills/" title="Toolbox" />

      <TerminalWindow title="~/skills">
        <pre className="overflow-x-auto px-4 py-6 text-xs leading-relaxed sm:px-6 sm:py-8 sm:text-sm">
          <code>
            <span className="text-accent">skills/</span>
            {"\n"}
            {skills.map((group, gi) => {
              const isLastGroup = gi === skills.length - 1;
              const groupPrefix = isLastGroup ? "└── " : "├── ";
              const childPrefix = isLastGroup ? "    " : "│   ";

              return (
                <span key={group.category}>
                  <span className="text-muted">{groupPrefix}</span>
                  <span className="text-accent">{slugify(group.category)}/</span>
                  {"\n"}
                  {group.items.map((item, ii) => {
                    const isLastItem = ii === group.items.length - 1;
                    const itemPrefix = isLastItem ? "└── " : "├── ";
                    return (
                      <span key={item}>
                        <span className="text-muted">{childPrefix}</span>
                        <span className="text-muted">{itemPrefix}</span>
                        <span className="text-foreground">{item}</span>
                        {"\n"}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </code>
        </pre>
      </TerminalWindow>
    </section>
  );
}
