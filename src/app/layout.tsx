import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${inter.variable} bg-slate-50 text-slate-900 antialiased`}>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
