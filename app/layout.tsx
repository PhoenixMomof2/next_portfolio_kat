'use client'
import React, { ReactNode } from 'react'
import './globals.css'
import { Poppins, Sora } from 'next/font/google'
import Nav from './components/Nav'
import Top_Left_Image from './components/Top_Left_Image'

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

// Define the props for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

// Define the RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={`page text-white bg-primary  ${sora.variable} font-sora relative ${poppins.variable} font-poppins`} suppressHydrationWarning={true}>
        <Top_Left_Image />
        <Nav />  
          {children}
        </body>
    </html>
  )
}