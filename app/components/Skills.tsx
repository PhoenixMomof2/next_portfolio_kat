import Image from 'next/image';
import Link from 'next/link';
import HTML from '../../public/html.png'
import CSS from '../../public/css.png';
import Javascript from '../../public/javascript.png';
import ReactImg from '../../public/react.png';
import Tailwind from '../../public/tailwind.png';
import Rails from '../../public/rails.png';
import Node from '../../public/node.png';
import Ruby from '../../public/ruby.png'
import GitHub from '../../public/github.png'
import Postgre from '../../public/postgresql.png'
import Next from '../../public/nextjs.png'
import Redux from '../../public/redux.png'

const Skills = () => {
  return (
    <div className="flex flex-col text-center px-12 justify-end">
        <h1 className='tracking-widest uppercase font-bold text-red-600 h1'>
          Tech Stack
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          <Link  href="https://www.w3schools.com/js/default.asp"
          target="_blank" 
          rel="noopener noreferrer">                 
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                    <Image src={Javascript} width={30} height={30} alt="JavaScript" priority={true}/>                 
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">JavaScript</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/html/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                  <Image src={HTML} width={30} height={30} alt="html" priority={true}/> 
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">HTML</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/css/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CSS} width={30} height={30} alt="CSS" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">CSS</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/react/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width={30} height={30} alt="React" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">React</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://guides.rubyonrails.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto '>
                <Image src={Rails} width={30} height={30} alt="Rails" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Rails</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://tailwindcss.com/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width={30} height={30} alt="Tailwind" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Tailwind</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.w3schools.com/nodejs/default.asp"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width={30} height={30} alt="Node" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Node.js</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://ruby-doc.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Ruby} width={30} height={30} alt="Ruby" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Ruby</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://www.postgresql.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Postgre} width={30} height={30} alt="Postgre" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-lg">PostgreSQL</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://github.com/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={GitHub} width={30} height={30} alt="GitHub" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">GitHub</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://nextjs.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className="dark:bg-white" src={Next} width={30} height={30} alt="GitHub" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-lg">Next.js</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link href="https://redux.js.org/"
            target="_blank" 
            rel="noopener noreferrer">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Redux} width={30} height={30} alt="Redux" priority={true}/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="text-xl">Redux</h3>
              </div>
            </div>
          </div>
          </Link>
        </div>      
    </div>
  );
};
export default Skills;