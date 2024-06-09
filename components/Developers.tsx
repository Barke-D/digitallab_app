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
          description="Hello 👋 I'm Ermiyas Kerebih, I'm one of the developers of this amazing website. I'm a Grade 11 student at SOS Hermann Geminer School. I'm a very active student and very passionate about the computer world. I also love to Play games, to meet up and talk with people, to read a lot of books!"
          profileImgUrl="/ermiyas.jpg"
        />
        <MeteorsDemo
          name="Barkot Desalegn"
          description="Hello 👋 I'm Barkot Desalegn, I'm one of the developers of this amazing website. I'm a Grade 11 student at SOS Hermann Geminer School. I'm a very active student and very passionate about the computer world. I also love to Play games, to meet up and talk with people, to read a lot of books!"
          profileImgUrl="/barkot.jpg"
        />
        <MeteorsDemo
          name="Yonas Asmare"
          description="Hello 👋 I'm Yonas Asmare, one of the developers of this fantastic website. I'm a Grade 11 student at SOS Hermann Gmeiner School. I'm a highly engaged student with a strong passion for the world of computers. watching football, playing video games, reading and also making money is my free time activities."
          profileImgUrl="/yonas.jpg"
        />
      </div>
    </section>
  );
};

export default Developers;
