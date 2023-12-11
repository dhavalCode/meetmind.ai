import Header from "@/marketing/components/header";
import ScrollToTop from "@/marketing/components/scroll-to-top";
import Hero from "@/marketing/sections/hero";
import Brands from "@/marketing/sections/brands";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Brands />
      </main>
      <ScrollToTop />
    </>
  );
}
