import React from "react";
import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";

import Link from "next/link";
export interface ProjectCardProps {
  title: string;
  description?: string[];
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col justify-center items-center relative w-[350px] h-[164px] rounded-lg overflow-hidden duration-300 boxshadow projectcard">
        <Image
          src={image}
          alt="project"
          width={700}
          height={700}
          className="h-full w-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="absolute top-0 left-0 w-full backdrop-blur-sm h-full z-10 translate-y-[100%] duration-300 p-5 flex flex-col items-center justify-center gap-4 text-center bg-[var(--black-transparent)] coolborder-parent">
          <h1 className="text-[var(--white)] md:text-xl text-xl tracking-wider font-bold z-20 w-fit text-center text-[#d431d4]">
            {title}
          </h1>
          {description?.map((desc, index) => (
            <p
              key={index}
              className="text-[var(--white)] md:text-base text-sm z-20 w-fit"
            >
              {desc}
            </p>
          ))}
          <div className="flex gap-3">
            <Link
              href={link}
              target="_blank"
              className="flex gap-2 z-20 justify-center items-center duration-300 hover:scale-110"
            >
              <div className="text-base cursor-pointer">
                <FaLink />
              </div>
              <p className="text-sm font-bold">Visit</p>
            </Link>
            <Link
              href={"https://github.com/jeremy-daa"}
              target="_blank"
              className="flex gap-2 z-20 justify-center items-center duration-300 hover:scale-110"
            >
              <div className="text-base cursor-pointer">
                <FaGithub />
              </div>
              <p className="text-sm font-bold">Github</p>
            </Link>
          </div>
        </div>
      </div>
      <h1
        className="text-[var(--white)] text-2xl tracking-wider font-bold z-20 w-fit text-center hoverunderline"
        style={{
          lineHeight: "1.5",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default ProjectCard;
