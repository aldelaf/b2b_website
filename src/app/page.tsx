import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import ScrollSequence from "@/components/ScrollSequence";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Offer from "@/components/Offer";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";

export default function Home() {
  return (
    <>
      <CalEmbed />
      <Navigation />
      <main>
        <Hero />
        <Pain />
        <ScrollSequence />
        <Services />
        <Results />
        <Offer />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
