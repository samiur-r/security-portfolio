"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-24 p-4 ${
        isScrolled
          ? "bg-gradient-to-r from-black to-[#313D46] shadow-lg"
          : "bg-transparent"
      } transition-all duration-300 ease-in-out z-20`}
    >
      <div className="flex justify-between items-center h-full container mx-auto">
        <div className="logo">
          {" "}
          {isScrolled ? (
            <Image
              src="/logo_2.svg"
              width={60}
              height={60}
              alt="Logo"
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/logo.svg"
              width={147}
              height={34}
              alt="Logo"
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="menu-icon">
          <Image
            src="/bar_menu.svg"
            width={60}
            height={60}
            alt="bar_menu"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
