"use client"

import { useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

export function FilmShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="film" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-12 max-w-2xl">
        <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" />
          Motion
        </p>
        <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
          A film that breathes with the valley.
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Shot across a single turning season, our short film follows the rhythm of the hills — from
          the first mist of morning to the last gold of dusk.
        </p>
      </div>

      <div className="group relative overflow-hidden rounded-sm">
        <video
          ref={videoRef}
          poster="/images/video-poster.png"
          className="aspect-video w-full object-cover"
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause film" : "Play film"}
          className={`absolute inset-0 flex items-center justify-center transition-opacity ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <span className="absolute inset-0 bg-foreground/25" />
          <span className="relative flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105">
            {playing ? <Pause className="size-7" /> : <Play className="ml-1 size-7" />}
          </span>
        </button>

        <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 text-background">
          <span className="text-xs uppercase tracking-[0.2em]">Kashigudda — Turning Season</span>
          <span className="text-xs text-background/70">04:12</span>
        </div>
      </div>
    </section>
  )
}
