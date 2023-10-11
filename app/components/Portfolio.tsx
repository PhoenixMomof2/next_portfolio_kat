import React from 'react'
import Section from '../components/Section'
import { FaGitSquare, FaExternalLinkSquareAlt} from 'react-icons/fa'
import p1 from '../../public/B-Clever.jpg'
import p2 from '../../public/Awaken.jpg'
import p3 from '../../public/HungerSmash.jpg'
import p4 from '../../public/Hogwarts-ish.jpg'
import Image from 'next/image';

const Portfolio = () => {

  const projects = [
    { 
      id: 1,     
      image: p1,
      title: "B-Clever", 
      github: "https://github.com/PhoenixMomof2/B-Clever.git",
      demo: "", 
    },
    {
      id: 2, 
      image: p2,
      title: "Awaken", 
      github: "https://github.com/PhoenixMomof2/AwakenBookClub.git",
      demo: "https://youtu.be/myubSd26GxA",  
    },
    {
      id: 3, 
      image: p3,
      title: "Hunger Smash", 
      github: "https://github.com/PhoenixMomof2/hunger-smash.git",
      demo: "https://youtu.be/GYz5dWCB_yQ", 
    },
    {
      id: 4, 
      image: p4,
      title: "Hogwarts-ish", 
      github: "https://github.com/PhoenixMomof2/Hogwarts-ish.git",
      demo: "https://youtu.be/Lpn5gzCd7Cs", 
    }
  ]

  return (
    <Section title="Portfolio 🗒️" subtitle="These are all of the projects that I have created since learning to code.  Some of them have yet to be updated with my current skills.  Please be delicate with your critiques.">
      <div id='portfolio' className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div 
          key={id} 
          className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:scale-105 ease-in-out duration-200">
            <Image src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2 className="text-lg md:text-xl lg:text-2xl">{title}</h2>
              <a 
                className="text-4xl cursor-pointer duration-150 hover:text-[#E68E2E] hover:scale-110"
                href={github}
                target="_blank" 
                rel="noopener noreferrer">
                <FaGitSquare />
              </a>
              <a 
                className="text-4xl cursor-pointer duration-150  hover:text-[#F3EC26] hover:scale-110"
                href={demo}
                target="_blank" 
                rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>          
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Portfolio