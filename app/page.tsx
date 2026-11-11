import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import SignatureMenu from "@/components/sections/SignatureMenu";
import Promotions from "@/components/sections/Promotions";
import Gallery from "@/components/sections/Gallery";
import Visit from "@/components/sections/Visit";

export default function Page() {
  return (
    <>
      <Header />
      <main id="top"><Hero /><Story /><SignatureMenu /><Promotions /><Gallery /><Visit /></main>
      <Footer />
    </>
  );
}
