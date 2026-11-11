import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = { title: "About — Bintang Cafe", description: "A taste of Indonesia in Perth. Learn about Bintang Cafe in Victoria Park." };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top">
        <PageHero eyebrow="About Bintang Cafe" script="A taste of Bali in Perth" title="Warm hospitality, familiar flavours"
          text="An Indonesian café bringing comfort food and a friendly welcome to Victoria Park." />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
