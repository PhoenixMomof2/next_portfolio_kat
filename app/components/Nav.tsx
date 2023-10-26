'use client'

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiDocumentDuplicate,
  HiMiniPresentationChartLine
} from 'react-icons/hi2';

// nav data
export const navData: NavItem[] = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/projects', icon: <HiRectangleGroup /> },
  { name: 'experiences', path: '/experiences', icon: <HiViewColumns /> },
  { name: 'blogs', path: '/blogs', icon: <HiDocumentDuplicate /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
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
    <nav className="fixed flex flex-col items-center xl:justify-center gap-y-4 h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* Inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[100px] xl:h-max py-8 bg-white/5 backdrop-blur-sm text-3xl xl:text-xl xl: rounded-full">
        {navData.map((link, index) => {
          return( 
          <Link 
          className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
          href={{ pathname: link.path }}
          key={index}
          >
            {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">        
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>      
                  {/* triangle pointer for link label */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
            <div className="font-bold ">
            {/* icons */}
              {link.icon}
            </div>
          </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav