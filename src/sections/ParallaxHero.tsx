"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ParallaxHero = () => {
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const newWidth = Math.max(1050, window.innerWidth - scroll);
      const aspectRatio = window.innerHeight / window.innerWidth;
      const newHeight = newWidth * aspectRatio;

      setContainerStyle({
        width: `${newWidth}px`,
        height: `${newHeight}px`,
        transition: "all 300 ease-in-out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div style={{ height: "300vh", position: "relative" }}>
        <div
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
          }}
          className="flex justify-center items-center bg-gradient-to-r from-black to-[#313D46]"
        >
          <div
            className="flex w-screen h-screen relative overflow-hidden"
            style={{
              ...containerStyle,
            }}
          >
            <Image
              src="/hero_bg.svg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              id="backgroundImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
