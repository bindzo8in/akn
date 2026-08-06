import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import OnsiteVideoShowcase from "@/components/OnsiteVideoShowcase";
import Workflow from "@/components/Workflow";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Portfolio />
      <OnsiteVideoShowcase />
      <Workflow />
      <WhyChooseUs />
      <Partners />
      <FAQ />
      <Contact />
    </main>
  );
}
