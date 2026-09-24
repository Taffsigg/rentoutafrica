import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rentout.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rentout — Find a home. Rent out yours. Just WhatsApp.",
  description: "Find your next home or rent out your property through a simple WhatsApp conversation. No app downloads. No complicated forms. Just WhatsApp.",
  applicationName: "Rentout",
  manifest: "/site.webmanifest",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg", apple: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, title: "Find a home. Rent out yours. Just WhatsApp.", description: "Property search and listings, made as simple as a conversation.", siteName: "Rentout", images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Rentout: Find a home. Rent out yours. Just WhatsApp." }] },
  twitter: { card: "summary_large_image", title: "Rentout — Rental made conversational", description: "Find your next home or rent out your property through WhatsApp.", images: ["/og-image.svg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
