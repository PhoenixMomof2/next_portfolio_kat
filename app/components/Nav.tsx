'use client'

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData: NavItem[] = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/projects', icon: <HiRectangleGroup /> },
  { name: 'experiences', path: '/experiences', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next navigation
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Nav: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] x-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* Inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/5 backdrop-blur-sm text-3xl xl:text-xl xl: rounded-full">
        {navData.map((link, index) => {
          return <Link 
          key={index}
          href={{ pathname: link.path }}
          className={`${link.path === pathname ? 'text-accent' : ''}`}
          >
            <div>
            {link.icon}
            </div>
          </Link>
        })}
      </div>
    </nav>
  )
}

export default Nav