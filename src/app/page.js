import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import Tarif from "./dashboard/tarif/page";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <Tarif />

      <Footer />
    </main>
  );
}
