"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "HOME", link: "/", subItems: [] },
  { name: "PRODUCT", link: "/product", subItems: [] },
  {
    name: "FRAMEWORKS",
    subItems: [
      { name: "OVERVIEW", link: "/frameworks" },
      { name: "STANDARDS", link: "/frameworks/standards" },
      { name: "REGULATIONS", link: "/frameworks/regulation" },
      {
        name: "CUSTOMIZED FRAMEWORKS",
        link: "/frameworks/customized-frameworks",
      },
    ],
  },
  {
    name: "RESOURCES",
    subItems: [
      { name: "BLOG", link: "/resources" },
      { name: "GUIDES", link: "/resources/guides" },
      { name: "CLIENT STORIES", link: "/resources/client-stories" },
      { name: "PARTNERSHIPS", link: "/resources/partnerships" },
      { name: "GLOSSARY", link: "/resources/glossary" },
      { name: "EVENTS", link: "/resources/events" },
    ],
  },
  {
    name: "ABOUT US",
    subItems: [
      { name: "OUR STORIES", link: "/about-us" },
      { name: "CAREERS", link: "/about-us/careers" },
      { name: "INVESTORS", link: "/about-us/investors" },
      { name: "PRESS", link: "/about-us/press" },
    ],
  },
];

type NavigationProps = {
  isOpen: boolean;
  isMobile: boolean;
  handleSetShowMenu: Dispatch<SetStateAction<boolean>>;
};

const Navigation: React.FC<NavigationProps> = ({ isOpen, isMobile, handleSetShowMenu }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const findActiveMenu = () => {
      const activeItem = menuItems.find((item) => {
        if (item.link === pathname) return true;
        return item.subItems.some((subItem) => subItem.link === pathname);
      });

      if (activeItem) {
        setActiveMenu(activeItem.name);
      }
    };

    findActiveMenu();
  }, [pathname]);

  const handleMenuItemClick = (itemName: string, itemLink?: string) => {
    setActiveMenu(itemName);
    setHoveredMenu(null);
    if (itemLink) {
      router.push(itemLink);
      handleSetShowMenu(false);
    }
  };

  const handleMenuItemHover = (itemName: string) => {
    setHoveredMenu(itemName);
  };

  const getDisplayMenu = () => {
    if (hoveredMenu) return hoveredMenu;
    return activeMenu;
  };

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
            <Link href="/" onClick={() => handleSetShowMenu(false)}>
              <Image
                src="/logo_2_white.svg"
                width={isMobile ? 40 : 60}
                height={isMobile ? 40 : 60}
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
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

        <div className="grid grid-cols-2 gap-2">
          <div className="h-full p-5">
            <nav className="border-r border-light-gray pr-2 xl:pr-5">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.name} className="mb-6 relative">
                    <button
                      className={`flex w-full gap-2 items-center font-glancyr xl:text-4xl xl:tracking-widest ${
                        activeMenu === item.name ? "font-bold" : ""
                      } hover:font-bold`}
                      onClick={() => handleMenuItemClick(item.name, item.link)}
                      onMouseEnter={() => handleMenuItemHover(item.name)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      {activeMenu === item.name && (
                        <div className="absolute -ml-4 xl:-ml-6 -mt-1 xl:top-[50%] xl:transform xl:translate-y-[-50%]">
                          <Image
                            src="/ellipse.svg"
                            alt=""
                            width={isMobile ? 10 : 15}
                            height={isMobile ? 10 : 15}
                          />
                        </div>
                      )}
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
                  .find((item) => item.name === getDisplayMenu())
                  ?.subItems.map((subItem) => (
                    <li key={subItem.name} className="mb-4">
                      <button
                        className="font-glancyr xl:text-4xl tracking-widest"
                        onClick={() =>
                          handleMenuItemClick(subItem.name, subItem.link)
                        }
                      >
                        {subItem.name}
                      </button>
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

export default Navigation;
