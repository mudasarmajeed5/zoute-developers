export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Zoute Developers. All rights reserved.
          </p>
          <nav aria-label="Footer" className="text-sm">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://instagram.com/zoute_developers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:underline"
                >
                  Instagram @zoute_developers
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/80 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:underline">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
