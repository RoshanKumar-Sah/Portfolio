import Link from "next/link"
import { Poppins } from 'next/font/google'
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })

export default function Footer(){
    return(
        <footer className='customContainer bg-white hidden lg:flex justify-between w-full fixed bottom-0  items-center h-[70px]'>
        <p className={`text-header ${poppins300.className} text-[15px]`}>Copyright &#169; 2023</p>
  
        <div className='flex text-xl gap-2 pr-8'>
          <Link href={`https://github.com/RoshanKumar-Sah`} target='_blank'><AiFillGithub  /></Link>
          <Link href={"https://www.linkedin.com/in/roshan-kumar-sah-1098a8228/"} target='_blank'><AiFillLinkedin /></Link>
          <Link href={"mailto:roshankumarsah1101@gmail.com"} target='_blank'><AiTwotoneMail /></Link>
        </div>
      </footer>
    )
}