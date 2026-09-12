import type { Metadata } from "next";
import { Chivo, Lora } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Take action for federal disaster recovery | Altagether",
  description:
    "Help Los Angeles fire survivors get the federal recovery funding they need. Find your members of Congress and take action.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${chivo.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
