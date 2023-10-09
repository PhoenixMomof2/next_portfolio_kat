'use client'

import { motion } from 'framer-motion'
import React from 'react'

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

const TransitionEffect = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#a93434]" variants={transitionVariants} initial="initial" animate="animate"
      exit="exit" transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>1</motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#f6494c]" variants={transitionVariants} initial="initial" animate="animate"
      exit="exit" transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>2</motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#eec146]" variants={transitionVariants} initial="initial" animate="animate"
      exit="exit" transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>3</motion.div>
    </>
  )
}

export default TransitionEffect