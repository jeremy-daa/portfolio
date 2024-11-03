import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import chiraroErp from "../../public/images/projects/chiraro-erp.png";
import portfolio from "../../public/images/projects/portfolio.png";
import dreamHouseHotel from "../../public/images/projects/dream-house-hotel-and-apartments.png";
import mettiLegal from "../../public/images/projects/metti-legal.png";
import tesfayeLaw from "../../public/images/projects/tesfaye-law.png";
import sawlaTours from "../../public/images/projects/sawla-tours.png";
import githubProfile from "../../public/images/github.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10" aria-label="github link">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4
             p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools, summary }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded-lg
             mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base  border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>
          Ermiyas Dagnachew Amberbir | Project Portfolio – Innovative Web
          Solutions
        </title>
        <meta
          name="description"
          content="Explore the project portfolio of Ermiyas Dagnachew Amberbir, showcasing innovative web solutions that combine Ethiopian ingenuity with modern technology. Discover unique projects crafted with passion, skill, and purpose to bring ideas to life"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mt-16 mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="A Showcase of Vision and Craft 🎨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="ERP Solution"
                tools="React | Node.js | MongoDB | Next.js"
                title="Chiraro ERP"
                summary="A comprehensive ERP solution tailored for medium to large businesses in Ethiopia, streamlining operations and enhancing efficiency. With a user-friendly interface and seamless integration, the platform provides a secure and efficient way to manage business processes. "
                img={chiraroErp}
                date="2024"
                link="https://erp.chiraro.com/"
                github="https://github.com/jeremy-daa/erp-saas"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Portfolio Website"
                tools="Next.js | React | Tailwind | JavaScript"
                title="My Portfolio"
                summary="Creating my portfolio was a journey of self-discovery and creativity. I wanted to showcase not just my skills but the stories behind each project."
                img={portfolio}
                date="2024"
                link="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Hotel Website & PMS"
                tools="HTML | PHP | JavaScript | MySQL"
                title="Dream House Hotel & Apartments"
                summary="Developing the website and Property Management System for Dream House Hotel and Apartments was an exciting challenge. I aimed to create a user-friendly platform that not only showcased the hotel’s unique offerings but also streamlined operations for staff."
                img={dreamHouseHotel}
                date="2024"
                link="https://www.apartments.dreamhouse-et.com/"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 mt-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Legal Services Landing Page"
                tools="React | Next.js | CSS | JavaScript"
                title="Meti Legal Services"
                summary="Creating the landing page for Meti Legal Services was a rewarding project that aimed to provide a clear and professional online presence. The site features a user-friendly design that makes it easy for clients to access legal information, get in touch, and explore valuable updates and blog content. "
                img={mettiLegal} // replace with the actual project image
                date="2023"
                link="https://www.mettita.com/"
                github="https://github.com/jeremy-daa/metti_legal/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Law Firm Landing Page"
                tools="React | Next.js | CSS | JavaScript"
                title="Tesfaye Derese Law"
                summary="Developing the landing page for Tesfaye Derese Law was an enriching experience aimed at establishing a strong online presence. The website features a clean, professional design that allows potential clients to easily navigate legal services, contact the firm, and access informative blog posts."
                img={tesfayeLaw}
                date="2024"
                link="https://tesfaye-derese-law.vercel.app/"
                github="https://github.com/jeremy-daa/tesfaye-derese-law/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Tourism Website"
                tools="Vite | React | Tailwind | Node.JS"
                title="Sawla Tours"
                summary="Creating the Sawla Tours website was a pivotal moment in my journey as a developer. This project allowed me to combine my passion for travel with my growing skills in web development. I focused on crafting an engaging and informative platform that showcases the beauty of Ethiopia and its attractions."
                img={sawlaTours}
                date="2022"
                link="https://www.sawlatours.com/"
              />
            </div>
          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">
              <Article
                title="To see the full list of projects, check out my GitHub"
                img={githubProfile}
                time="1 min read"
                date=""
                link="https://github.com/jeremy-daa?tab=repositories"
              />
            </ul>

            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/stories/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                View My Stories
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
