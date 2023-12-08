import Image from "next/image";

import Contact from "@/sections/Contact";
import Frameworks from "@/sections/Frameworks";
import Outcomes from "@/sections/Outcomes";
import ParallaxHero from "@/sections/ParallaxHero";
import Partners from "@/sections/Partners";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <section className="flex flex-col">
      <ParallaxHero />
      <div className="relative flex flex-col gap-20 mb-20 mt-20 md:mt-0">
        <Products />
        <Outcomes />
        <div className="absolute right-0 top-0 -z-10 opacity-50">
          <Image
            src="/bg-design.svg"
            width={997}
            height={1347}
            objectFit="cover"
            alt="contact"
          />
        </div>
      </div>
      <Frameworks />
      <Partners />
      <Contact />
    </section>
  );
}
