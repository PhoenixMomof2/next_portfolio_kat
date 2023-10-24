'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FaLinkedin, FaDev, FaGitSquare } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
const Typed  = require('typed.js');
import Circles from '../components/Circles';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import CountUp from 'react-countup'
import Image from 'next/image';
import phoenix from "../../public/phoenix.png"
import profile from '../../public/nobg_profile.jpeg'

const About: React.FC = () => {
  const SOCIAL = [
    {
      id: 1, 
      link: "https://www.linkedin.com/in/kandis-arzu-thompson/",
      icon: <FaLinkedin />,
    },
    {
      id: 2, 
      link: "https://github.com/PhoenixMomof2",
      icon: <FaGitSquare />,
    },
    {
      id: 3, 
      link: "https://dev.to/kandis",
      icon: <FaDev />,
    },
    {
      id: 4, 
      link: "mailto:k.arzuthompson@gmail.com",
      icon: <AiOutlineMail />,
    },
  ]

  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          '<i>a Software Engineer</i>.',
          'a Full Stack Developer.',
          'a Frontend Developer.',
          'a Web Developer.',
          'an EdTech Enthusiast.',
          'a proud mother of 2.',
          'YOUR new hire!',
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const [index, setIndex] =  useState(0)

  return (
    <div className="h-screen bg-primary/30 text-center xl:text-left translate-z-0">
      <Circles />
      <div className="container pt-16 mx-auto flex flex-col items-center xl:flex-row gap-x-2 px-16">
        {/* PROFILE PIC CARD */}                
        <div className="w-1/2 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8">
          <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[103%] rounded-2xl bg-black dark:bg-accent" />
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
        {/* TEXT AREA */}
        <div className="w-1/2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
          <div className="text-center items-center justify-center">
          <p className="capitalize tracking-widest text-yellow-500">Hello <span className="animate-pulse font-bold text-xl">👋🏽</span>, welcome to my site. I'm ...</p>
          <h1 className="py-4 text-3xl text-rose-600">Kandis <span className="text-gray-800 dark:text-white">Arzu-Thompson</span></h1>
          <h2 className="py-3 text-medium mb-4">I am <span ref={el} className="text-yellow-500"/></h2>
          <p className="pb-2 max-w-[70%] m-auto font-medium text-white">            
          If under-promise and over-deliver were a woman, she’d look like me.  For over ten years, I’ve turned my dreams into reality as an entrepreneur first in the health and wellness industry and then in the area of early childhood education.  The common factor in both was my relentless pursuit of specialty certifications and continued learning.  As a full-stack developer, my tenacity is no different.  I am proficient in front-end and back-end development and if you are looking for a software engineer who is ready to scale herself to a position of notoriety and leadership, you’ve found her.
          </p>
          {/* social icons */}
          <div className="flex items-center justify-evenly max-w-[330px] m-auto gap-8 py-4 text-3xl">
            {SOCIAL.map(({id, link, icon}) => (
              <div key={id} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-rose-600 hover:scale-110">
                <a 
                href={link}                   
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer duration-300"
                >
                  {icon}
                </a>
              </div>
            ))}
          </div>
          </div> 
        </div>
      </div>
    </div>
  )
};

export default About;