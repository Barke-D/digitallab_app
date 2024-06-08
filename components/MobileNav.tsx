"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-0 lg:hidden"
        />
      </PopoverTrigger>
      <PopoverContent className="backdrop-blur-md">
        {navLinks.map((item) => {
          const isActive =
            (pathname.includes(item.link) && item.link.length > 1) ||
            pathname === item.link;

          return (
            <Link
              href={item.link}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgUrl}
                alt={item.name}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.name}
              </p>
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default MobileNav;
