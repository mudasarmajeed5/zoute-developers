export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 id="contact-title" className="text-2xl font-semibold text-foreground">
            Contact
          </h2>
          <p className="mt-2 text-foreground/80">Email us — short and simple.</p>
        </header>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-foreground/80">
            <span className="sr-only">Email address:</span>
            <a
              href="mailto:hello@zoute.dev"
              className="font-medium text-foreground underline decoration-primary underline-offset-4"
            >
              hello@zoute.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
