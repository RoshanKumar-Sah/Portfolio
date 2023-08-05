
import Banner from "@/assets/banner.jpg"
import Image from "next/image"

export default function BannerImage(){
    return(
        <div className='hidden  lg:block h-full  max-w-[400px]'>

    <Image src={Banner} alt='banner' className='max-w-[400px] h-full  object-cover' />
    </div>
    )
}