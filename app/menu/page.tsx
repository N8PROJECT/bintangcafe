import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import MenuBrowser from "@/components/MenuBrowser";

export const metadata: Metadata = { title: "Menu — Bintang Cafe", description: "Browse Indonesian favourites, soups, rice & mains and snacks at Bintang Cafe in Victoria Park, Perth." };

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="top">
        <PageHero eyebrow="Our Menu" script="Selamat makan" title="Discover our Indonesian favourites"
          text="From traditional Indonesian favourites to satisfying breakfast specials, discover something delicious on our menu." />
        <MenuBrowser />
      </main>
      <Footer />
    </>
  );
}
