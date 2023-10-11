'use client'

import React, { useEffect, useRef } from 'react'
import { FaLinkedin, FaDev, FaGitSquare } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
const Typed  = require('typed.js');
 
const Contact = () => {

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

  return (      
    <div className="text-center items-center justify-center">
      <p className="capitalize tracking-widest text-gray-600">Hello <span className="animate-pulse font-bold text-5xl">👋🏽</span>, welcome to my site. I'm ...</p>
      <h1 className="py-4 text-6xl text-rose-600">Kandis <span className="text-gray-800 dark:text-white">Arzu-Thompson</span></h1>
      <h2 className="py-3 text-medium mb-4">I am <span ref={el} className="text-yellow-500"/></h2>
      <p className="py-4 text-lg max-w-[70%] m-auto font-light text-semilight">
        
        I'm Kandis, a highly motivated software engineer with a diverse background in childcare and fitness coaching, now transitioning into an exciting new chapter as a full stack developer. I bring a unique blend of skills, including strong problem-solving abilities and a passion for empowering individuals. With a solid foundation in front-end and back-end development, I'm eager to contribute my technical expertise to build innovative, user-centric applications. Through my experience in childcare and fitness coaching, I've honed exceptional interpersonal skills, enabling me to collaborate effectively in team environments. I thrive on challenges and possess the adaptability to quickly learn and master new technologies. I'm ready to make an impact and actively contribute to creating meaningful software solutions. Let's build something amazing together!
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
  )
}
export default Contact