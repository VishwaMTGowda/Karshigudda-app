"use client"

import { useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import AdBanner from "@/components/AdBanner"

export function FilmShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const toggle = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
      } catch {
        // Ignore AbortError: play() was interrupted by a pause().
      }
    } else {
      video.pause()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section
      id="film"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" />
          Motion
        </p>

        <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
          A film that breathes with the valley.
        </h2>

        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Shot across a single turning season, our short film follows the rhythm
          of the hills — from the first mist of morning to the last gold of dusk.
        </p>
      </div>

      <div className="group relative overflow-hidden rounded-sm">
        <video
          ref={videoRef}
          poster="/images/video-poster.png"
          className="aspect-video w-full object-cover"
          playsInline
          preload="none"
          muted
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source
            src="/images/3_v2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Play / Pause button */}
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
            {playing ? (
              <Pause className="size-7" />
            ) : (
              <Play className="ml-1 size-7" />
            )}
          </span>
        </button>

        {/* Mute / Unmute button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute film" : "Mute film"}
          className="absolute bottom-5 right-5 z-10 flex size-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-105"
        >
          {muted ? (
            <VolumeX className="size-5" />
          ) : (
            <Volume2 className="size-5" />
          )}
        </button>

        <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 text-background">
          <span className="text-xs uppercase tracking-[0.2em]">
            Karshigudda — Turning Season
          </span>
          {/* <span className="text-xs text-background/70">04:12</span> */}
        </div>
      </div>

      <AdBanner />
    </section>
  )
}