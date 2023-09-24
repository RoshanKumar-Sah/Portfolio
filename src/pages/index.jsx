import Image from 'next/image'
import { Open_Sans, Poppins } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import Link from 'next/link';
import BannerImage from "@/components/BannerImage"
import Banner from '@/components/Banner';
import { useSelector } from 'react-redux';

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })


export default function Home() {

  const mode = useSelector(redux_store =>{
    return redux_store.mode.value
})


  return (
    <main className={`w-full animeColor  ${mode ? ' bg-backgroundNight':'bg-backgroundLight'}`}>

      <Banner />



    </main>
  )
}
