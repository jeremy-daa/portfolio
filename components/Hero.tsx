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
    <div className="relative min-h-[100vh] w-full flex flex-col justify-center items-center mt-[4rem]">
      <div className="w-fit duration-300 p-7 flex flex-col md:flex-row justify-center items-center gap-16 coolborder onhover">
        <div className="flex justify-center items-center rounded-full border-4 border-transparent p-2 duration-300">
          <Image
            src="/profile.png"
            alt="hero"
            width={150}
            height={150}
            className=" object-contain rounded-full profile-pic z-50 drop-shadow-xl duration-300"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="text-6xl font-bold bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent py-3 tracking-wide">
            Hi, I&apos;m
          </h1>
          <h1
            className="text-6xl font-bold bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent py-3 tracking-wide coolunderline"
            style={{
              lineHeight: "1.5",
            }}
          >
            Ermiyas Dagnachew
          </h1>
          <h1
            className="text-3xl font-base tracking-[5px] font-mono"
            style={{
              lineHeight: "1.5",
            }}
          >
            A{" "}
            <Typewriter
              words={[
                "Student at AASTU",
                "Full-Stack Web Developer",
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
        className="mt-5 text-2xl font-bold bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent py-3 tracking-wide cursor-pointer duration-300 p-6 border-white border-2 hover:scale-105"
      >
        Download CV
      </Link>
      <div className="w-[60%] flex justify-between items-center p-3 my-10 ">
        {/* <SocialLink
          href="mailto:ermiyas.dagnachew@gmail.com"
          icon={<GoMail />}
          text="Email"
        /> */}
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
