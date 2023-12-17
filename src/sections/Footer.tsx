import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-blue text-white pt-8 px-2 lg:pt-16 relative overflow-hidden">
      <Image
        src="/footer-bg-logo.svg"
        width={675}
        height={675}
        alt=""
        className="absolute top-0"
      />
      <div className="container mx-auto flex flex-col lg:flex-row gap-5 md:gap-0 items-center lg:items-start relative">
        <div className="flex-1 flex items-center flex-col mb-8 lg:mb-0">
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
          <div className="text-center lg:text-start">
            <h4 className="font-glancyr font-bold mb-2">QUICK LINKS</h4>
            <ul>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">Solutions & Frameworks</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center lg:text-start">
            <h4 className="font-glancyr font-bold mb-2">ABOUT US</h4>
            <ul>
              <li>
                <Link href="#">Our Story</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Investors</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center lg:text-start">
            <h4 className="font-glancyr font-bold mb-2">
              CLIENTS & PARTNERSHIP
            </h4>
            <ul>
              <li>
                <Link href="#">Testimonials</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center lg:text-start">
            <h4 className="font-glancyr font-bold mb-2">RESSOURCES</h4>
            <ul>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Guides</Link>
              </li>
              <li>
                <Link href="#">Glossary</Link>
              </li>
              <li>
                <Link href="#">Events</Link>
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
