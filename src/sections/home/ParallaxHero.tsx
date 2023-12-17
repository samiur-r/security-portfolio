"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ParallaxHero = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState("translateY(0px)");
  const [secondOpacity, setSecondOpacity] = useState(0);
  const [secondTransform, setSecondTransform] = useState("translateY(20px)");
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let newHeight;

    setIsMobile(window.innerWidth < 1024);

    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        const scroll = window.scrollY;
        const minWidth = window.innerWidth <= 1024 ? 350 : 1100;
        const newWidth = Math.max(minWidth, window.innerWidth - scroll);
        const aspectRatio = window.innerHeight / window.innerWidth;
        newHeight = newWidth * aspectRatio;
        setHeight(newHeight);

        const maxScroll = 500; // Maximum scroll value for full fade
        const newOpacity = Math.max(0, 1 - scroll / maxScroll);
        const translateY = -scroll / 5;

        // Calculate opacity and transform for the second part
        const secondNewOpacity = Math.min(1, scroll / maxScroll);
        const secondTranslateY = Math.max(0, 20 - scroll / 25);

        setContainerStyle({
          width: `${newWidth}px`,
          height: `${newHeight}px`,
          transition: "all 300ms ease-in-out",
        });

        setOpacity(newOpacity);
        setTransform(`translateY(${translateY}px)`);
        setSecondOpacity(secondNewOpacity);
        setSecondTransform(`translateY(${secondTranslateY}px)`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        className="relative"
        style={{ height: isMobile ? "100vh" : "250vh" }}
      >
        <div className="h-screen sticky top-0 flex justify-center items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start container mx-auto z-30 px-5 xl:px-auto">
            {opacity !== 0 && (
              <>
                <h1
                  className="text-4xl mb-4 font-glancyr xl:text-7xl tracking-[5px] leading-10"
                  style={{ opacity, transform }}
                >
                  ACHIEVE <b>COMPLIANCE,</b>
                </h1>
                <h1
                  className="text-4xl font-glancyr xl:text-7xl tracking-[5px] leading-10"
                  style={{ opacity, transform }}
                >
                  STAY <b>SECURE,</b> Earn <b>TRUST.</b>
                </h1>

                <p className="my-8 max-w-2xl" style={{ opacity, transform }}>
                  In a world where cybersecurity is a paramount concern,
                  compliance, security, and trust are essential for businesses
                  today.  At SKELDUS, we focus on simplifying your journey to
                  achieve them efficiently and effectively.  So you can focus on
                  what you do best.
                </p>

                <button
                  className="bg-light-gray hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded-full shadow"
                  style={{ opacity, transform }}
                >
                  See it in action
                </button>
              </>
            )}
            {opacity === 0 && (
              <div
                className="flex flex-col justify-between w-full pt-5 relative"
                style={{ height: height }}
              >
                <h1
                  className="text-4xl font-glancyr xl:text-7xl tracking-[5px] leading-10"
                  style={{ opacity: secondOpacity, transform: secondTransform }}
                >
                  ACHIEVE <b>COMPLIANCE,</b>
                </h1>
                <div className="w-full flex justify-center">
                  <h1
                    className="font-glancyr xl:text-7xl tracking-[5px] leading-10 text-4xl"
                    style={{
                      opacity: secondOpacity,
                      transform: secondTransform,
                    }}
                  >
                    STAY
                    <br /> <b className="ml-32">SECURE,</b>
                  </h1>
                </div>
                <h1
                  className="text-4xl font-glancyr xl:text-7xl tracking-[5px] leading-10 w-full flex justify-end"
                  style={{ opacity: secondOpacity, transform: secondTransform }}
                >
                  Earn <b> TRUST.</b>
                </h1>
                <button
                  className="bg-light-gray hover:bg-gray-100 text-gray-800 py-2 px-8 border border-gray-400 rounded-full shadow absolute bottom-12"
                  style={{ opacity: secondOpacity, transform: secondTransform }}
                >
                  See it in action
                </button>
              </div>
            )}
          </div>
          <div
            className="flex w-screen h-screen relative overflow-hidden"
            style={{
              ...containerStyle,
            }}
          >
            <Image
              src="/hero_bg.png"
              alt="Background"
              layout="fill"
              id="backgroundImage"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
