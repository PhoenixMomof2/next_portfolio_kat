'use client'
import React, { ReactNode } from 'react'
import './globals.css'
import { Poppins, Sora } from 'next/font/google'
import Nav from './components/Nav'
import Header from './components/Header'
import Top_Left_Image from './components/Top_Left_Image'
// import TransitionEffect from '../app/components/TransitionEffect'

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

// router
import { usePathname } from 'next/navigation';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// Define the props for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

// Define the RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`page text-white bg-primary bg-cover bg-no-repeat ${sora.variable} font-sora relative ${poppins.variable} font-poppins`} suppressHydrationWarning={true}>
        <Top_Left_Image />
        <Nav />
        <Header />     
        {/* <AnimatePresence mode='wait'>  
          <motion.div 
            key={pathname}
            className='h-full'
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                opacity: 0,
              },
            }}> */}
            {/* <TransitionEffect /> */}
                {children}        
          {/* </motion.div>
      </AnimatePresence> */}
        </body>
    </html>
  )
}