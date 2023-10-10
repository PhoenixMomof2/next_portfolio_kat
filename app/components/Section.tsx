import React, { ReactNode } from 'react'

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit scrollbar flex flex-col justify-start items-center pt-8 px-5 text-center">
      <h3 className="py-3 text-3xl lg:text-5xl">{title}</h3>
      <p className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base">
        {subtitle}
        </p>
      {children}
    </section>
  )
}

export default Section