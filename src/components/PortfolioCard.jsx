import Banner from "@/assets/banner.jpg"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa";
import { Open_Sans, Poppins } from 'next/font/google'
import Link from "next/link";
import { MdImageNotSupported } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setSinglePortfolio } from "@/redux/slice/portfolioSlice";

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })



export default function PortfolioCard({ portfolio }) {

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    const dispatch = useDispatch()

    function handlePortfoioClick(e) {
       e?.target?.id && dispatch(setSinglePortfolio(e.target.id))
    }

    console.log(portfolio);
    return (
        <div className="relative ">
            <span className={`text-textWhite absolute text-lg top-4 right-4 transition-all ease-in-out duration-1000 hover:text-2xl `}><Link href={portfolio?.liveURL} className={`${portfolio?.image ? 'text-textWhite' : mode ? 'text-textWhite' : 'text-headerNight'}`} target="_blank"><FaExternalLinkAlt /></Link></span>
            <div onClick={handlePortfoioClick} className={`cursor-pointer select-none w-full h-72 group border ${mode ? 'border-contentLight/40 rounded-sm' : 'border-transparent'}`}>
                {portfolio.image ? <Image id={portfolio._id} src={portfolio?.image} height={1024} width={1024} alt="portfolioImage" className={`w-full h-full object-cover`} /> : <h2 id={portfolio._id} className={`flex justify-center items-center h-full gap-4 ${mode ? 'text-textWhite' : 'text-headerNight'}`}>Image Not Found <MdImageNotSupported /></h2>}
                <div className={`absolute flex justify-center -bottom-5 -z-10 h-20 w-full bg-transparent transition-all ease-linear duration-500 group-hover:bottom-8 group-hover:z-10`}>
                    <div className={`bg-backgroundWhite w-[90%] h-full flex flex-col gap-[2px] p-4`}>
                        <h2 className={`font-semibold ${open_sans.className}  text-headerNight leading-[26px] capitalize line-clamp-1`}>{portfolio?.title}</h2>
                        <p className={`text-sm text-contentNight capitalize line-clamp-1`}>{portfolio?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}