export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
Explore. Experience. Stay.          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
           Welcome to Kashigudda
          </h2>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover the beauty of Malenadu with Kashigudda — your gateway to the misty hills, lush forests, winding roads, and peaceful landscapes of Karnataka.

We provide reliable jeep services to the hills and scenic destinations of the Malenadu region, making it easier for you to explore places that are difficult to reach by regular vehicles. Whether you're looking for an adventurous hill journey, a peaceful escape into nature, or a memorable trip with family and friends, our local jeep service is ready to take you there.
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            After a day of exploring the hills, relax and enjoy a comfortable stay at our guesthouse, surrounded by the calm and natural beauty of Malenadu.
          </p>
<dl className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
  {[
    { value: "Resort Facility", label: "" },
    { value: "Vehicle Facility", label: "" },
    { value: "Tour Guidance", label: "" },
  ].map((stat) => (
    <div key={stat.value}>
      <dt className="font-serif text-2xl font-light text-primary">
        {stat.value}
      </dt>
      {stat.label && (
        <dd className="mt-2 text-sm leading-snug text-muted-foreground">
          {stat.label}
        </dd>
      )}
    </div>
  ))}
</dl>
        </div>

       <div className="relative">
  <img
    src="/images/3.jpeg"    alt="Dewdrops resting on green fern leaves in soft morning light"
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
