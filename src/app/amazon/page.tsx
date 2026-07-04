import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { NAV_ITEMS_EN } from "@/components/site/nav-config";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import AmazonTimeline from "@/components/AmazonTimeline";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Offer from "@/components/Offer";
import About from "@/components/About";
import CTA from "@/components/CTA";
import CorkFountainStrip from "@/components/CorkFountainStrip";

export const metadata: Metadata = {
  title: "Amazon Competitive Intelligence — Cork Fountain",
  description:
    "ASIN-level competitor monitoring for Amazon brands. Built by a former Amazon EU Senior Brand Specialist. Walk into peak events with a written competitive read, not reactive scrambling.",
  alternates: { canonical: "/amazon" },
  openGraph: {
    title: "Amazon Competitive Intelligence — Cork Fountain",
    description:
      "ASIN-level competitor monitoring for Amazon brands, built by a former Amazon EU Senior Brand Specialist.",
    url: "/amazon",
    images: ["/og/amazon.svg"],
  },
};

export default function AmazonPage() {
  return (
    <div lang="en">
      <SiteNav items={NAV_ITEMS_EN} active="/amazon" ctaLabel="Book diagnostic" />
      <main>
        <Hero />
        <Pain />
        <AmazonTimeline />
        <Services />
        <Results />
        <Offer />
        <About />
        <CTA />
        <CorkFountainStrip />
      </main>
      <SiteFooter lang="en" />
    </div>
  );
}
