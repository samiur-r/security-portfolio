import Card from "@/components/Card";
import Contact from "@/sections/Contact";
import Frameworks from "@/sections/Framwworks";
import ParallaxHero from "@/sections/ParallaxHero";
import Partners from "@/sections/Partners";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <section className="flex flex-col">
      <ParallaxHero />
      <Products />
      <Partners />
      <Frameworks />
      <Contact />
    </section>
  );
}
