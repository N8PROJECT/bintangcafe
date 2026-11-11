import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Caveat } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-display" });
const script = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--f-script" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--f-body" });

export const metadata: Metadata = {
  title: "Bintang Cafe — Indonesian food in Victoria Park, Perth",
  description: "A taste of Indonesia in Perth. Indonesian favourites, breakfast specials and welcoming café hospitality in Victoria Park.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
