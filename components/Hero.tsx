"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { heroBanner } from "@/constants/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const words = `Read More And Make Success The Result Of Perfection.`;

const Hero = () => {
  return (
    <main className="w-full md:h-[70vh] md:max-w-full flex flex-col items-center justify-center md:flex-row md:gap-40 mt-10 px-8">
      <motion.div
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        className="md:w-2/5"
      >
        <h2 className="tracking-widest text-slate-700 font-extrabold text-left pt-3 text-sm font-poppins">
          WELCOME TO SOS DIGITAL LIBRARY
        </h2>
        <h1 className="font-bold text-3xl text-left pb-8">
          <TextGenerateEffect words={words} />
        </h1>
        <p className="md:text-xl text-lg text-justify px-2 font-poppins text-slate-500 ">
          In this website, you will find not only text book, but a lot more;
          like Exam sheets, Books for International Standardized Tests(TOEFL,
          SAT, IELTS), Art books, Coding Books ... a lot more!
        </p>
      </motion.div>
      <div className="md:w-1/5 mt-16">
        <div className="hero-banner">
          <div className="slide-container">
            <p className="section-subtitle font-philosopher text-xl text-primary font-bold mb-6">
              Today's Pick
            </p>
            <Carousel
              width={350}
              dynamicHeight
              autoPlay
              infiniteLoop
              showArrows={false}
              showIndicators={false}
              className="shadow-xl"
            >
              {heroBanner.map(({ imgUrl, id }) => (
                <div key={id}>
                  <Image
                    src={imgUrl}
                    alt={imgUrl}
                    width={500}
                    height={600}
                    className="cursor-pointer rounded-md"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
