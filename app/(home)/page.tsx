import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="w-full m-5 flex flex-col">
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default Page;
