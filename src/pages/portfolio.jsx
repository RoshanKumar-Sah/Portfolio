import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Open_Sans, Poppins } from 'next/font/google'
import { URL_DOMAIN } from "@/const/api_domain"
import axios from "axios"
import Banner from "@/assets/banner.jpg"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa";
import PortfolioCard from "@/components/PortfolioCard";
import { IoCloseSharp } from "react-icons/io5";
import { closeSinglePortfolio } from "@/redux/slice/portfolioSlice";
import { useEffect, useState } from "react";
import { endPoint } from "@/const/end_point"
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MdImageNotSupported } from "react-icons/md";
import { startLoading, stopLoading } from "@/redux/slice/userSlice";


const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })

export default function Portfolio() {


    const dispatch = useDispatch()

    const [portfolios, setPortfolios] = useState(null)

    useEffect(() => {
        axios.get(`${URL_DOMAIN}${endPoint.portfolio}`).then((res) => {
            console.log(res);
            setPortfolios(res?.data)
        }).catch(err => {
        })
    }, [])

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    const singlePortfolio = useSelector(redux_store => {
        return redux_store.portfolio.value
    })
    const [portfolioDetails, setPortfolioDetails] = useState({})

    function handlePortfolioClose() {
        dispatch(closeSinglePortfolio())
    }

    useEffect(() => {
        if (singlePortfolio) {

            axios.get(`${URL_DOMAIN}${endPoint.singlePortfolio}${singlePortfolio}`).then((res) => {
                console.log(res);
                setPortfolioDetails(res?.data)

            }).catch(err => {
            })
        }
    }, [singlePortfolio])

    return (
        <main className={`overflow-x-hidden scroll-smooth px-3 lg:pl-[50px] pt-20 animeColor ${mode ? 'bg-backgroundNight' : 'bg-backgroundLight'} w-full overflow-y-scroll ${open_sans.className} flex flex-col gap-14`}>

            <Head><title>Roshan | Portfolio</title></Head>

            <div className="animate__animated animate__fadeIn animate__slower">
                <div className="flex items-center">
                    <h3 className={`${poppins700.className} uppercase text-base tracking-[7px] animeColor ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Creative&nbsp;Portfolio</h3>
                    <hr className={`animeColor ${mode ? 'bg-backgroundWhite border-0' : 'bg-contentNight/50'} rounded-md h-[1.7px] w-full ml-4  sm:ml-8`}></hr>
                </div>

                <div className={`grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-2 my-14`}>

                    {
                        portfolios?.length ? portfolios.map((portfolio) => {
                            return (
                                <PortfolioCard key={portfolio._id} portfolio={portfolio} />
                            )
                        }): null
                    }
                </div>



            </div>




            <div className={` ${singlePortfolio ? 'block' : 'hidden'} transition-all duration-500 ease-linear  animate__animated animate__fadeIn animate__slow border-box absolute backdrop-filter backdrop-blur-sm bg-opacity-60 bg-black w-full h-screen left-0 top-0 pt-20 p-4 md:p-20 lg:px-80 z-40`}>


                <div className="flex flex-col-reverse items-end md:items-start md:flex-row gap-4">

                    <div className={`p-1 md:mt-10 mb-44 h-[500px] w-full bg-backgroundWhite overflow-scroll scroll-smooth`}>
                        <div className="p-8 h-2/3">
                            {
                                portfolioDetails?.image ? <Image src={portfolioDetails?.image} height={1024} width={1024} alt="portfolioImage" className={`w-full h-full object-cover`} /> : <h2 className={`flex justify-center items-center h-full gap-4 text-headerNight`}>Image Not Found <MdImageNotSupported /></h2>}
                        </div>

                        <div className="px-8 pb-8 text-justify">

                            <span className={`pb-8 flex justify-between`}><h2 className={`capitalize ${poppins700.className} cursor-default text-headerNight text-[22px] leading-[26px] font-bold`}>{portfolioDetails?.title}</h2> <span className={`flex gap-4`}><Link href={portfolioDetails?.liveURL ? portfolioDetails?.liveURL : '#'} target="_blank"><FaExternalLinkAlt size={21} className={`cursor-pointer`} /></Link><Link href={portfolioDetails?.repoURL ? portfolioDetails?.repoURL : '#'} target="_blank"><FaGithub size={21} className={`cursor-pointer`} /></Link></span></span>

                            <p className={`text-contentNight ${open_sans.className} leading-[27px] text-base cursor-default`}>
                                {portfolioDetails?.description}
                            </p>
                        </div>
                    </div>
                    <div className={`border-2 text-white border-backgroundWhite flex justify-center items-center p-2 h-fit w-fit text-lg cursor-pointer rounded-lg transition-all ease-in-out duration-500 hover:rounded-full md:mt-10 `} onClick={handlePortfolioClose} >
                        <IoCloseSharp />
                    </div>
                </div>

            </div>


        </main>
    )
}


// export async function getServerSideProps() {

//     let portfolioURL = `${URL_DOMAIN}/api/portfolio`
//     let resPortfolio = await axios.get(portfolioURL)
//     return {
//         props: {
//             portfolios: (resPortfolio?.data)

//         }
//     }
// }