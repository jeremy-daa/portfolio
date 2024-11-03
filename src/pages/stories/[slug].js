import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";
import ReactMarkdown from "react-markdown";

const FramerImage = motion(Image);

import proj1 from "/public/images/projects/chiraro-erp.png";
import { notFound } from "next/navigation";

import dbConnect from "@/utils/dbConnect";
import Post from "@/models/Post";

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
const StoryTitle = ({ title, content, img, date }) => {
  const getReadTime = () => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
  };
  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 mb-24
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />
      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
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
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
          {title}
        </h2>
        <p className=" my-2 rounded-md font-semibold text-primary sm:text-sm">
          {getReadTime()}
        </p>
        <p className=" my-2 rounded-md font-medium sm:text-sm">
          {formatDate()}
        </p>
      </div>
    </article>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  dbConnect();
  const blog = await Post.findOne({
    slug,
  });
  if (blog === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: JSON.parse(JSON.stringify(blog)),
    },
  };
};

export default function Story({ post }) {
  if (!post) {
    return notFound();
  }
  const { title, content, image, fileAttached, comments, createdAt } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content.slice(0, 160)} />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <StoryTitle
            title={title}
            content={content}
            img={image}
            date={createdAt}
          />
          <div className="md:w-full w-[80%] mx-auto pb-12 border-b border-solid border-dark dark:border-light">
            <ReactMarkdown className="prose-slate lg:prose prose-xl dark:prose-invert max-w-full text-dark dark:text-light">
              {content}
            </ReactMarkdown>
          </div>
        </Layout>
      </main>
    </>
  );
}
