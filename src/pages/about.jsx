import { URL_DOMAIN } from "@/const/api_domain"
import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Open_Sans, Poppins } from 'next/font/google'
import { useDispatch, useSelector } from "react-redux"
import { MdArrowRight } from 'react-icons/md'
import { Line, Circle } from 'rc-progress';
import Slider from "react-slick";
import Image from "next/image"
import 'animate.css';
import { endPoint } from "@/const/end_point"
import { FaUser } from "react-icons/fa";
import User from "@/assets/user.png"
import { startLoading, stopLoading } from "@/redux/slice/userSlice"

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })


export default function About() {

    const [stroke, setStroke] = useState("#7D7789")
    const [trailColor, setTrailColor] = useState("#D9D9D9")
    const [about, setAbout] = useState({})
    const [testimonial, setTestimonial] = useState([])

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${URL_DOMAIN}${endPoint.about}`).then((res) => {
            // console.log(res.data[res.data.length -1]);
            setAbout({ ...res.data[res.data.length - 1] })
        }).catch((err) => {
        })

        axios.get(`${URL_DOMAIN}${endPoint.testimonials}`).then((res) => {
            setTestimonial([...res.data])
        }).catch((err) => {
        })
    }, [])

    useEffect(() => {
        if (mode) {
            setStroke('#FAF9F6')
            setTrailColor('#7D7789')
        } else {
            setStroke('#7D7789')
            setTrailColor('#D9D9D9')
        }
    }, [mode])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            // {
            //     breakpoint: 1440,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1
            //     }
            //   },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    console.log('testimonial', testimonial);

    return (
        <main className={`overflow-x-hidden scroll-smooth px-3 lg:pl-[50px] pt-20 animeColor ${mode ? 'bg-backgroundNight' : 'bg-backgroundLight'} w-full overflow-y-scroll ${open_sans.className} flex flex-col gap-14`}>
            <Head><title>Roshan | About</title></Head>
            <div className="animate__animated animate__fadeIn animate__slower">
                <div>
                    <div className="flex items-center">
                        <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>About&nbsp;Me</h3>
                        <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                    </div>
                    <div className="my-14">
                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-0 md:gap-14`}>

                            <p className={`font-normal animeColor ${mode ? 'text-textWhite' : 'text-contentNight'} leading-relaxed text-justify `}>{about.summary}</p>
                            <div className={`flex gap-4 animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}>
                                <ul className="space-y-2">
                                    <li className={`detailsKey`}><span>Name:</span></li>
                                    <li className='detailsKey'><span>Address:</span></li>
                                    <li className='detailsKey'><span>Study:</span></li>
                                    <li className='detailsKey'><span>Degree:</span></li>
                                    {/* <li className='detailsKey'><span>Mail:</span></li> */}
                                    {/* <li className='detailsKey'><span>Phone:</span></li> */}
                                </ul>
                                <ul className="space-y-[10px] md:pr-44">
                                    <li className='whitespace-nowrap'><span className="">{about.name}</span></li>
                                    <li className='whitespace-nowrap'><span>{about.address}</span></li>
                                    <li className='whitespace-nowrap'><span>{about.study}</span></li>
                                    <li className=''><span>{about.degree}</span></li>
                                    {/* <li className=''><span>xxxxxxxxxx@gmail.com</span></li> */}
                                    {/* <li className=''><span>+977-xxxxxxxxx</span></li> */}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Services</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>
                        <ul className="space-y-2 my-14">

                            {
                                about?.service?.map((service, idx) => {
                                    return <li className={`flex item-center animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`} key={`${service}${idx}`}><span className={`inline-block animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}><MdArrowRight size={24} /></span>{service}</li>

                                })
                            }
                        </ul>

                    </div>

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Experience</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 my-14">
                            {
                                about?.experience?.map((experience, idx) => {
                                    return <li className="mb-4 ms-4" key={`${experience}${idx}`}>
                                        <div className="absolute w-3 h-3 bg-backgroundGray rounded-full mt-1.5 -start-1.5 border border-backgroundWhite"></div>
                                        <div className="flex gap-4">
                                            <time className="mb-1 text-xs font-normal leading-none text-center text-contentNight bg-backgroundGray h-fit p-2 rounded-3xl">{JSON.parse(experience).from} - {JSON.parse(experience).to}</time>
                                            <div>
                                                <h3 className={`${poppins600.className} font-semibold animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>{JSON.parse(experience).title}</h3>
                                                <p className={`mb-4 text-base font-normal animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}>{JSON.parse(experience).organization}</p>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }

                        </ol>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Skills</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>
                        <ul className="space-y-6 my-14">

                            {
                                about?.programming?.map((programming, idx) => {
                                    return <li className={`uppercase animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`} key={`${programming}${idx}`}>
                                        <span className={`flex justify-between`}>
                                            <span>{JSON?.parse(programming)?.title}</span>
                                            <span>{JSON?.parse(programming)?.proficiency}%</span>
                                        </span>
                                        <Line percent={JSON?.parse(programming)?.proficiency} strokeWidth={1} strokeColor={stroke} trailColor={trailColor} strokeLinecap='round' />
                                    </li>

                                })
                            }
                        </ul>

                    </div>

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Training</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700 my-14">
                            {
                                about?.training?.map((training, idx) => {
                                    return <li className="mb-4 ms-4" key={`${training}${idx}`}>
                                        <div className="absolute w-3 h-3 bg-backgroundGray rounded-full mt-1.5 -start-1.5 border border-backgroundWhite"></div>
                                        <div className="flex gap-4">
                                            <time className="mb-1 text-xs text-center font-normal leading-none text-contentNight bg-backgroundGray h-fit p-2 rounded-3xl">{JSON.parse(training).from} - {JSON.parse(training).to}</time>
                                            <div>
                                                <h3 className={`${poppins600.className} font-semibold animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>{JSON.parse(training).title}</h3>
                                                <p className={`mb-4 text-base font-normal animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}>{JSON.parse(training).institute}</p>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }

                        </ol>
                    </div>

                 
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Education</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>

                        <ol className="relative border-s border-gray-200 dark:border-gray-700 my-14">
                            {
                                about?.education?.map((education, idx) => {
                                    return <li className="mb-4 ms-4" key={`${education}${idx}`}>
                                        <div className="absolute w-3 h-3 bg-backgroundGray rounded-full mt-1.5 -start-1.5 border border-backgroundWhite"></div>
                                        <div className="flex gap-4">
                                            <time className="mb-1 text-xs font-normal leading-none text-contentNight bg-backgroundGray h-fit p-2 rounded-3xl">{JSON.parse(education).from} - {JSON.parse(education).to}</time>
                                            <div>
                                                <h3 className={`${poppins600.className} font-semibold animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>{JSON.parse(education).degree}</h3>
                                                <p className={`mb-4 text-base font-normal animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}>{JSON.parse(education).institute}</p>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }

                        </ol>



                    </div>

                    <div>
                        <div className="flex items-center">
                            <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Language</h3>
                            <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                        </div>
                        <ul className="my-14 flex flex-wrap justify-between">

                            {
                                about?.language?.map((language, idx) => {
                                    return <li className={`animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`} key={`${language}${idx}`}>
                                        <Circle percent={JSON?.parse(language)?.proficiency} strokeWidth={2} trailWidth={2} trailColor={trailColor} strokeColor={stroke} className='h-28' />
                                        <span className="mt-1 text-center w-full inline-block capitalize">{JSON?.parse(language)?.title} {JSON?.parse(language)?.proficiency}%</span>
                                    </li>

                                })
                            }
                        </ul>
                    </div>

                    
                </div>


                {/* <div className="grid grid-cols-1">
                    <div className="flex items-center">
                        <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Testimonials</h3>
                        <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                    </div>

                    <Slider {...settings} className="mt-14 pb-20 cursor-ew-resize">
                        {testimonial?.map((testimonial, idx) => {
                            return <div key={`testimonial${idx}`} className="sm:pr-8">
                                <p className={`line-clamp-4 ${open_sans.className} text-base p-10 box-border overflow-hidden border-solid border-borderGray border-2 font-normal animeColor ${mode ? 'text-textWhite' : 'text-contentNight'}`}>{testimonial?.description}</p>

                                <div className="mt-7 pl-5 flex gap-5">
                                    <div>{
                                        testimonial.profileImage != null && testimonial.profileImage != " " ? <Image src={testimonial.profileImage} width={60} height={60} alt="profileImage" className="grayscale h-14 w-14 rounded-full object-cover" /> : <Image src={User} width={60} height={60} alt="profileImage" className="grayscale h-14 w-14 rounded-full object-cover bg-headerLight p-2" />
                                    }</div>
                                    <div>
                                        <h3 className={`capitalize text-base mb-1 font-semibold ${poppins600.className} animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>{testimonial?.name}</h3>
                                        <span className={`capitalize text-sm animeColor ${open_sans.className} ${mode ? 'text-textWhite' : 'text-contentNight'}`}>{testimonial?.title}</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </Slider>
                </div> */}
            </div>
        </main>

    )
}


// export async function getServerSideProps() {

//     let aboutURL = `${URL_DOMAIN}/api/about`
//     let testimonialURL = `${URL_DOMAIN}/api/testimonial`
//     let resAbout = await axios.get(aboutURL)
//     let resTestimonial = await axios.get(testimonialURL)
//     // console.log(res.data[res.data.length - 1]);
//     // console.log(resTestimonial.data);
//     return {
//         props: {
//             about: (resAbout?.data[resAbout?.data?.length - 1]),
//             testimonial: resTestimonial?.data
//         }
//     }
// }