import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import ResellerCTA from "@/components/ResellerCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Products />
      <Brands />
      <ResellerCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
