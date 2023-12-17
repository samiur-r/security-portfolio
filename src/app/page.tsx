import Image from "next/image";

import Frameworks from "@/sections/home/Frameworks";
import Outcomes from "@/sections/home/Outcomes";
import ParallaxHero from "@/sections/home/ParallaxHero";
import Partners from "@/sections/home/Partners";
import Products from "@/sections/home/Products";
import Insights from "@/sections/home/Insights";
import Testimonials from "@/sections/home/Testimonials";

export default function Home() {
  return (
    <section className="flex flex-col">
      <ParallaxHero />
      <div className="relative flex flex-col gap-20 xl:mb-20">
        <Products />
        <Outcomes />
        <div className="absolute right-0 top-0 -z-10 opacity-50">
          <Image
            src="/bg-design.png"
            width={997}
            height={1347}
            alt="contact"
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-20 mb-20 mt-20 xl:mt-0">
        <div className="absolute right-0 top-0 -z-10">
          <Image
            src="/bg-design-2.png"
            width={939}
            height={1791}
            alt="contact"
            className="object-contain"
          />
        </div>
        <Frameworks showCTA/>
        <Testimonials />
        <Partners />
      </div>
      <Insights />
    </section>
  );
}
