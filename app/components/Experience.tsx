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
    <figure className="absolute left-0 stroke-black dark:stroke-orange-300" ref={htmlReference}>
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
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
  <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;
          <a href={companyLink}
          className="text-red-600 capitalize dark:text-orange-400"
          target="_blank">@{company}</a></h3>
        <span className="capitalize font-medium text-black/75 dark:text-white/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-light w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} 
        className="absolute left-9 top-0 w-[4px] h-full bg-primary dark:bg-white origin-top  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl" />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">          
              <Details 
              position="Owner & Family Child Care Provider"
              company="Clever Munchkins LLC "
              companyLink="https://www.clevermunchkinsllc.com"
              time="July 2017 - June 2022"
              address="Waldorf, MD"
              work="Created an invigorating STEAM curriculum that resulted in over 75% of program attendees beginning kindergarten with advance educational milestones in reading and mathematics
              Implemented holistic behavior management techniques and encouraged conflict resolution strategies to promote positive discipline and encourage empathetic social skills
              "/>   
              <Details 
              position="Personal Fitness Trainer & Sports Performance Coach"
              company="XSport Fitness"
              companyLink="https://www.xsportfitness.com"
              time="June 2011 - June 2017"
              address="Alexandria, VA"
              work="Utilized motivational techniques to encourage clients to their commitment to wellness and performance goals
              Collaborated with athletes and coaches to develop integrated training plans and injury prevention strategies
              Customized and executed dynamic workout routines to improve strength, endurance, agility, and flexibility" />          
              <Details 
              position="Gig Worker"
              company="Uber, Lyft, Instacart"
              companyLink="https://www.instacart.com"
              time="Oct 2015 - present"
              address="MetroDC Area"
              work="Earning side income while providing the invaluable service of saving people time. As an Uber driver, I offer reliable and convenient transportation services to passengers. Additionally, I take on the role of an Instacart shopper, efficiently selecting and delivering groceries to customers' doorsteps, ensuring their shopping needs are met with care and attention."/>   
              <Details 
              position="Parent Volunteer"
              company="Silverbrook Elementary School"
              companyLink="https://www.fcps.edu"
              time="June 2011 - June 2017"
              address="Fairfax Station, VA"
              work="Giving assistance to educators and administrative staff by volunteering time to help with critical-thinking skills workshops, cultural events, math and reading events, teacher appreciation events, fundraising, extracurricular activities, and tutoring." />          
              <Details 
              position="Comedian, Podcaster, Content-Creator"
              company="Jokes In Beast Mode LLC"
              companyLink="https://www.jokesinbeastmode.com"
              time="June 2021 - present"
              address="Remote Work"
              work="Curating sketch comedy and humorous educational science segments to encourage exposure to underrepresented children who have yet to spark an interest in STEM."/>                
          </ul>
        
      </div>
    </div>
  )
}
export default Experience