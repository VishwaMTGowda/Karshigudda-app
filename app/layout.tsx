import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karshiguddahomestay.com"),

  title: {
    default: "Karshigudda Homestay & Jeep Service | Malenadu",
    template: "%s | Karshigudda",
  },

  description:
    "Karshigudda Homestay offers comfortable stays, jeep services to the hills, and local tour guidance in the beautiful Malenadu region of Karnataka.",

  keywords: [
    "Karshigudda",
    "Karshigudda Homestay",
    "Karshigudda Jeep Service ",
    "kalasa",
    "kalasa Tourism",
    "kalasa homestay",
    "Karsigudda trekking Service",
    "Malenadu Tourism",
    "Kalasa Hills",
    "Karnataka Homestay",
    "Karnataka Hill Jeep Service",
    "Karshigudda Trekking ",
  ],

  authors: [{ name: "Karshigudda" }],
  creator: "Vishwa M.T",
  publisher: "Vishwa M.T",

  alternates: {
    canonical: "https://karshiguddahomestay.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://karshiguddahomestay.com",
    siteName: "Karshigudda",
    title: "Karshigudda Homestay & Jeep Service | Malenadu",
    description:
      "Stay close to nature and explore the hills of Malenadu with Karshigudda Homestay, Jeep Service and local tour guidance.",
    images: [
      {
        url: "/gallery-river.png",
        width: 1200,
        height: 630,
        alt: "Karshigudda Homestay and Jeep Service in Malenadu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karshigudda Homestay & Jeep Service",
    description:
      "Homestay, hill jeep services and local tour guidance in Malenadu, Karnataka.",
    images: ["/gallery-river.png"],
  },

  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link
    rel="icon"
    type="image/png"
    sizes="612x512"
    href="icon.png"
  />
</head>
      <body>{children}</body>
    </html>
  );
}
