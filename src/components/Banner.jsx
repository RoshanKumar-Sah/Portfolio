import { Poppins } from 'next/font/google'
import BannerImage from "@/components/BannerImage"
import { TypeAnimation } from 'react-type-animation';

const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })

export default function Banner() {
    return (
        <section className='h-full'>
            <div className='px-3 lg:pl-[50px]  h-full justify-center flex flex-col gap-[25px] '>
                <h2 className={`text-[40px] sm:text-[60px] lg:text-[55px] uppercase ${poppins700.className}`}>Roshan Sah</h2>
                <hr className='h-1 w-16 bg-black' />
                <h3 className={`py-1 ${poppins600.className} text-header text-[25px]`}><span className={`${poppins300.className} text-content`}>Creative </span><TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Designer',
                        1000, // wait 1s before replacing "Designer" with "Developer"
                        'Web Developer',
                        1000,
                        'MERN Developer',
                        1000,
                        'Frontend Developer',
                        1000,
                        'Backend Developer',
                        1000,
                        'Freelancer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '25px', display: 'inline-block' }}
                    repeat={Infinity}
                />
                </h3>
                <div className={`${poppins500.className} border-2 border-header bg-header text-white hover:bg-white hover:text-header cursor-pointer w-fit py-[10px] px-7 lg:py-[13px] lg:px-8`}><p>Get&nbsp;in&nbsp;Touch</p></div>
            </div>
            {/* </div> */}
        </section>
    )
}