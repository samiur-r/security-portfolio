"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "@/components/Menu";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <Menu
        isOpen={showMenu}
        handleSetShowMenu={setShowMenu}
        isMobile={isMobile}
      />
      <header
        className={`fixed top-0 left-0 right-0 h-24 p-4 ${
          isScrolled
            ? "bg-gradient-to-r from-black to-[#313D46] shadow-lg"
            : "bg-transparent"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex justify-between items-center h-full container mx-auto">
          <div className="flex-1">
            {isScrolled ? (
              <Image
                src="/logo_2.svg"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
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
              width={isMobile ? 40 : 60}
              height={isMobile ? 40 : 60}
              alt="bar_menu"
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
