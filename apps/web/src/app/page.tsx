import Header from "@/marketing/components/header";
import ScrollToTop from "@/marketing/components/scroll-to-top";
import Hero from "@/marketing/sections/hero";
import Brands from "@/marketing/sections/brands";
import FunFact from "@/marketing/sections/fun-fact";
import CTA from "@/marketing/sections/cta";
import FAQ from "@/marketing/sections/faq";
import Contact from "@/marketing/sections/contact";
import Lines from "@/marketing/components/lines";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <FunFact />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <ScrollToTop />
      <Lines />
    </>
  );
}
