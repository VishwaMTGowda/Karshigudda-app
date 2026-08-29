import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://karshiguddahomestay.com"),
  title: {
    default: "Karshigudda Homestay & Jeep Service | Malenadu",
    template: "%s | Karshigudda",
  },
  description:
    "Karshigudda offers comfortable homestay facilities, jeep services to the hills, and local tour guidance in the beautiful Malenadu region of Karnataka.",
  keywords: [
    "Karshigudda",
    "Karshigudda Homestay",
    "Karshigudda Jeep Service",
    "Malenadu Homestay",
    "Malenadu Jeep Service",
    "Malenadu Tourism",
    "Karnataka Hill Jeep Service",
    "Malenadu Guest House",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Karshigudda Homestay & Jeep Service",
    description:
      "Explore the hills of Malenadu with Karshigudda — homestay, jeep services and local tour guidance.",
    url: "https://karshiguddahomestay.com",
    siteName: "Karshigudda",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}