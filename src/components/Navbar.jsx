"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { links } from "@/constant";

const Navbar = () => {
  const router = useRouter();

  const logout = async () => {
    await axios.get("/api/users/logout");
    router.push("/login");
  };

  return (
    <nav className="w-full px-6 sm:px-16 mx-auto py-8 scroll">
      <div className="flex justify-between">
        <Link
          href="/"
          className="text-[rgba(255,255,255,0.5)] text-[20px] font-semibold leading-8"
        >
          <Image
            src="/nextjs-icon-512x512-y563b8iq.png"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <ul className="flex items-center space-x-4 text-sm font-medium text-[rgba(255,255,255,0.5)] ">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-[16px] md:text-[20px] hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link
            href="/"
            className="text-[16px] md:text-[20px] hover:text-white"
            onClick={logout}
          >
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
