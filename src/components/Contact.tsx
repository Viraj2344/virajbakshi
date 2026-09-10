import { profile } from "@/lib/data";
import {
  ArrowUpRightIcon,
  FiverrIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "./icons";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="mail --compose" title="Get in touch" />

      <TerminalWindow title="mail --compose">
        <div className="px-4 py-6 text-sm sm:px-6 sm:py-8">
          <p className="text-muted">
            <span className="text-accent">To:</span> {profile.email}
          </p>
          <p className="mt-1 text-muted">
            <span className="text-accent">Subject:</span> New project inquiry
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-foreground">
            Have a robot control system, a computer vision pipeline, or a CAD
            automation workflow in mind? Send it over — let&apos;s build it.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="hard-shadow-accent inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              ./send-email
            </a>
            <a
              href={profile.socials.fiverr}
              target="_blank"
              rel="noreferrer"
              className="hard-shadow inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-accent"
            >
              <FiverrIcon className="h-4 w-4" />
              Fiverr
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border px-4 py-4 text-xs text-muted sm:flex-row sm:items-center sm:px-6">
          <p>
            <span className="text-muted">{"// "}</span>© {new Date().getFullYear()}{" "}
            {profile.name}. Built with Next.js.
          </p>
          <div className="flex items-center gap-5">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="text-muted transition-colors hover:text-accent">
              <XIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted transition-colors hover:text-accent">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
}
