"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const menuItems = [
  { name: "HOME", link: "/", subItems: [] },
  { name: "PRODUCT", link: "/product", subItems: [] },
  {
    name: "FRAMEWORKS",
    subItems: [{ name: "OUR STORY", link: "/our-story" }],
  },
  { name: "ABOUT US", subItems: [] },
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#313D46] ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
      style={{ backgroundImage: `url(/menu-bg.svg)`, backgroundSize: "cover" }}
    >
      <div className="container flex flex-col mx-auto gap-5">
        <header className="h-24 p-4 w-full border-b border-[5E7E8]">
          <div className="flex justify-between items-center h-full">
            <div>
              <Image
                src="logo_2_white.svg"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
                alt="Logo"
                className="cursor-pointer"
              />
            </div>
            <div className="menu-icon">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Image
                  src="/close-menu-btn.svg"
                  width={isMobile ? 40 : 60}
                  height={isMobile ? 40 : 60}
                  alt="bar_menu"
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
        </header>

        <div className="flex gap-5">
          {/* Left box with menu items */}
          <div className="flex-1 h-full overflow-auto p-5 border-r border-[#E5E7E8]">
            <nav>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.name} className="mb-4">
                    <button
                      className="text-white hover:underline"
                      onClick={() => setActiveMenu(item.name)}
                    >
                      {item.name}
                      {item.subItems && " ->"}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right box with sub-menu items */}
          <div className="flex-1 h-full overflow-auto p-5">
            <nav>
              <ul>
                {menuItems
                  .find((item) => item.name === activeMenu)
                  ?.subItems.map((subItem) => (
                    <li key={subItem.name} className="mb-4">
                      <a
                        href={subItem.link}
                        className="text-white hover:underline"
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
}
