import Image from "next/image";

import Asset from "@/sections/product/Asset";
import Compliance from "@/sections/product/Compliance";
import Hero from "@/sections/product/Hero";
import Integrations from "@/sections/product/Integrations";
import Platforms from "@/sections/product/Platforms";
import Security from "@/sections/product/Security";
import Trust from "@/sections/product/Trust";

export default function Home() {
  return (
    <section className="flex flex-col gap-20 mb-20">
      <Hero />
      <div className="relative flex flex-col gap-20">
        <Platforms />
        <Compliance />
        <div className="absolute right-0 top-0 -z-10">
          <Image
            src="/product-bg-1.png"
            width={706}
            height={2302}
            alt="contact"
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-20">
        <Security />
        <Trust />
        <Asset />
        <div className="absolute right-0 top-0 -z-10">
          <Image
            src="/product-bg-2.png"
            width={816}
            height={2302}
            alt="contact"
            className="object-cover"
          />
        </div>
      </div>
      <Integrations />
    </section>
  );
}
