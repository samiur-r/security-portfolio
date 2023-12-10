import Image from "next/image";

import Contact from "@/sections/Contact";
import Frameworks from "@/sections/Frameworks";
import Outcomes from "@/sections/Outcomes";
import ParallaxHero from "@/sections/ParallaxHero";
import Partners from "@/sections/Partners";
import Products from "@/sections/Products";
import Insights from "@/sections/Insights";
import Testimonials from "@/sections/Testimonials";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <section className="flex flex-col">
      {/* <Menu /> */}
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
      <div className="relative flex flex-col gap-20 mb-20 mt-20 md:mt-0">
        <div className="absolute right-0 top-0 -z-10">
          <Image
            src="/bg-design-2.png"
            width={939}
            height={1791}
            objectFit="cover"
            alt="contact"
          />
        </div>
        <Frameworks />
        <Testimonials />
        <Partners />
      </div>
      <Insights />
      <Contact />
    </section>
  );
}
