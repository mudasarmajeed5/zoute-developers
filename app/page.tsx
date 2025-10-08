import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <header className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <nav aria-label="Primary" className="flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight text-foreground" aria-label="Zoute Developers home">
              Zoute Developers
            </a>
            <ul className="flex items-center gap-4 text-sm">
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
                <a href="#about" className="text-foreground/80 hover:underline">
                  About
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
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
