import React from "react";
import { MeteorsDemo } from "./UserCard";

const Developers = () => {
  return (
    <section>
      <div className="font-inter my-10 mb-32">
        <h1 className="text-4xl font-bold text-center">Developers</h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 gap-y-10 md:gap-10 space-y-4">
        <MeteorsDemo
          name="Ermiyas Kerebih"
          description="Presenting your digitalized library app for a competition is an exciting opportunity to showcase its features and benefits to viewers effectively. Here's a structured approach you can take to present your app"
          profileImgUrl="/ermiyas.jpg"
        />
        <MeteorsDemo
          name="Barkot Dessalegn"
          description="Presenting your digitalized library app for a competition is an exciting opportunity to showcase its features and benefits to viewers effectively. Here's a structured approach you can take to present your app"
          profileImgUrl="/barkot.jpg"
        />
        <MeteorsDemo
          name="Yonas Asmare"
          description="Presenting your digitalized library app for a competition is an exciting opportunity to showcase its features and benefits to viewers effectively. Here's a structured approach you can take to present your app"
          profileImgUrl="/yonas.jpg"
        />
      </div>
    </section>
  );
};

export default Developers;
