import { profile } from "@/lib/data";
import { ArrowUpRightIcon, FiverrIcon } from "./icons";
import BootSequence from "./BootSequence";
import TerminalWindow from "./TerminalWindow";

const lines = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat role.txt", output: profile.role },
  {
    prompt: "cat location.txt",
    output: `${profile.location} — available for select freelance work`,
  },
  { prompt: "cat tagline.txt", output: profile.tagline },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
    >
      <TerminalWindow title="viraj@portfolio:~">
        <BootSequence lines={lines} />

        <div className="flex flex-wrap items-center gap-4 border-t border-border px-4 py-5 sm:px-6">
          <a
            href={profile.socials.fiverr}
            target="_blank"
            rel="noreferrer"
            className="hard-shadow-accent inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <FiverrIcon className="h-4 w-4" />
            ./view-services
          </a>
          <a
            href="#experience"
            className="hard-shadow inline-flex items-center gap-1.5 border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent"
          >
            ./see-my-work
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </TerminalWindow>
    </section>
  );
}
