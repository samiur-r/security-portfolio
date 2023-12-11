import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5F7E9F] text-white pt-8 px-2 md:pt-16 relative overflow-hidden">
      <Image src="/footer-bg-logo.svg" width={675} height={675} alt="" className="absolute top-0" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start relative z-20">
        <div className="mb-6 md:mb-0 -mt-1.5 mx-auto">
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
        <div className="flex flex-1 justify-around flex-wrap leading-7 tracking-wider">
          <div className="footer-column -ml-8 md:ml-0">
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
          <div className="footer-column -ml-12 md:ml-0">
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
          <div className="footer-column mt-3 md:mt-0">
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
          <div className="footer-column mt-3 md:mt-0">
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
      <p className="text-center py-8 border-t border-[#E5E7E8] mt-6 leading-7 tracking-wider">
        © 2023 SKELDUS. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
