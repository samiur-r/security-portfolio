"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

const menuItems = [
  { name: "HOME", link: "/", subItems: [] },
  { name: "PRODUCT", link: "/product", subItems: [] },
  {
    name: "FRAMEWORKS",
    subItems: [{ name: "OUR STORY", link: "/our-story" }],
  },
  {
    name: "RESOURCES",
    subItems: [{ name: "OUR STORY", link: "/our-story" }],
  },
  { name: "ABOUT US", subItems: [] },
];

type MenuProps = {
  isOpen: boolean;
  isMobile: boolean;
  handleSetShowMenu: Dispatch<SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ isOpen, isMobile, handleSetShowMenu }) => {
  const [activeMenu, setActiveMenu] = useState<any>(null);

  return (
    <div
      className={`fixed inset-0 z-50 bg-dark-blue transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundImage: `url(/menu-bg.svg)`, backgroundSize: "cover" }}
    >
      <div className="container flex flex-col mx-auto gap-5">
        <header className="h-24 p-4 w-full border-b border-[5E7E8]">
          <div className="flex justify-between items-center h-full">
            <div>
              <Image
                src="/logo_2_white.svg"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
                alt="Logo"
                className="cursor-pointer"
              />
            </div>
            <button onClick={() => handleSetShowMenu(false)}>
              <Image
                src="/close-menu-btn.svg"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
                alt="bar_menu"
                className="cursor-pointer"
              />
            </button>
          </div>
        </header>

        <div className="flex gap-2">
          <div className="h-full p-5">
            <nav className="border-r border-light-gray pr-2 lg:pr-5">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.name} className="mb-6">
                    <button
                      className="flex w-full gap-2 items-center font-glancyr text-lg lg:text-4xl hover:underline lg:tracking-widest"
                      onClick={() => setActiveMenu(item.name)}
                    >
                      {item.name}
                      {item.subItems.length > 0 && (
                        <Image
                          src="/Arrow_right_light.svg"
                          alt=""
                          width={isMobile ? 20 : 50}
                          height={isMobile ? 20 : 50}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-5 items-center mt-10">
              <Image src="/instagram.svg" width={40} height={40} alt="" />
              <Image src="/linkedin.svg" width={40} height={40} alt="" />
              <Image src="/youtube.svg" width={40} height={40} alt="" />
            </div>
          </div>

          <div className="h-full overflow-auto p-2">
            <nav>
              <ul>
                {menuItems
                  .find((item) => item.name === activeMenu)
                  ?.subItems.map((subItem) => (
                    <li key={subItem.name} className="mb-4">
                      <a
                        href={subItem.link}
                        className="font-glancyr text-lg lg:text-4xl tracking-widest"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
