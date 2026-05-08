import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Oswald } from "next/font/google";
import "./globals.css";

// Casual handwritten — used for body, italics, and most UI text
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Upright handwritten — used for body text where Caveat is too cursive
const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: ["400"],
});

// Bold condensed display caps — for big section titles
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Advanced Automatons — Humanoid Robotics",
  description:
    "Redefining the human condition for a better tomorrow. ADAM is the world's first regular-issue humanoid platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${patrickHand.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
