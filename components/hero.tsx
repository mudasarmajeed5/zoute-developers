export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="border-b border-border"
      style={{
        // subtle, token-driven gradient background using primary + white
        backgroundImage: "linear-gradient(180deg, var(--color-primary) 0%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Web & Software Agency
            </h1>
            <p className="mt-4 max-w-prose leading-relaxed text-foreground/80">
              We build ERP/CRM systems, applications, and fast websites. Modern, maintainable, and accessible — without
              the fluff.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-primary">
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <img
              src="/agency-hero-illustration-gray-theme.jpg"
              alt="Illustration representing a modern web agency delivering software and websites"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
