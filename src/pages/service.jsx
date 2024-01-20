import { useDispatch, useSelector } from "react-redux"
import { Open_Sans, Poppins } from 'next/font/google'
import Head from "next/head"
import FrontEndImage from "@/assets/frontEnd.jpg"
import BackEndImage from "@/assets/backEnd.jpg"
import WebAppImage from "@/assets/webApp.jpg"
import LandingPageImage from "@/assets/landingPage.jpg"
import CMSImage from "@/assets/cms.jpg"
import { AiOutlineApi } from "react-icons/ai"
import ServiceCard from "@/components/ServiceCard"
import { useEffect, useState } from "react"
import { closeSingleService } from "@/redux/slice/serviceSlice"
import { MdImageNotSupported } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image"


const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })




export default function Services() {
    const mode = useSelector((redux_store) => {
        return redux_store.mode.value
    })

    const singleService = useSelector(redux_store => {
        return redux_store.service.value
    })

    const dispatch = useDispatch()
    const [singleServiceDetails, setSingleServiceDetails] = useState(null)

    const services = [
        { id: 1,
             title: 'Web App Development',
              description: 'Step into the digital future with our web app development services that seamlessly blend creativity and technology. From the frontend, we harness the power of HTML, CSS, and dynamic JavaScript frameworks like React, Next.js, Vite, and Angular. Our expertise extends to Tailwind CSS for sleek and responsive designs. On the backend, we rely on the efficiency of Express.js, paired with MongoDB for robust data handling. Our approach is agile, ensuring quick adaptations, and our user-centric design philosophy guarantees interfaces that captivate and engage. Choose us for a dynamic web presence, where innovation meets reliability. Contact us to transform your ideas into a feature-rich and responsive reality.',
               image: WebAppImage },
        { id: 2,
             title: 'Frontend Development',
              description: 'Unlock the potential of your digital presence with our specialized frontend development services. We harness the versatility of HTML and CSS for foundational structure and style, complemented by the dynamic capabilities of JavaScript and TypeScript. Dive into the world of modern libraries and frameworks, such as React, Next.js, Vite, and Angular, to create intuitive, responsive, and visually striking user interfaces. Our proficiency extends to Tailwind CSS, ensuring sleek and efficient designs. Elevate your user experience and make a lasting impression with our expert frontend development solutions. Contact us to bring your web interface to life.',
               image: FrontEndImage },
        { id: 3,
             title: 'Backend Development',
              description: 'Empower your web applications with our robust backend development services. At the core of our solutions is Express.js, providing a solid foundation for server-side development. Paired seamlessly with MongoDB, our backend architecture ensures efficient data handling and scalability. We prioritize reliability and performance, allowing your application to grow seamlessly as your user base expands. Our agile development approach guarantees flexibility and quick adaptations to evolving needs. Choose us for a backend that not only supports but enhances your digital endeavors. Contact us to fortify your web application with a dependable and scalable backend infrastructure.',
               image: BackEndImage },
        { id: 5,
             title: 'Custom Management System Development',
              description: 'Embark on a transformative journey with our Custom Management System Development Services. We specialize in crafting tailored solutions to address the unique requirements of your business. Our expert team leverages cutting-edge technologies and a deep understanding of your workflow to design and develop management systems that enhance efficiency and streamline operations. From scalable architecture to intuitive interfaces, we prioritize every detail. Let us empower your organization with a custom management system that grows alongside your ambitions. Contact us today to revolutionize your workflow and optimize your business processes.',
               image: CMSImage }
    ]

    useEffect(() => {
        if (singleService) {
            services.forEach((service) => {
                if (service?.id == singleService) {
                    return setSingleServiceDetails({ ...service })
                }
            })

        } else {
            return setSingleServiceDetails(null)
        }
    }, [singleService])

    function handleServiceClose() {
        dispatch(closeSingleService())
    }



    return (
        <main className={`overflow-x-hidden scroll-smooth px-3 lg:pl-[50px] pt-20 animeColor ${mode ? 'bg-backgroundNight' : 'bg-backgroundLight'} w-full overflow-y-scroll ${open_sans.className} flex flex-col gap-14`}>
            <Head><title>Roshan | Service</title></Head>

            <div className="animate__animated animate__fadeIn animate__slower">
                <div>
                    <div className="flex items-center">
                        <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Services</h3>
                        <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                    </div>
                </div>

                <div className={`grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-2 my-14`}>


                    {
                        services?.map((service) => {
                            return <ServiceCard key={`${service?.id}Service`} service={service} />
                        })
                    }

                </div>


            </div>


            <div className={` ${singleServiceDetails ? 'block' : 'hidden'} transition-all duration-500 ease-linear  animate__animated animate__fadeIn animate__slow border-box absolute backdrop-filter backdrop-blur-sm bg-opacity-60 bg-black w-full h-screen left-0 top-0 pt-20 p-4 md:p-20 lg:px-80 z-40`}>


                <div className="flex flex-col-reverse items-end md:items-start md:flex-row gap-4">

                    <div className={`p-1 md:mt-10 mb-44 h-[500px] w-full bg-backgroundWhite overflow-scroll scroll-smooth`}>
                        <div className="p-8 h-2/3">
                            {
                                singleServiceDetails?.image ? <Image src={singleServiceDetails?.image} height={1024} width={1024} alt="portfolioImage" className={`w-full h-full object-cover grayscale animate__animated animate__fadeIn animate__slower`} /> : <h2 className={`flex justify-center items-center h-full gap-4 text-headerNight`}>Image Not Found <MdImageNotSupported /></h2>}
                        </div>

                        <div className="px-8 pb-8 text-justify">

                            <span className={`pb-8 flex justify-between`}><h2 className={`capitalize ${poppins700.className} cursor-default text-headerNight text-[22px] leading-[26px] font-bold`}>{singleServiceDetails?.title}</h2></span>

                            <p className={`text-contentNight ${open_sans.className} leading-[27px] text-base cursor-default`}>
                                {singleServiceDetails?.description}
                            </p>
                        </div>
                    </div>
                    <div className={`border-2 text-white border-backgroundWhite flex justify-center items-center p-2 h-fit w-fit text-lg cursor-pointer rounded-lg transition-all ease-in-out duration-500 hover:rounded-full md:mt-10 `} onClick={handleServiceClose} >
                        <IoCloseSharp />
                    </div>
                </div>

            </div>


        </main>
    )
}