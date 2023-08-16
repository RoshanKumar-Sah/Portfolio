import { Open_Sans, Poppins } from 'next/font/google'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import Image from 'next/image'
import LiImage from "@/assets/LiImage1.jpg"
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/redux/slice/userSlice'
import 'animate.css';
import Navigation from './Nav'

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })


export default function Header() {

  const [isOpen, setOpen] = useState(false)
const [out, setOut] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((redux_store)=>{
    return redux_store.user.value
  })

  return (
    <header className='customContainer fixed top-0 w-full flex justify-between items-center h-[50px] lg:h-[70px] bg-white select-none'>
      <h2 className={`uppercase ${open_sans.className} font-extrabold text-2xl tracking-wider cursor-pointer`}><Link href={"/"}>Roshan</Link></h2>
      {/* <nav className={`pr-3 ${poppins500.className} ${isOpen ? 'block absolute top-[50px] z-50 right-0 bg-white h-screen pt-[70px] pb-5 px-5 pl-[100px] text-right animate__animated animate__fadeInRight animate__faster' : 'hidden'} lg:block`}>
        <ul className={`flex leading-[38px] ${isOpen ? 'flex-col items-end' : 'lg:flex-row'} `}>
          <li className={`h-20 w-20  ${isOpen ? 'block mb-[50px] mx-5' : 'hidden'} `}><Image src={LiImage} alt='LiImage' className='object-cover w-full h-full' /></li>
        {
          user ? <li className='navLi' onClick={()=>{dispatch(logout())}} >Logout</li> : <li className='navLi'><Link href={"/adminPanel/login"}>Admin</Link></li>
        }  
          
          <li className='navLi'><Link href={"/"}>home</Link></li>
          <li className='navLi'><Link href={"/about"}>about</Link></li>
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
      </nav> */}

      {/* <nav className={`pr-3 ${poppins500.className} block absolute top-[50px] z-50 right-0 bg-white h-screen pt-[70px] pb-5 px-5 pl-[100px] text-right lg:top-0 lg:pt-0 lg:pb-0 lg:px-0 lg:pl:0 lg:text-start lg:h-fit lg:relative lg:z-auto ${isOpen ? 'animate__animated animate__fadeInRight animate__faster' : 'animate__animated animate__fadeOutRight animate__faster'}`}>
        <ul className={`flex leading-[38px] flex-col items-end lg:flex-row lg:items-start`}>
          <li className={`h-20 w-20 block mb-[50px] mx-5 lg:hidden`}><Image src={LiImage} alt='LiImage' className='object-cover w-full h-full' /></li>
        {
          user ? <li className='navLi' onClick={()=>{dispatch(logout())}} >Logout</li> : <li className='navLi'><Link href={"/adminPanel/login"}>Admin</Link></li>
        }  
          
          <li className='navLi'><Link href={"/"}>home</Link></li>
          <li className='navLi'><Link href={"/about"}>about</Link></li>
          <li className='navLi'>portfolio</li>
          <li className='navLi'>service</li>
          <li className='navLi'>contact</li>
          <li className={`mt-[50px] text-right navLi lg:hidden`}><div className='flex justify-end text-xl gap-2'>
            <Link href={`https://github.com/RoshanKumar-Sah`} target='_blank'><AiFillGithub /></Link>
            <Link href={"https://www.linkedin.com/in/roshan-kumar-sah-1098a8228/"} target='_blank'><AiFillLinkedin /></Link>
            <Link href={"mailto:roshankumarsah1101@gmail.com"} target='_blank'><AiTwotoneMail /></Link>
          </div>
            <p className={`text-header ${poppins300.className} text-[15px] w-fit`}>Copyright &#169; 2023</p>
          </li>
        </ul>
      </nav> */}

<div className='hidden lg:block '>
      <Navigation />
      </div>

<div onClick={()=>{setOpen(false)}} className={`absolute top-0 right-0 lg:hidden ${isOpen ? 'animate__animated animate__fadeInRightBig animate__faster' : 'animate__animated animate__fadeOutRightBig animate__fast'}`}>
      
        {/* <div className={`lg:hidden`}> */}
        <Navigation />
        {/* </div> */}
      

</div>


      <div className='lg:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
  )
}