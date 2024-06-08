import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] fixed top-0 left-0 flex-between flex backdrop-blur-md z-50 gap-5 p-6 shadow-light-300 sm:px-24">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/logo.svg" width={40} height={40} alt="digital lab" />
        <p className="font-extrabold text-2xl font-spaceGrotesk">DigitalLab</p>
      </Link>

      <div className="hidden md:gap-2 md:absolute lg:flex md:right-24 top-6 ">
        {navLinks.map((item) => (
          <Link href={item.link} className="flex flex-row px-5 gap-3">
            <Image src={item.imgUrl} alt={item.name} width={20} height={20} />
            <p className="text- font-semibold font-poppins">{item.name}</p>
          </Link>
        ))}
      </div>
      <div className="flex-between gap-5 absolute right-8 top-4">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
