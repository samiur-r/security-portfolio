import Image from "next/image";

import Asset from "@/sections/product/Asset";
import Compliance from "@/sections/product/Compliance";
import Hero from "@/sections/product/Hero";
import Integrations from "@/sections/product/Integrations";
import Platforms from "@/sections/product/Platforms";
import Security from "@/sections/product/Security";
import Trust from "@/sections/product/Trust";
import Modal from "@/components/Modal";
import ProductSection from "@/components/ProductSection";

export default function Product() {
  return (
    <section className="flex flex-col gap-20 my-12">
      <Modal autoOpenDelay={3000}>
        <ProductSection
          textDark
          subHeadline="SKELDUS Security"
          headline="Secure Your Business"
          description="SKELDUS Secure empowers you with efficient and round-the-clock access control management and continuous monitoring for robust security, to stay secure 24/7 with peace of mind."
          imageUrl="security.svg"
          data={[
            {
              id: 1,
              imageUrl: "dashboard.svg",
              title: "ACCESS CONTROLS, TAKE CHARGE OF YOUR SYSTEM",
              description:
                "Are you concerned about who has access of your system? With SKELDUS, manage user access and ensure only authorized individuals enter, while preventing unauthorized users minimizing risks and enhancing security.",
              topText: "01",
            },
            {
              id: 2,
              imageUrl: "dashboard.svg",
              title: "ACCESS CONTROLS, TAKE CHARGE OF YOUR SYSTEM 2",
              description:
                "2 Are you concerned about who has access of your system? With SKELDUS, manage user access and ensure only authorized individuals enter, while preventing unauthorized users minimizing risks and enhancing security.",
              topText: "02",
            },
          ]}
        />
      </Modal>
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
