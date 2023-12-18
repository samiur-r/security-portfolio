import React from "react";
import Image from "next/image";
import ContactForm from "@/sections/about-us/ContactForm";

const Investors = () => {
  return (
    <section className="my-12 px-5 container mx-auto flex flex-col gap-20">
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="xl:col-span-2 flex flex-col gap-8">
          <h2 className="font-glancyr font-bold text-3xl xl:text-5xl max-w-3xl mt-5">
            How to become an investor?
          </h2>
          <h3 className="text-xl xl:text-3xl font-glancyr">KEY TAKEAWAYS</h3>
          <p className="max-w-xl">
            The two main types of investors are institutional investors, who are
            professional investors who invest business funds on behalf of
            organizations, and retail investors, who are private investors who
            invest their personal money in select securities on their own
            accord.
            <br />
            <br />
            <b>To become an institutional investor</b>, earn at least a
            bachelor's degree in finance, economics or business and gain
            experience in a specialized area of investing, like real estate,
            stocks, venture capital or angel investing.
            <br />
            <br />
            <b>To become a retail investor</b>, study investment strategies and
            develop a targeted plan to build a portfolio that aligns with your
            financial interests and includes your preferred securities, like
            stocks, bonds and mutual funds.
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center xl:justify-start self-center">
          <Image
            src="/investor.svg"
            alt=""
            width={413}
            height={502}
            className="object-contain w-full max-w-lg"
          />
        </div>
      </div>
      <h3 className="text-xl xl:text-3xl font-glancyr">MESSAGE US</h3>
      <div className="py-16 border-t border-b">
        <ContactForm />
      </div>
    </section>
  );
};

export default Investors;
