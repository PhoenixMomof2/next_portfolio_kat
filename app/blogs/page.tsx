'use client'

import AnimatedText from "../components/AnimatedText";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import blog4 from "../../public/blog4.png";
import blog5 from "../../public/blog5.png";
import blog6 from "../../public/blog6.png";

const FramerImage = motion(Image);

const MovingImg: React.FC<{ title: string; img: StaticImageData; link: string; }> = ({
  title,
  img,
  link
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLDivElement | null>(null);

  function handleMouse(event: any) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  }

  function handleMouseLeave(event: any) {
    if (imgRef.current) imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>     
      <FramerImage 
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef as any}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:hidden"
        // priority
        // sizes="(max-width: 768px) 100vw,
        //     (max-width: 1200px) 50vw,
        //     50vw"
      />
    </Link>
  );
};

const Blog: React.FC<{ img: StaticImageData; title: string; date: string; link: string }> = ({
  img,
  title,
  date,
  link,
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-[75%] p-4 py-6 my-2 rounded-xl flex
        justify-between bg-white text-black first:mt-0 border border-solid border-black
        border-r-4 border-b-4 dark:border-white dark:bg-black dark:text-white sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-orange-600 text-lg font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlog: React.FC<{ img: StaticImageData; title: string; time: string; summary: string; link: string }> = ({
  img,
  title,
  time,
  summary,
  link,
})  => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl dark:bg-black dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-orange-600 font-semibold">{time}</span>
    </li>
  );
};

const BlogsPage: React.FC = () => {
  return (
    // <div className="h-full bg-primary/30 py-16 text-center xl:text-left mx-10">
      <div className="w-full mb-16 flex flex-col items-center justify-center py-16">
          <AnimatedText
            text="Blogging To Solidify Knowledge!"
            className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 px-32">
            <FeaturedBlog
              img={blog6}
              title="The Request-Response Cycle Adventure"
              time="4 min read"
              summary="This blog post was written in conjunction with my Capstone project for my code boot camp."
              link="https://dev.to/kandis/the-request-response-cycle-adventure-bnk"
            />
            <FeaturedBlog
              img={blog5}
              title="Complex State Management"
              time="3 min read"
              summary="This was my first blog post as a code newbie.  It's brief, poignant, and I look forward to revisiting for future edits."
              link="https://dev.to/kandis/where-to-now-code-school-14df"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-12 mt-32 sm:text-2xl md:text-2xl">
            All Blogs
          </h2>
          <ul className="flex flex-col items-center relative w-full">
              <Blog
                title="The Request-Response Cycle Adventure"
                date="June 20, 2023"
                img={blog6}
                link="https://dev.to/kandis/the-request-response-cycle-adventure-bnk"
              />
              <Blog
                title="Complex State Management"
                img={blog5}
                date="March 9, 2023"
                link="https://dev.to/kandis/complex-state-management-22ae"
              />
              <Blog
                title="Failing Is Funny: Code with humor and sweat the small stuff........it matters!"
                img={blog4}
                date="January 17, 2023"
                link="https://dev.to/kandis/creating-query-methods-active-record-2na4"
              />
              <Blog
                title="Creating & Passing Props"
                img={blog3}
                date="November 7, 2022"
                link="https://dev.to/kandis/creating-passing-props-4bpf"
              />
              <Blog
                title="Understanding Variable Scope"
                img={blog2}
                date="September 36, 2022"
                link="https://dev.to/kandis/understanding-variable-scope-n2o"
              />
              <Blog
                title="Where to now? ...Code School"
                img={blog1}
                date="August 28, 2022"
                link="https://dev.to/kandis/where-to-now-code-school-14df"
              />
          </ul>
        </div>
      
  );
};
export default BlogsPage;