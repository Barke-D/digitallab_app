import About from "@/components/About";
import Contact from "@/components/Contact";
import Developers from "@/components/Developers";
import Footer from "@/components/Footer";
import { AuroraBackgroundDemo } from "@/components/FourmSection";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="w-full m-5 flex flex-col items-center justify-center z-0">
        <Hero />
        <div className="w-full flex items-center justify-center">
          <About />
        </div>
        <AuroraBackgroundDemo />
        <Developers />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
