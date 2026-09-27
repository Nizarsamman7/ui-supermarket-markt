import type { Metadata } from "next";
import { Nunito, Source_Serif_4 } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Source_Serif_4({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = Nunito({ subsets: ["latin"], variable: "--font-body", weight: ["500", "700", "800"] });

export const metadata: Metadata = {
  title: { default: "Groenmarkt", template: "%s · Groenmarkt" },
  description: "Full neighbourhood supermarket website: aisles, weekly deals, bakery, produce, delivery, catering, and jobs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
