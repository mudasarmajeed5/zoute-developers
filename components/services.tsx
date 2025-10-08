const items = ["ERP Systems", "CRMs", "Software Applications", "Web Applications", "Websites", "Portfolios"] as const

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 id="services-title" className="text-2xl font-semibold text-foreground">
            Services
          </h2>
          <p className="mt-2 max-w-prose text-foreground/80">Practical solutions, delivered cleanly and on time.</p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((label) => (
            <li key={label} className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium text-foreground">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                Scope, design, build, and ship with a focus on performance and longevity.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
