import React from 'react'
import { FaLinkedin, FaDev, FaGitSquare } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import reach_me from '../../../public/reach_me.jpeg'
import Image from 'next/image';
import Link from 'next/link'

const Contact = () => {

  const SOCIAL = [
    {
      id: 1, 
      link: "https://www.linkedin.com/in/kandis-arzu-thompson/",
      icon: <FaLinkedin />,
    },
    {
      id: 2, 
      link: "https://github.com/PhoenixMomof2",
      icon: <FaGitSquare />,
    },
    {
      id: 3, 
      link: "https://dev.to/kandis",
      icon: <FaDev />,
    },
    {
      id: 4, 
      link: "/contact",
      icon: <AiOutlineMail />,
    },
  ]

  return (    
    <div className="page">
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-8'>
        {/* left */}
        <div className='col-span-1 lg:col-span-1 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
            <div>
              <Image
                className='rounded-xl hover:scale-105 ease-in duration-300'
                src={reach_me}
                alt='/'
              />
            </div>
            <div>
              <h2 className='text-3xl py-2 text-red-600 italic dark:text-red-800'>Kandis Arzu-Thompson</h2>
              <p className="text-bold">Full Stack Developer</p>
              <p className='py-4'>
              Drawing upon my diverse background in early childhood education and sports performance, I bring a unique perspective as a software engineer. As I embark on my journey as a full-stack developer, I am driven by a deep commitment to leadership and problem-solving. With an unwavering focus on diversity and financial independence, I am passionate about creating positive change through innovative software solutions. Through collaborative efforts, creative thinking, and an unyielding pursuit of excellence, I am dedicated to shaping a better future for individuals and communities alike.
              </p>
            </div>
            
            <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/kandis-arzu-thompson/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='text-3xl md:text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-600'>
                      <FaLinkedin />
                    </div>
                  </a>
                  <a
                    href='https://github.com/PhoenixMomof2'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='text-3xl md:text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-600'>
                      <FaGitSquare />
                    </div>
                  </a>
                  <a
                    href='mailto:k.arzuthompson@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                  <div className='text-3xl md:text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-600'>
                    <AiOutlineMail />
                  </div>
                  </a>
                  <Link href="/KandisArzu-ThompsonResume.pdf" target="_blank" download={true}>
                  <div className='text-3xl md:text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-600'>
                    <BsFillPersonLinesFill />
                  </div> 
                  </Link>
                </div>
              </div>
            </div>
          </div> 

        {/* right */}
        <div className='col-span-1 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                  
      <h2 className='py-4 text-center text-red-600'>Contact Me 📨</h2>
              <form
                action='"https://getform.io/f/c0bafa9a-1002-4c32-a46a-71ee30512de5"'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 rounded-xl bg-gradient-to-r from-rose-600 to-yellow-500 hover:scale-105 ease-out duration-300'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>  
      </div>
  )
}

export default Contact