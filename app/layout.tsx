import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zoute Developers — Web & Software Agency",
  description:
    "Modern web & software agency delivering ERP, CRM, apps, and websites. Fast, accessible, and SEO-friendly builds with Next.js.",
  generator: "v0.app",
  keywords: [
    "web development agency",
    "ERP systems",
    "CRM",
    "software applications",
    "web applications",
    "websites",
    "portfolios",
    "Next.js",
    "Tailwind CSS",
    "Zoute Developers",
  ],
  authors: [{ name: "Zoute Developers" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Zoute Developers",
    title: "Zoute Developers — Web & Software Agency",
    description: "We build ERP/CRM systems, apps, and websites — fast, accessible, and SEO-friendly.",
    url: "/",
    images: [
      {
        url: "/open-graph-image-for-zoute-developers-agency.jpg",
        width: 1200,
        height: 630,
        alt: "Zoute Developers — modern web & software agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoute Developers — Web & Software Agency",
    description: "ERP/CRM, apps, and websites. Fast, accessible, SEO-friendly.",
    images: "/twitter-card-image-for-zoute-developers-agency.jpg",
    // Using the same handle for visibility, even though the platform is Instagram
    creator: "@zoute_developers",
    site: "@zoute_developers",
  },
  other: {
    "instagram:handle": "@zoute_developers",
    "instagram:url": "https://instagram.com/zoute_developers",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
