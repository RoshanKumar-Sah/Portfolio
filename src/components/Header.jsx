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
  const mode = useSelector((redux_store)=>{
    return redux_store.mode.value
  })


  return (
    <header className={`customContainer fixed top-0 w-full flex justify-between items-center h-[50px] lg:h-[70px] select-none animeColor ${mode ? 'bg-backgroundNight text-headerLight' : 'bg-backgroundWhite text-headerNight'} `}>
      <h2 className={`uppercase ${open_sans.className} font-extrabold text-2xl tracking-wider cursor-pointer`}><Link href={"/"}>Roshan</Link></h2>
     

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