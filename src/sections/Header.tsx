"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPageTitle, setShowPageTitle] = useState<undefined | boolean>(
    undefined
  );
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") setShowPageTitle(true);
    else setShowPageTitle(false);
  }, [pathname]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parsePathName = (path: string) => {
    let afterFirstSlash = path.slice(path.indexOf("/") + 1);

    if (afterFirstSlash.includes("/"))
      return afterFirstSlash.slice(0, afterFirstSlash.indexOf("/")).toUpperCase();
    else return afterFirstSlash.toUpperCase();
  };

  return (
    <section>
      <Navigation
        isOpen={showMenu}
        handleSetShowMenu={setShowMenu}
        isMobile={isMobile}
      />
      <header
        className={`fixed top-0 left-0 right-0 h-24 p-4 ${
          isScrolled || showPageTitle
            ? "bg-gradient-to-r from-black to-dark-blue shadow-lg"
            : "bg-transparent"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex justify-between items-center h-full container mx-auto">
          <div>
            {pathname && showPageTitle !== undefined && (
              <Link href="/">
                {isScrolled || showPageTitle ? (
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
              </Link>
            )}
          </div>
          {showPageTitle && (
            <div className="font-glancyr text-xl lg:text-3xl">
              {parsePathName(pathname)}
            </div>
          )}
          <div>
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
