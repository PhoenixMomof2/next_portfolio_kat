'use client'

import React from 'react'
import Education from '../components/Education'
import Experience from '../components/Experience'

const Experiences = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center">
        <Education />
        <Experience />
      </div>
    </div>
  )
}

export default Experiences