import Contact from "@/sections/Contact";
import ParallaxHero from "@/sections/ParallaxHero";

export default function Home() {
  return (
    <section className="flex flex-col">
      <ParallaxHero />
      <Contact />
    </section>
  );
}
