import { useDispatch, useSelector } from "react-redux"
import { AiOutlineApi } from "react-icons/ai"
import { Open_Sans, Poppins } from 'next/font/google'
import { CgWebsite } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { setSingleService } from "@/redux/slice/serviceSlice";

const open_sans = Open_Sans({ subsets: ['latin'] })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })
const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })
const poppins700 = Poppins({ subsets: ['latin'], weight: "700" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })



export default function ServiceCard({ service }) {

    const mode = useSelector((redux_store) => {
        return redux_store.mode.value
    })

    const dispatch = useDispatch()
    
    function handleServiceClick(e) {
        dispatch(setSingleService(e?.target?.id))
    }

    return (
        <div id={service?.id} onClick={handleServiceClick} className={`py-[70px] select-none cursor-pointer px-10 border group animeColor ${mode ? 'border-contentLight/40 bg-headerNight hover:bg-backgroundLight hover:border-contentNight/40' : 'border-contentNight/40 bg-backgroundLight hover:bg-headerNight hover:border-contentLight/40'}`}>
            <div id={service?.id} className={`w-full h-full flex flex-col items-center gap-[15px]`}>

                {
                    service?.id === 1 && <AiOutlineCode id={service?.id} size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' : 'text-headerNight group-hover:text-headerLight'}`} />
                }

                {
                    service?.id === 2 && <MdOutlineWeb id={service?.id} size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' : 'text-headerNight group-hover:text-headerLight'}`} />
                }

                {
                    service?.id === 3 && <AiOutlineApi id={service?.id} size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' : 'text-headerNight group-hover:text-headerLight'}`} />
                }

                {
                    service?.id === 4 && <CgWebsite id={service?.id} size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' : 'text-headerNight group-hover:text-headerLight'}`} />
                }

                {
                    service?.id === 5 && <IoSettings id={service?.id} size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' : 'text-headerNight group-hover:text-headerLight'}`} />
                }

                {/* <AiOutlineApi size={60} className={`animeColor ${mode ? 'text-headerLight  group-hover:text-headerNight ' :'text-headerNight group-hover:text-headerLight'}`} /> */}
                <h2 id={service?.id} className={`${open_sans.className} text-center font-medium leading-[27px] text-xl animeColor ${mode ? 'text-headerLight group-hover:text-headerNight' : 'text-headerNight group-hover:text-headerLight'} mb-3`}>{service?.title}</h2>
                <p id={service?.id} className={`animeColor ${mode ? 'text-contentLight group-hover:text-contentNight' : 'text-contentNight group-hover:text-contentLight'} ${open_sans.className} line-clamp-4 text-center`}>{service?.description}</p>
            </div>
        </div>
    )
}