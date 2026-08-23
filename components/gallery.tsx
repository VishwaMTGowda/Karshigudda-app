const shots = [
  {
    src: "/images/hero-hills.png",
    alt: "Sunlight streaming through a dense green forest canopy",
    title: "Understory",
    place: "Western Ghats",
    span: "lg:col-span-7",
  },
  {
    src: "/images/2.jpeg",
    alt: "A foggy mountain peak rising above a sea of clouds at dawn",
    title: "First Light",
    place: "Kumara Ridge",
    span: "lg:col-span-5",
  },
  {
    src: "/images/4.jpeg",
    alt: "A clear stream flowing over smooth rocks through a green valley",
    title: "Slow Water",
    place: "Netravati Valley",
    span: "lg:col-span-5",
  },
  {
    src: "/images/5.jpeg",
    alt: "Golden terraced farmland on a hillside at sunset",
    title: "Harvest Terraces",
    place: "Malenadu",
    span: "lg:col-span-7",
  },
  // {
  //   src: "/images/6.jpeg",
  //   alt: "A calm mirror-like mountain lake reflecting green hills and sky",
  //   title: "Still Mirror",
  //   place: "Highland Basin",
  //   span: "lg:col-span-12",
  // },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              Selected Work
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              Portraits of the wild.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            A gathering of still frames from years spent walking, waiting, and watching the light
            move across the land.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {shots.map((shot) => (
            <figure
              key={shot.title}
              className={`group relative overflow-hidden rounded-sm ${shot.span}`}
            >
              <img
                src={shot.src || "/placeholder.svg"}
                alt={shot.alt}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/70 to-transparent p-6">
                <span className="font-serif text-xl text-background">{shot.title}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-background/80">
                  {shot.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
