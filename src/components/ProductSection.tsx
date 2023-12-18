import React from "react";
import Image from "next/image";

import ProductSlider, { Product } from "@/components/ProductSlider";
import SectionHeader from "@/components/SectionHeader";

type ProductProps = {
  subHeadline: string;
  headline: string;
  description: string;
  imageUrl?: string;
  data: Product[];
  textDark?: boolean;
};

const ProductSection: React.FC<ProductProps> = ({
  subHeadline,
  headline,
  description,
  imageUrl,
  data,
  textDark,
}) => {
  return (
    <section className="mx-auto container px-5 py-5">
      <div className="flex flex-col xl:flex-row gap-10">
        {imageUrl && (
          <div className="order-1 xl:order-2 flex-1 flex justify-center items-center">
            <Image src={imageUrl} width={150} height={150} alt="" />
          </div>
        )}
        <div
          className={`flex flex-col gap-8 flex-1 order-2 xl:order-1 max-w-2xl ${
            textDark && "text-dark-blue"
          }`}
        >
          <SectionHeader subHeadline={subHeadline} headline={headline} />
          <p className="">{description}</p>
        </div>
      </div>
      <ProductSlider products={data} />
    </section>
  );
};

export default ProductSection;
