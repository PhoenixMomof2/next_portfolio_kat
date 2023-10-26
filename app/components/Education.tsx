'use client'

import React, { useRef } from 'react'
import { useScroll, motion } from "framer-motion"
// import LiIcon from './LiIcon'

const LiIcon: React.FC = () => {
  const htmlReference = useRef<HTMLElement | null>(null);

  const {scrollYProgress} = useScroll(
    {
      target: htmlReference,
      offset: ["center end", "center center"]
    }
  )

  return (
    <figure className="absolute left-0 stroke-black dark:stroke-yellow-400" ref={htmlReference}>
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-red-500 stroke-1 fill-none"/>
        <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-white/90"
        style={{
          pathLength : scrollYProgress
        }}/>
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-red-500"/>
      </svg>
    </figure>
  )
}

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailsProps> = ({type, time, place, info}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li ref={ref} className="my-6 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] h-[100px]">
      <LiIcon />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-black/75 dark:text-white/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-light w-full md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  )
}

const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} 
        className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-red-600 dark:shadow-3xl" />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">          
              <Details 
              type="Bachelor of Science In Biology, minor in Chemistry"
              time="2001-2007"
              place="Howard University"
              info="Completed a four-year degree program in liberal arts and natural sciences (e.g. economics, reasoning, statistics, psychology, biology, chemistry, physics, microbiology, animal physiology), completed 30+ credits in core business courses, and 4 semesters of Spanish, just shy of one course for a spanish minor."
              />          
              <Details 
              type="Software Engineering Certificate"
              time="June 2022 - July 2023"
              place="Flatiron School"
              info="Completed an intensive software engineering program in full stack web development where I learned JavaScript, HTML, CSS, Ruby, React, Redux, PostgresSQL, Ruby, Rails, Sinatra, ActiveRecord, Git, Bootstrap and Tailwindcss. In addition, I regularly collaborated with cohort mates, contributing to the advancements and learning of myself and others on our journeys to become developers."
              />                                
          </ul>
        
      </div>
    </div>
  )
}
export default Education