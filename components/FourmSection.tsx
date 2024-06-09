"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navigation } from "lucide-react";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center font-inter">
          Join The Community
        </div>
        <button className="flex flex-row gap-4 items-center bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3">
          <Link href="https://digitalized-lab.vercel.app" target="_blank">
            Join Now
          </Link>

          <Navigation />
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
