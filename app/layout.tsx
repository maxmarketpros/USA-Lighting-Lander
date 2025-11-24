import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for USA Lighting landing page with SEO optimization
export const metadata: Metadata = {
  title: "Professional Christmas Light Installation | USA Lighting | Central Indiana",
  description:
    "Professional Christmas light installation in Central Indiana. Custom designs, safe installation, and hassle-free removal. Serving Indianapolis and surrounding areas. Call (317) 495-4534 for a free quote.",
  generator: "v0.app",
  keywords: [
    "Christmas lights installation",
    "holiday lighting Indianapolis",
    "Christmas light installation Central Indiana",
    "professional Christmas lights",
    "LED Christmas lights",
    "roofline lighting",
    "outdoor holiday decorations",
    "Christmas light removal",
    "Indianapolis Christmas lights",
    "USA Lighting",
  ],
  authors: [{ name: "USA Lighting" }],
  creator: "USA Lighting",
  publisher: "USA Lighting",
  metadataBase: new URL("https://usalighting.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Christmas Light Installation | USA Lighting",
    description:
      "Transform your home with professional Christmas light installation. Custom designs, safe installation, and hassle-free removal in Central Indiana.",
    url: "https://usalighting.com",
    siteName: "USA Lighting",
    images: [
      {
        url: "/images/2.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful Christmas light installation by USA Lighting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Christmas Light Installation | USA Lighting",
    description:
      "Transform your home with professional Christmas light installation in Central Indiana. Get a free quote today!",
    images: ["/images/2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
