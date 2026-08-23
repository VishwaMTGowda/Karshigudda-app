"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ContactFooter() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary-foreground/70">
              <span className="h-px w-10 bg-accent" />
              Get in touch
            </p>
            <h2 className="max-w-md text-balance font-serif text-4xl font-light leading-tight lg:text-6xl">
              Let&apos;s wander somewhere green together.
            </h2>
            {/* <p className="mt-8 max-w-md text-pretty leading-relaxed text-primary-foreground/75">
              For commissions, prints, or expedition collaborations, send a note. We answer every
              message that finds its way to the hills.
            </p> */}

            {/* <div className="mt-12 space-y-2 text-primary-foreground/85">
              <p className="text-lg">hello@kashigudda.studio</p>
              <p className="text-lg">+91 8762165667</p>
              <p className="text-lg">+91 9448900910</p>
              <p className="text-lg">+91 8762066385</p>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
                Malenadu, Karnataka
              </p>
            </div> */}
          </div>

          <div className="lg:pl-10">
            <div className="mt-12 space-y-2 text-primary-foreground/85">
              <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary-foreground/70">
              <span className="h-px w-10 bg-accent" />
              Get More Information
            </p>
              <p className="text-lg">+91 8762165667</p>
              <p className="text-lg">+91 9448900910</p>
              <p className="text-lg">+91 8762066385</p>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60">
                Kashigudda,Chikkamagaluru, Karnataka.
              </p>
            </div>

            {/* {sent ? (
              <div className="flex h-full min-h-64 flex-col items-start justify-center rounded-sm border border-primary-foreground/20 p-8">
                <p className="font-serif text-2xl">Thank you.</p>
                <p className="mt-3 text-primary-foreground/75">
                  Your message is on its way. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-primary-foreground/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="resize-none rounded-sm border border-primary-foreground/25 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            )} */}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row sm:items-center">
          <span className="font-serif text-lg text-primary-foreground">Kashigudda</span>
          <span>&copy; {new Date().getFullYear()} Kashigudda All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

// function Field({
//   label,
//   name,
//   type,
//   placeholder,
// }: {
//   label: string
//   name: string
//   type: string
//   placeholder: string
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <label htmlFor={name} className="text-sm text-primary-foreground/70">
//         {label}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required
//         placeholder={placeholder}
//         className="rounded-sm border border-primary-foreground/25 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
//       />
//     </div>
//   )
// }
