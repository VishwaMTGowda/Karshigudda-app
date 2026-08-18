export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            The Studio
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
            We work slowly, the way the land does.
          </h2>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            Named for the hills we grew up beneath, Kashigudda is a small studio devoted to the
            landscapes that shape us. We photograph and film wild places with patience — waiting for
            the fog to lift, the light to turn, the river to still.
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every frame is an invitation to slow down and remember that we belong to something older
            and greener than ourselves.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { value: "12+", label: "Years in the field" },
              { value: "80", label: "Landscapes documented" },
              { value: "4", label: "Continents explored" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-4xl font-light text-primary">{stat.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src="/images/about-detail.png"
            alt="Dewdrops resting on green fern leaves in soft morning light"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-sm bg-primary p-6 text-primary-foreground sm:block">
            <p className="font-serif text-lg leading-snug">
              &ldquo;The mountain does not hurry, and yet everything is accomplished.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
