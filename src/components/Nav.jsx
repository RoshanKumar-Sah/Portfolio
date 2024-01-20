
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import LiImage from "@/assets/LiImage1.jpg"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import { logout } from '@/redux/slice/userSlice'
import { useState } from 'react'

const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
export default function Navigation(view) {


  const dispatch = useDispatch()
  const user = useSelector((redux_store) => {
    return redux_store.user.value
  })

 
  const mode = useSelector((redux_store) => {
    return redux_store.mode.value
  })

 

  return (
    <nav className={` pr-3 ${poppins500.className} block absolute top-[50px]  z-50 right-0 h-screen pt-[70px] pb-5 px-5 pl-[100px] text-right  lg:top-0 lg:pt-0 lg:pb-0 lg:px-0 lg:pl:0 lg:text-start lg:h-fit lg:relative  ${mode ? 'bg-backgroundNight' : 'bg-backgroundWhite'} lg:bg-transparent`}>
      <ul className={`flex leading-[38px] flex-col items-end lg:flex-row lg:items-start`}>
        <li className={`h-20 w-20 block mb-[50px] mx-5 lg:hidden`}><Image src={LiImage} alt='LiImage' className='object-cover w-full h-full' /></li>
        <Link href={"/"}><li className={`navLi  ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>home</li></Link>
        <Link href={"/about"}><li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>about</li></Link>
        <Link href={"/portfolio"}> <li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>portfolio</li></Link>
        <Link href={"/service"}><li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>service</li></Link>
        <Link href={"/contact"}> <li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>contact</li></Link>
        {
          user ? <li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`} onClick={() => { dispatch(logout()) }} >Logout</li> : <Link href={"/adminPanel/login"}><li className={`navLi ${mode ? 'navLiNight hover:text-headerNight' : 'navLiDay hover:text-textWhite'}`}>Admin</li></Link>
        }
        <li className={`mt-[50px] text-right navLi lg:hidden`}><div className='flex justify-end text-xl gap-2'>
          <Link href={`https://github.com/RoshanKumar-Sah`} target='_blank'><AiFillGithub /></Link>
          <Link href={"https://www.linkedin.com/in/roshan-kumar-sah-1098a8228/"} target='_blank'><AiFillLinkedin /></Link>
          <Link href={"mailto:roshankumarsah1101@gmail.com"} target='_blank'><AiTwotoneMail /></Link>
        </div>
          <p className={`text-header ${poppins300.className} text-[15px] w-full`}>Copyright&nbsp;&#169;&nbsp;2023</p>
        </li>
      </ul>
    </nav>
  )
}