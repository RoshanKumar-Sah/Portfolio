import Head from "next/head";
import { useSelector } from "react-redux";
import { Open_Sans, Poppins } from 'next/font/google'
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_DOMAIN } from "@/const/api_domain";
import { endPoint } from "@/const/end_point";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })


export default function Contact() {

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    const [about, setAbout] = useState(null)
    const [email, setEmail] = useState(null)

    useEffect(() => {
        axios.get(`${URL_DOMAIN}${endPoint.about}`).then((res) => {
            // console.log(res.data[res.data.length -1]);
            setAbout({ ...res.data[res.data.length - 1] })
        }).catch((err) => {
        })
    }, [])


    useEffect(() => {
        if (about) {
            setEmail(about?.email?.split('@'));
        }
    }, [about])


    return (
        <main className={`overflow-x-hidden scroll-smooth px-3 lg:pl-[50px] pt-20 animeColor ${mode ? 'bg-backgroundNight' : 'bg-backgroundLight'} w-full overflow-y-scroll ${open_sans.className} flex flex-col gap-14`}>
            <Head><title>Roshan | Contact</title></Head>


            <div className="animate__animated animate__fadeIn animate__slower">
                <div>
                    <div className="flex items-center">
                        <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Get&nbsp;In&nbsp;Touch</h3>
                        <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                    </div>

                    <div className="my-14">
                        <div className={`grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-3`}>
                            <div className={`flex w-full flex-col gap-3 py-5 px-[10px] items-center border animeColor ${mode ? 'border-contentLight/40 bg-headerNight' : 'border-contentNight/40 bg-backgroundLight'}`}>
                                <IoLocation size={21} className={`animeColor ${mode ? 'text-headerLight' : 'text-contentNight'}`} />
                                <span className={`${open_sans.className} break-word text-center animeColor ${mode ? 'text-headerLight' : 'text-contentNight'} text-base font-normal leading-[27px]`}>{about?.address}</span>
                            </div>



                            <div className={`flex w-full flex-col gap-3 py-5 px-[10px] items-center border animeColor ${mode ? 'border-contentLight/40 bg-headerNight' : 'border-contentNight/40 bg-backgroundLight'}`}>
                                <IoMail size={21} className={`animeColor ${mode ? 'text-headerLight' : 'text-contentNight'}`} />
                                <span className={`${open_sans.className} flex flex-col break-all text-center animeColor ${mode ? 'text-headerLight' : 'text-contentNight'} text-base font-normal `}>{email && <><span className="block">{email[0]}</span><span className="block">@</span><span className="block">{email[1]}</span></>}</span>
                            </div>

                            <div className={`flex w-full flex-col gap-3 py-5 px-[10px] items-center border animeColor ${mode ? 'border-contentLight/40 bg-headerNight' : 'border-contentNight/40 bg-backgroundLight'}`}>
                                <FaPhone size={21} className={`animeColor ${mode ? 'text-headerLight' : 'text-contentNight'}`} />
                                <span className={`${open_sans.className} break-all text-center animeColor ${mode ? 'text-headerLight' : 'text-contentNight'} text-base font-normal leading-[27px]`}>+977 {about?.phone}</span>
                            </div>
                        </div>
                    </div>


<div className="my-14">

</div>

                </div>
            </div>
        </main>
    )
}