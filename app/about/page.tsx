'use client'

import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import Circles from '../components/Circles';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import CountUp from 'react-countup'
import Image from 'next/image';
import profile from '../../public/nobg_profile.jpeg'

const About: React.FC = () => {
  const [index, setIndex] =  useState(0)

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* AVATAR IMG */}
      <motion.div
      variants={fadeIn({direction: 'right', delay: 0.2})}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* TEXT AREA */}
        <div className="flex-1 flex flex-col justify-center ">
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </h2>
          <p className="max-w-[500px} mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-lg font-semibold">
            Two years ago, I enrolled in a software engineering boot camp and decided to bring my entrepreneurship journey in early childhood education to a close.  Since graduating in July of 2023, I have been freelancing as a web developer, up-skilling and pivoting my business into a tech startup venture, and looking for a full-time role to elevated my full-stack developer abilities.
          </p>
          {/* COUNTERS */}
          <div className="hidden md:flex md:max-w-sl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* EXPERIENCES */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* CLIENTS */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
              {/* PROJECTS */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              {/* AWARDS */}
              <div className="relative flex-1 ">
                {/* after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 */}
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
              </div>
            </div>  
          </div>
        </div>
        {/* PROFILE PIC CARD */}                
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-accent" />
              <Image
                src={profile}
                alt="profile-pic"
                className="w-full h-auto rounded-2xl"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>           
    </div>
    </div>
  )
};

export default About;