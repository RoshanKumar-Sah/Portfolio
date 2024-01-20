import Image from 'next/image'
import { Open_Sans, Poppins } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import Link from 'next/link';
import BannerImage from "@/components/BannerImage"
import Banner from '@/components/Banner';
import { useSelector } from 'react-redux';
import Head from 'next/head';


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
       {/* <span className="hidden md:inline-block"> */}
       {/* <AnimatedCursor innerSize={8} outerSize={35} innerScale={1} outerScale={2} color="60,60,60" outerAlpha={.1} hasBlendMode={true} showSystemCursor={true} innerStyle={{ backgroundColor: "#333333" }}
            outerStyle={{ border: "2px solid #808080", transition: "color 0.3s ease" }} className="hidden md:inline-block"/> */}
            {/* </span> */}
<Head>
  <title>Roshan | Home</title>
</Head>
      <Banner />



    </main>
  )
}
