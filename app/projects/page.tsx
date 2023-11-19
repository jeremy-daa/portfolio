import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { ProjectCardProps } from "@/components/ProjectCard";

const page = () => {
  const professionalProjects: ProjectCardProps[] = [
    {
      title: "Sawla Tours",
      description: [
        "A tour and travel agency website built with Next.js and Vanila CSS",
      ],
      image: "/sawla-tours.png",
      link: "https://www.sawlatours.com/",
    },
    {
      title: "Metti Legal Services",
      description: [
        "A legal service website built with Next.js and Tailwind CSS",
      ],
      image: "/metti-legal.png",
      link: "https://www.mettita.com/",
    },
    {
      title: "Min-Tech Ethiopia",
      description: [
        "A mineral filler production company website built with HTML vanilla CSS and Javascript",
      ],
      image: "/min-tech.png",
      link: "https://www.mintechethiopia.com/",
    },
  ];
  const personalProjects: ProjectCardProps[] = [
    {
      title: "Portfolio",
      description: [
        "A portfolio website built with Next.js, Tailwind CSS and Vercel",
      ],
      image: "/portfolio.png",
      link: "https://yirmeyahu.vercel.app/",
    },
    {
      title: "Game Trove",
      description: [
        "A game library website built with React, React-Router-DOM, Chakra UI and Vite",
      ],
      image: "/game-trove.png",
      link: "https://game-trove-inky.vercel.app/",
    },
    {
      title: "Candor News",
      description: [
        "A news website built with PHP, Vanila CSS, Javascript and MySQL",
      ],
      image: "/candor-news.png",
      link: "https://github.com/jeremy-daa/Candor_News",
    },
    {
      title: "Lambda Blog",
      description: [
        "A blog website built with Next.js, Prisma, Firebase and MongoDB",
      ],
      image: "/lambda-blog.png",
      link: "https://lambda-blog.vercel.app/",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full gap-10 flex-wrap md:w-[80%] w-90% mx-auto">
      {/* <ProjectCard /> */}
      <div className="w-full flex justify-center items-center">
        <h1 className="w-fit text-4xl font-bold hoverunderline bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent p-3">
          Professional Projects
        </h1>
      </div>
      {professionalProjects.map((project, key) => (
        <ProjectCard
          key={key}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 h-1 bg-[var(--white)] rounded-full"></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <h1 className="w-fit text-4xl font-bold hoverunderline bg-gradient-to-l from-fuchsia-900 to-gray-200 bg-clip-text text-transparent p-3">
          Personal Projects
        </h1>
      </div>
      {personalProjects.map((project, key) => (
        <ProjectCard
          key={key}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default page;
