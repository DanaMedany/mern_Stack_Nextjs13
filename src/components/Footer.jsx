import Image from "next/image";
import Link from "next/link";
import { socialMedia, links } from "@/constant";

const Footer = () => {
  return (
    <footer className="w-full px-[50px] mx-auto bg-[rgba(255,255,255,0.5)]">
      <div className="flex items-center justify-between py-8 md:py-5 lg:flex-row flex-col">
        <div className="flex-[0.9]">
          <Image
            src="/nextjs-icon-512x512-y563b8iq.png"
            alt="image"
            width={70}
            height={70}
            className="pl-5"
          />
          <ul className="mt-5">
            <Link href="/" className="flex gap-2">
              {socialMedia.map((icon) => (
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={25}
                  height={25}
                  className="hover:scale-[1.2] transition-all duration-[250ms]"
                />
              ))}
            </Link>
          </ul>
        </div>
        <div className="flex flex-1 gap-6 font-bold text-[18px] uppercase mt-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:scale-[1.2] transition-all duration-[250ms]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t-2 opacity-[0.3] border-solid border-black w-full py-2" />
      <h4 className="text-center font-semibold text-[20px]">
        Designed And Developed by Dana Medany
      </h4>
    </footer>
  );
};

export default Footer;
