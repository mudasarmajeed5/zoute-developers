export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 id="about-title" className="text-2xl font-semibold text-foreground">
            Why choose us
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-medium text-foreground">Modern stack</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Next.js + TypeScript + Tailwind. Clean patterns, clear architecture.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-medium text-foreground">Performance first</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Static-first and accessible by default. Ship fast experiences.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-medium text-foreground">Straightforward</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Simple communication, predictable timelines, measurable outcomes.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
