"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { GoMail } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialLink from "./SocialLink";
const Hero = () => {
  const Socials = [
    {
      href: "mailto:ermiyas.dagnachew@gmail.com",
      icon: <GoMail />,
      text: "Email",
    },
    {
      href: "https://instagram.com/yirmeyahu.63?igshid=NzZlODBkYWE4Ng==",
      icon: <FaInstagram />,
      text: "Instagram",
    },
    {
      href: "https://github.com/jeremy-daa",
      icon: <FaGithub />,
      text: "Github",
    },
    {
      href: "https://www.linkedin.com/in/ermiyas-dagnachew-amberbir-0b3883244/",
      icon: <FaLinkedin />,
      text: "Linkedin",
    },
  ];
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="w-fit duration-300 p-8 flex flex-col md:flex-row justify-center items-center md:gap-16 gap-8 coolborder onhover">
        <div className="flex justify-center items-center rounded-full border-4 border-transparent p-2 duration-300">
          <Image
            src="/profile.png"
            alt="hero"
            width={150}
            height={150}
            className=" object-contain rounded-full profile-pic z-50 drop-shadow-xl duration-300"
          />
        </div>
        <div className="flex flex-col md:justify-start justify-center md:items-start items-center">
          <h1 className="md:text-2xl text-xl font-bold tracking-widest font-mono md:w-full w-fit">
            Hi There, I&apos;m
          </h1>
          <h1
            className="md:text-6xl text-2xl font-bold bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent py-2 tracking-wide coolunderline md:w-full w-fit"
            style={{
              lineHeight: "1.5",
            }}
          >
            Ermiyas Dagnachew
          </h1>
          <h1
            className="md:text-3xl text-base font-base md:tracking-[5px] tracking-widest font-mono md:w-full w-fit"
            style={{
              lineHeight: "1.5",
            }}
          >
            A{" "}
            <Typewriter
              words={[
                "Sophomore at AASTU",
                "Full-Stack Developer",
                "UI/UX Enthusiast",
                "Baller 🏀🏀",
                "Gamer 🎮🎮",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
      </div>
      <Link
        href="/Ermiyas_Dagnachew_CV.pdf"
        className="md:mt-5 mt-3 md:text-2xl text-lg  font-bold bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent py-3 tracking-wide cursor-pointer duration-300 p-6 border-white border-2 hover:scale-105"
      >
        Download CV
      </Link>
      <div className="md:w-[60%] w-[85%] gap-5 flex md:justify-between justify-center items-center p-3 my-10 md:flex-nowrap flex-wrap">
        {Socials.map((social, index) => (
          <SocialLink
            key={index}
            href={social.href}
            icon={social.icon}
            text={social.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
