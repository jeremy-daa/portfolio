import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FaFigma, FaNodeJs } from "react-icons/fa6";
import {
  RiHtml5Line,
  RiTailwindCssLine,
  RiJavascriptLine,
  RiNextjsLine,
} from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiGithubactions, SiAzuredevops } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

const Skill = ({ name, x, y, icon, link }) => {
  const ref = useRef(null);
  return (
    <motion.a
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      href={link}
      className="cursor-default w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       flex items-center gap-2 md:gap-1"
    >
      {icon}
      {name}
    </motion.a>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-default flex rounded-full font-semibold bg-dark text-light px-6 py-5 shadow-dark
        dark:bg-light dark:text-dark lg:px-6 md:px-4 xs:px-2 lg:py-4 md:py-2 xs:py-1 xs:text-xs 
        "
        >
          My Tech Stack
        </motion.div>

        <Skill
          name="HTML"
          x="-20vw"
          y="6vw"
          icon={<RiHtml5Line />}
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <Skill
          name="Tailwind"
          x="-5vw"
          y="-10vw"
          icon={<RiTailwindCssLine />}
          link="https://tailwindcss.com/"
        />
        <Skill
          name="JavaScript"
          x="20vw"
          y="6vw"
          icon={<RiJavascriptLine />}
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill
          name="TypeScript"
          x="0vw"
          y="12vw"
          icon={<TbBrandTypescript />}
          link="https://www.typescriptlang.org/"
        />
        <Skill
          name="Next.js"
          x="-20vw"
          y="-15vw"
          icon={<RiNextjsLine />}
          link="https://nextjs.org/"
        />
        <Skill
          name="DevOps"
          x="15vw"
          y="-12vw"
          icon={<SiAzuredevops />}
          link="https://azure.microsoft.com/en-us/services/devops/"
        />
        <Skill
          name="Git"
          x="-35vw"
          y="-5vw"
          icon={<FaGitAlt />}
          link="https://git-scm.com/"
        />
        <Skill
          name="UI / UX"
          x="32vw"
          y="-5vw"
          icon={<FaFigma />}
          link="https://www.figma.com"
        />
        <Skill
          name="Node.js"
          x="0vw"
          y="-20vw"
          icon={<FaNodeJs />}
          link="https://nodejs.org/"
        />
        <Skill
          name="React"
          x="-25vw"
          y="18vw"
          icon={<GrReactjs />}
          link="https://reactjs.org/"
        />
        <Skill
          name="CI / CD"
          x="28vw"
          y="18vw"
          icon={<SiGithubactions />}
          link="https://github.com/features/actions"
        />
      </div>
    </>
  );
};

export default Skills;
