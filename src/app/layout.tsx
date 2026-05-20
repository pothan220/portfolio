import type { Metadata } from "next";
import { Syne, DM_Mono, Lora } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const mono = DM_Mono({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-mono" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Pothan Prathap Puppala — Senior Software Engineer",
  description: "Full-Stack Engineer · TypeScript · React · Node.js · AWS · Leicester, UK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${mono.variable} ${lora.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
