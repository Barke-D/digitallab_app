"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  title: string;
  id: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ThreeDCardDemo = ({
  title,
  id,
  image,
  downloadNumber,
  downloadLink,
}: Props) => {
  return (
    <CardContainer key={id} className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <TooltipProvider>
          <Tooltip>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <TooltipTrigger className=" p-0 text-left">
                <p className="line-clamp-1">{title}</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </CardItem>
          </Tooltip>
        </TooltipProvider>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="500"
            className="h-96 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={downloadLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-md font-normal font-spaceGrotesk dark:text-white"
          >
            Download →
          </CardItem>
          <CardItem className="flex px-4 py-4 gap-2 rounded-xl text-md font-bold">
            {downloadNumber}
            <Eye width={20} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
