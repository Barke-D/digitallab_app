import React from "react";
import { Meteors } from "./ui/Meteors";
import Image from "next/image";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function MeteorsDemo({
  name,
  description,
  profileImgUrl,
}: {
  name: string;
  description: string;
  profileImgUrl: string;
}) {
  return (
    <div className=" h-96">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div>
            <Image
              src={profileImgUrl}
              alt={name}
              width={100}
              height={100}
              className="rounded-full object-contain"
            />
          </div>

          <h1 className="font-extrabold text-xl text-black pt-2  mb-4 relative z-50">
            {name}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-justify">
            {description}
          </p>
          <div className="w-full flex flex-row gap-3 items-center justify-between">
            <div className="flex flex-row gap-3">
              <Link href="https://instagram.com/ermiyas130">
                <Instagram className="cursor-pointer" />
              </Link>
              <Link href="https://facebook.com/ermiyas130">
                <Facebook className="cursor-pointer" />
              </Link>
              <Link href="https://twitter.com/ermiyas130">
                <Twitter className="cursor-pointer" />
              </Link>
            </div>
            <button className="flex gap-3 border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              <Mail /> Email
            </button>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
