import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const images = {
    js: "/javascript.svg",
    react: "/react.svg",
    next: "/next.svg",
    node: "/node.svg",
    php: "/php.svg",
    mongo: "/mongo.svg",
    firebase: "/firebase.svg",
  };
  const TechStack = [
    {
      name: "Javascript",
      image: images.js,
      link: "https://www.javascript.com/",
    },
    {
      name: "React",
      image: images.react,
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      image: images.next,
      link: "https://nextjs.org/",
    },
    {
      name: "Node.js",
      image: images.node,
      link: "https://nodejs.org/",
    },
    {
      name: "PHP",
      image: images.php,
      link: "https://www.php.net/",
    },
    {
      name: "MongoDB",
      image: images.mongo,
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      image: images.firebase,
      link: "https://firebase.google.com/",
    },
  ];

  return (
    <div className=" flex justify-center items-center mb-5">
      <div className="max-w-[80%] bg-[var(--white-transparent)] md:p-8 p-4 flex flex-col justify-center items-start boxshadow text-[var(--white)]">
        <h1 className="md:text-4xl text-3xl font-bold pb-2 tracking-wide hoverunderline">
          About Me
        </h1>
        <p className=" md:text-lg text-base py-2">
          I&apos;m Ermiyas Dagnachew, a 4th-year software engineering student at{" "}
          <Link
            href={"http://www.aastu.edu.et/"}
            className="text-[var(--theme)] border-b-[3px] border-b-transparent hover:border-b-[var(--theme)] font-bold duration-300"
            target="_blank"
          >
            Addis Ababa Science and Technology University (AASTU)
          </Link>
          . My learning journey extends from the classroom to online resources,
          where I&apos;ve cultivated my skills. I specialize in full-stack
          development, with a strong focus on the MERN stack and Next.js. I also
          have experience with PHP and excel in design with Figma.
        </p>
        <p className="md:text-lg text-base py-2">
          My portfolio showcases my ability to handle end-to-end website
          development, having worked on freelance projects for various
          companies. With a passion for problem-solving and abstraction, I enjoy
          transforming complex challenges into elegant solutions. Explore{" "}
          <Link
            href={"/projects"}
            className="text-[var(--theme)] border-b-[3px] border-b-transparent hover:border-b-[var(--theme)] font-bold duration-300"
          >
            my portfolio
          </Link>{" "}
          to see my work and innovative projects.
        </p>
        {/* Tech Stach */}
        <div className="w-full flex flex-col mt-7 gap-7 justify-between items-center">
          <h1 className="md:text-3xl text-2xl font-bold tracking-wide hoverunderline">
            Tech Stack
          </h1>
          <div className="w-full flex md:justify-between justify-center items-center gap-5 flex-wrap">
            {TechStack.map((tech, key) => (
              <Link
                href={tech.link}
                className="flex flex-col justify-center items-center md:p-3 p-2 md:px-4 px-2 bg-[var(--white-transparent)] rounded-lg boxshadow "
                key={key}
                target="_blank"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  className="w-[80px] h-[80px] object-contain"
                  width={80}
                  height={80}
                />
                <p className="text-base py-2">{tech.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
