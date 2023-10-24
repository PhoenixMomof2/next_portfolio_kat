'use client'

import HIre from './components/HIre'
import {motion} from 'framer-motion'
import { fadeIn } from '../app/variants'
import Image from "next/image"
import phoenix from "../public/phoenix.png"

export default function Home() {

  return (  
    <div className="bg-primary/60 h-screen">
        {/* wrap for two columns */}
        {/* <div className=""> */}
          {/* text */} 
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                {/* title */}
                <motion.h1 
                variants={fadeIn({direction: 'down', delay: 0.4})} 
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1">
                  Transforming Ideas <br /> Into {''}
                  <span className="text-accent"> Digital Reality </span> 
                </motion.h1>
                {/* subtitle */}
                <motion.p 
                variants={fadeIn({direction: 'down', delay: 0.4})} 
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Consequat laborum et sint exercitation esse dolore. Qui pariatur amet id ipsum quis pariatur anim fugiat commodo non nostrud. Duis cillum labore cupidatat excepteur magna laboris commodo laborum sunt adipisicing et nisi consequat deserunt. Ex ad consectetur ad duis sunt ipsum Lorem veniam mollit ad amet.</motion.p>
                <div className="flex justify-center xl:hidden relative">
                  <HIre />            
                </div>
                <motion.div 
                variants={fadeIn({direction: 'down', delay: 0.4})} 
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex">
                  <HIre />
                </motion.div>
              </div>
              </div>
          {/* image w-full h-screen */}     
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
              <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
              {/* bg img */}
              {/* Avatar Img */}
              <motion.div 
              variants={fadeIn({direction: "up", delay: 0.5})} 
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: 'easeInOut'}}
              className="max-w-[400px] max-h-[600px] absolute lg:bottom-0 lg:right-[15%]" >
              <Image src={phoenix} alt="phoenix-avatar" style={{ width: '400', height: '600' }}/> 
              </motion.div>        
            </div>
      </div>
    )
}