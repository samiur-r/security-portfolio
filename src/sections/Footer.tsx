import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#5F7E9F] text-white pt-8 px-2 md:pt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0 -mt-1.5 mx-auto">
          <Image src="/logo_footer.svg" width={100} height={100} alt="Logo" />
          <div className="flex mt-4 gap-4 items-start">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="social_logo"
            />
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="social_logo"
            />
            <Image
              src="/youtube.svg"
              width={24}
              height={24}
              alt="social_logo"
            />
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex flex-1 justify-around flex-wrap leading-7 tracking-wider">
          <div className="footer-column">
            <h4 className="font-glancyr font-bold mb-2">QUICK LINKS</h4>
            <ul>
              <li>Products</li>
              <li>Solutions & Frameworks</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-glancyr font-bold mb-2">ABOUT US</h4>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-column mt-2 md:mt-0">
            <h4 className="font-glancyr font-bold mb-2">
              CLIENTS & PARTNERSHIP
            </h4>
            <ul>
              <li>Testimonials</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="footer-column mt-2 md:mt-0">
            <h4 className="font-glancyr font-bold mb-2">RESSOURCES</h4>
            <ul>
              <li>Blog</li>
              <li>Guides</li>
              <li>Glossary</li>
              <li>Events</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-8 border-t border-[#E5E7E8] mt-6 leading-7 tracking-wider">
        © 2023 SKELDUS. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
