import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { ConsoleEasterEgg } from "@/components/console-easter-egg";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Claudio F. Souza",
    template: "%s — Claudio F. Souza",
  },
  description:
    "Engineer, builder, and AI practitioner. Designing agentic systems for humans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[var(--font-display)] antialiased`}
      >
        <ConsoleEasterEgg />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
