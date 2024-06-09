import React from "react";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-col  py-2 item-center">
      <Separator className="mt-6 border-b-2" />
      <div className="w-full flex flex-col py-3">
        <p className="text-md text-center font-inter">
          © Copyright {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-row items-center justify-center">
          <Mail />
          <p className="py-3 px-2 text-md text-center font-inter">
            <Link href="">digitallabsystem@gmail.com</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
