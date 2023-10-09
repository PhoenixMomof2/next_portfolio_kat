import './globals.css'
import { Poppins, Sora } from 'next/font/google'
import Nav from './components/Nav'
import Header from './components/Header'
import Top_Left_Image from './components/Top_Left_Image'
import TransitionEffect from '../app/components/TransitionEffect'

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`page text-white bg-primary bg-cover bg-no-repeat ${sora.variable} font-sora relative ${poppins.variable} font-poppins`} suppressHydrationWarning={true}>
        <Top_Left_Image />
        <Nav />
        <Header />       
        <TransitionEffect />
            {children}        
        </body>
    </html>
  )
}