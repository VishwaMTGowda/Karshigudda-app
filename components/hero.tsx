import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <img
        src="/images/hero-hills.png"
        alt="Misty rolling green hills fading into fog at golden hour"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70"/>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-24 mt-3">
        <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/80 ">
          <span className="h-px w-10 bg-accent" />
          Explore. Experience. Stay.
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-light leading-[1.05] text-background sm:text-6xl lg:text-8xl">
          Where the hills remember every season.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
          Welcome to Karshigudda, your starting point for discovering the breathtaking beauty of Malenadu, Karnataka — a land of mist-covered hills, dense green forests, winding mountain roads, coffee plantations, waterfalls, and peaceful villages.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#gallery"
            className="rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore the work
          </a>
          <a
            href="#film"
            className="flex items-center gap-2 text-sm tracking-wide text-background/90 transition-colors hover:text-background"
          >
            <ArrowDown className="size-4" />
            Watch the film
          </a>
        </div>
      </div>
    </section>
  )
}
