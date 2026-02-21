import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Randi Tumbur Arjuna Lumbantoruan - Portfolio",
  description: "Mobile Developer | Flutter Enthusiast based in Jakarta, Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans min-h-screen selection:text-cyan-100 flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
