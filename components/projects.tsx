type Project = {
  title: string
  description: string
  imageAlt: string
}

const projects: Project[] = [
  {
    title: "ERP Dashboard",
    description: "Role-based analytics and process automation.",
    imageAlt: "ERP dashboard preview",
  },
  {
    title: "CRM Workspace",
    description: "Pipeline visibility with activity tracking.",
    imageAlt: "CRM workspace preview",
  },
  {
    title: "SaaS Web App",
    description: "Minimal UI with fast onboarding.",
    imageAlt: "SaaS web app preview",
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 id="projects-title" className="text-2xl font-semibold text-foreground">
            Selected work
          </h2>
          <p className="mt-2 max-w-prose text-foreground/80">A few recent builds. Static previews for speed.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border border-border bg-card">
              <img
                src={`/.jpg?height=180&width=360&query=${encodeURIComponent(p.title + " preview in gray theme")}`}
                alt={p.imageAlt}
                className="h-auto w-full rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
