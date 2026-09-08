import { profile } from "@/lib/data";
import {
  ArrowUpRightIcon,
  FiverrIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background-elevated/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Have a project in mind? Let&apos;s build it.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Whether it&apos;s a robot control system, a computer vision pipeline,
          or a CAD automation workflow — reach out and let&apos;s talk.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.socials.fiverr}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <FiverrIcon className="h-4 w-4" />
            Fiverr
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
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
      </div>
    </section>
  );
}
