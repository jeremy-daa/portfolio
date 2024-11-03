import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Ermiyas.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import Link from "next/link";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  const numberOfDays = () => {
    const today = new Date();
    const startDate = new Date("2022-02-08");
    const timeDiff = today.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };
  const numberOfBugs = () => {
    const today = new Date();
    const startDate = new Date("2022-02-08");
    const timeDiff = today.getTime() - startDate.getTime();

    // Calculate the number of days since the start date
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Set bugs per week
    const bugsPerWeek = 10;

    // Seasonal adjustment (increase bugs in certain months, e.g., March, July)
    const seasonalMultiplier = (() => {
      const month = today.getMonth(); // 0 = January, 1 = February, etc.
      if (month === 2 || month === 6) return 1.5; // Higher bug count in March and July
      return 1; // Normal multiplier for other months
    })();

    // Estimate bugs with seasonal adjustment
    const bugs = Math.floor((daysDiff / 7) * bugsPerWeek * seasonalMultiplier);

    return bugs;
  };

  return (
    <>
      <Head>
        <title>About Me | Full-Stack Developer & Passionate Innovator</title>
        <meta
          name="description"
          content="Discover the journey of Ermiyas Dagnachew Amberbir, a Full-Stack Developer from Addis Ababa. Driven by passion and guided by purpose, Ermiyas combines technical expertise with a commitment to creating impactful digital solutions. Learn more about his mission and vision."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mt-16 flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Fueling Dreams with the Heart of Ethiopia "
            className="mb-16 !text-[85px] !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            et
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                I’m Ermiyas Dagnachew Amberbir, a passionate full-stack
                developer based in Addis Ababa, dedicated to crafting impactful
                digital solutions. With a strong foundation in both front-end
                and back-end technologies, I thrive on creating user-centric web
                applications that enhance functionality and drive engagement.
              </p>
              <p className="my-4 font-medium">
                My journey into coding began in high school, where I was
                fascinated by the endless possibilities of technology. After
                pursuing my studies at Addis Ababa Science and Technology
                University (AASTU), I’ve worked on a diverse range of projects,
                each presenting unique challenges that have enriched my
                expertise. My technical skills include HTML, CSS, JavaScript,
                React, and Node.js, among others.
              </p>
              <p className="my-4 font-medium">
                Currently, I am developing{" "}
                <Link
                  href="https://chiraro-erp.vercel.app/"
                  className="underline text-primary"
                >
                  Chiraro ERP
                </Link>
                , a comprehensive enterprise resource planning solution designed
                specifically for medium to large companies in Ethiopia. This
                project aims to streamline business operations and improve
                efficiency through an intuitive interface and powerful features,
                helping organizations harness the full potential of their
                resources.
              </p>
              <p className="my-4 font-medium">
                P.S. I enjoy shooting hoops with friends on the weekends
                whenever I can 🏀.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="Ermiyas Dagnachew Amberbir"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={numberOfDays()} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Days of Coding
                </h3>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={20} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projects Completed
                </h3>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={numberOfBugs()} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Bugs Made
                </h3>
              </div>
            </div>
            <HireMe2 />
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
