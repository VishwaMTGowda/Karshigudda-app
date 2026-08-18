import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { FilmShowcase } from "@/components/film-showcase"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Gallery />
      <FilmShowcase />
      <ContactFooter />
    </main>
  )
}
