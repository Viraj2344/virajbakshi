export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="text-xs text-muted">
        <span className="text-accent">$</span> {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        <span className="text-muted">{"// "}</span>
        {title}
      </h2>
      <div className="mt-5 h-px w-full bg-border" />
    </div>
  );
}
