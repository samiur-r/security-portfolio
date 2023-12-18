import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-blue text-white pt-8 px-2 xl:pt-16 relative overflow-hidden">
      <Link href="/">
        <Image
          src="/footer-bg-logo.svg"
          width={675}
          height={675}
          alt=""
          className="absolute top-0 z-10"
        />
      </Link>
      <div className="container mx-auto flex flex-col xl:flex-row gap-5 md:gap-0 items-center xl:items-start relative">
        <div className="flex-1 flex items-center flex-col mb-8 xl:mb-0">
          <Image src="/logo_2_white.svg" width={100} height={100} alt="Logo" />
          <div className="flex mt-4 gap-4 items-start">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="social_logo"
              className="cursor-pointer"
            />
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="social_logo"
              className="cursor-pointer"
            />
            <Image
              src="/youtube.svg"
              width={24}
              height={24}
              alt="social_logo"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center xl:text-start">
            <h4 className="font-glancyr font-bold mb-2">QUICK LINKS</h4>
            <ul>
              <li>
                <Link href="/product">Products</Link>
              </li>
              <li>
                <Link href="/frameworks">Solutions & Frameworks</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center xl:text-start">
            <h4 className="font-glancyr font-bold mb-2">ABOUT US</h4>
            <ul>
              <li>
                <Link href="/about-us">Our Story</Link>
              </li>
              <li>
                <Link href="/about-us/careers">Careers</Link>
              </li>
              <li>
                <Link href="/about-us/investors">Investors</Link>
              </li>
              <li>
                <Link href="/about-us/press">Press</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center xl:text-start">
            <h4 className="font-glancyr font-bold mb-2">
              CLIENTS & PARTNERSHIP
            </h4>
            <ul>
              <li>
                <Link href="/resources/client-stories">Testimonials</Link>
              </li>
              <li>
                <Link href="/resources/partnerships">Partners</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center xl:text-start">
            <h4 className="font-glancyr font-bold mb-2">RESOURCES</h4>
            <ul>
              <li>
                <Link href="/resources">Blog</Link>
              </li>
              <li>
                <Link href="/resources/guides">Guides</Link>
              </li>
              <li>
                <Link href="/resources/glossary">Glossary</Link>
              </li>
              <li>
                <Link href="/resources/events">Events</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center py-8 border-t border-light-gray mt-6 leading-7 tracking-wider">
        © 2023 SKELDUS. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
