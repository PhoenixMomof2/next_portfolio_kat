import Image from 'next/image'
import Link from 'next/link'
import Socials from '../components/Socials'
import logo from '../../public/logo.png'

const Header = () => {
  return (
    <header className="absolute z-40 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* LOGO */}
          <Link href={'/'}>
            <Image className="bg-white rounded-full mt-16 hover:scale-105 duration-300 shadow:white hover:shadow-lg" src={logo} alt="logo" width={ 100 || "auto"} height={ 100 || "auto"} priority={true} />
          </Link>
          {/* SOCIALS */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header