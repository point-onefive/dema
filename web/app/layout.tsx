import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dema.app"),
  title: {
    default: "Dema — a digital executor for the life you built",
    template: "%s · Dema",
  },
  description:
    "When something happens, your family shouldn't be left guessing. Dema organizes the digital pieces of life that matter and gives the right person the right access at the right time.",
  openGraph: {
    title: "Dema — a digital executor for the life you built",
    description:
      "Securely organize the digital pieces of your life so trusted loved ones have a guide when it matters most.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dema — a digital executor for the life you built",
    description:
      "Securely organize the digital pieces of your life so trusted loved ones have a guide when it matters most.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
