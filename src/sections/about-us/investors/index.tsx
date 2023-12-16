import React from "react";
import Image from "next/image";
import KeyCard from "@/components/KeyCard";
import Card from "@/components/Card";
import ContactForm from "./ContactForm";

const insights = [
  {
    id: 1,
    headline: "2023",
    bodyText: "Founded",
    backgroundColor: "dark-blue",
    topImg: { url: "insight-1.svg", width: 45, height: 60 },
  },
  {
    id: 2,
    headline: "40+",
    bodyText: "Employees",
    backgroundColor: "bright-orange",
    topImg: { url: "insight-2.svg", width: 53, height: 61 },
  },
  {
    id: 3,
    headline: "120+",
    bodyText: "Integrations",
    backgroundColor: "light-blue",
    topImg: { url: "insight-3.svg", width: 56, height: 53 },
  },
  {
    id: 4,
    headline: "$M",
    bodyText: "In funding",
    backgroundColor: "black",
    topImg: { url: "insight-4.svg", width: 64, height: 64 },
  },
];

const promises = [
  {
    id: 1,
    topImageSrc: "/promise-1.svg",
    headline: "TRANSPARENCY",
    bodyText:
      "At SKELDUS, transparency is not just a principle; it's the genuine way we build trust at every turn. We are committed to ethical and honest practices in everything we do. ",
  },
  {
    id: 2,
    topImageSrc: "/promise-2.svg",
    headline: "SIMPLICITY",
    bodyText:
      "Compliance may seem complex, but with SKELDUS, simplicity reigns. Our straightforward approach ensures that compliance is not a daunting task for you.",
  },
  {
    id: 3,
    topImageSrc: "/promise-3.svg",
    headline: "AUTOMATION",
    bodyText:
      "Compliance may seem complex, but with SKELDUS, simplicity reigns. Our straightforward approach ensures that compliance is not a daunting task for you.",
  },
];

const Investors = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <h2 className="font-glancyr font-bold text-3xl lg:text-5xl max-w-3xl mt-5">
            How to become an investor?
          </h2>
          <h3 className="text-xl lg:text-3xl font-glancyr">KEY TAKEAWAYS</h3>
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
        <div className="mt-16 lg:mt-0 flex items-center justify-center lg:justify-start">
          <Image
            src="investor.svg"
            alt=""
            width={413}
            height={502}
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-xl lg:text-3xl font-glancyr">MESSAGE US</h3>
      <div className="py-16 border-t border-b">
        <ContactForm />
      </div>
    </section>
  );
};

export default Investors;
