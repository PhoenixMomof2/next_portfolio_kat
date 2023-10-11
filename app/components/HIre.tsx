import circle_text from '../../public/rounded-text.png'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

const HIre = () => {
  return (
    <div className="mx-auto xl:mx-0">      
        <Link href="/projects" className="flex relative w-[185px] h-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group">
          <Image
          priority
          width={200}
          height={200}
          src={circle_text}
          alt="circle_text"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          />   
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
        </Link> 
    </div>
  )
}
export default HIre