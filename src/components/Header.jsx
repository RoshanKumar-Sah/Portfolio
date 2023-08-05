import { Open_Sans, Poppins } from 'next/font/google'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import Image from 'next/image'
import LiImage from "@/assets/LiImage1.jpg"
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import Link from 'next/link'

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })


export default function Header() {

  const [isOpen, setOpen] = useState(false)

  return (
    <header className='customContainer fixed top-0 w-full flex justify-between items-center h-[50px] lg:h-[70px] bg-white'>
      <h2 className={`uppercase ${open_sans.className} font-extrabold text-2xl tracking-wider`}>Roshan</h2>
      <nav className={`pr-3 ${poppins500.className} ${isOpen ? 'block absolute top-[50px] z-50 right-0 bg-white h-screen pt-[70px] pb-5 px-5 pl-[100px] text-right' : 'hidden'} lg:block`}>
        <ul className={`flex leading-[38px] ${isOpen ? 'flex-col items-end' : 'flex-row'} `}>
          <li className={`h-20 w-20  ${isOpen ? 'block mb-[50px] mx-5' : 'hidden'} `}><Image src={LiImage} alt='LiImage' className='object-cover w-full h-full' /></li>
          <li className='navLi'>home</li>
          <li className='navLi'>about</li>
          <li className='navLi'>portfolio</li>
          <li className='navLi'>service</li>
          <li className='navLi'>contact</li>
          <li className={`${isOpen ? 'mt-[50px] text-right navLi' : 'hidden'}`}><div className='flex justify-end text-xl gap-2'>
            <Link href={`https://github.com/RoshanKumar-Sah`} target='_blank'><AiFillGithub /></Link>
            <Link href={"https://www.linkedin.com/in/roshan-kumar-sah-1098a8228/"} target='_blank'><AiFillLinkedin /></Link>
            <Link href={"mailto:roshankumarsah1101@gmail.com"} target='_blank'><AiTwotoneMail /></Link>
          </div>
            <p className={`text-header ${poppins300.className} text-[15px] w-fit`}>Copyright &#169; 2023</p>
          </li>
        </ul>
      </nav>

      <div className='lg:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  )
}