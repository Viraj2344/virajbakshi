import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorTrail from "@/components/CursorTrail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viraj Bakshi — Robotics & HRI Engineer",
  description:
    "Portfolio of Viraj Bakshi: robotics, human-robot interaction, computer vision, and engineering automation. Multimodal control systems research, industry experience, and freelance services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
