import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollSequence from "@/components/ScrollSequence";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
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
        <ScrollSequence />
        <Services />
        <Process />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
