import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClearPath ReadyScore",
    template: "%s | ClearPath ReadyScore",
  },
  description:
    "Executive-grade DR readiness clarity. ReadyScore turns assumptions into evidence-backed, board-safe decisions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearpath-readyscore-site.vercel.app"),
  openGraph: {
    title: "ClearPath ReadyScore",
    description:
      "Executive DR readiness — evidence-backed, board-safe. Decision clarity for funding and sequencing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
