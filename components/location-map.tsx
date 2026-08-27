"use client"

import { useEffect, useRef } from "react"
import type { Map as LeafletMap } from "leaflet"

// Karshigudda sits in the Malenadu highlands of the Western Ghats, Karnataka.
const CENTER: [number, number] = [13.282949, 75.346820]
const LOCATIONS: { name: string; place: string; coords: [number, number] }[] = [
  { name: "The Studio", place: "Karshigudda ", coords: [13.282949, 75.2295] },
  { name: "First Light", place: "Meruthi gudda", coords: [13.2897674, 75.36381] },
  { name: "Slow Water", place: "Netravati Valley", coords: [13.1802, 75.1024] },
  { name: "Harvest Terraces", place: "Kyatanmakki View Point", coords: [13.2669797, 75.2721491] },
]

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      const L = (await import("leaflet")).default
      if (cancelled || !containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, {
        center: CENTER,
        zoom: 10,
        scrollWheelZoom: false,
        attributionControl: true,
      })
      mapRef.current = map

      // Muted, earthy Carto tiles that complement the natural palette.
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(map)

      LOCATIONS.forEach((loc, i) => {
        const isStudio = i === 0
        const icon = L.divIcon({
          className: "kg-marker",
          html: `<span class="kg-marker-dot${isStudio ? " kg-marker-dot--studio" : ""}"></span>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        })
        L.marker(loc.coords, { icon })
          .addTo(map)
          .bindPopup(
            `<strong class="kg-popup-title">${loc.name}</strong><span class="kg-popup-place">${loc.place}</span>`,
          )
      })
    }

    init()

    return () => {
      cancelled = true
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <section id="location" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              Where We Work
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground lg:text-5xl">
              Rooted in the Western Ghats.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Our studio and the landscapes we return to lie across the misted hills of Malenadu.
            Explore the map to find the places behind the frames.
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-border">
          <div
            ref={containerRef}
            className="h-[420px] w-full lg:h-[520px]"
            role="application"
            aria-label="Map showing Karshigudda studio and featured landscape locations in the Western Ghats"
          />
        </div>
      </div>
    </section>
  )
}
