import { useSelector } from "react-redux"
import { Open_Sans, Poppins } from 'next/font/google'
import Head from "next/head"


const open_sans = Open_Sans({ subsets: ['latin'] })

export default function PageNotFound() {

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    return (
        <main className={`overflow-x-hidden px-3 lg:pl-[50px] pt-20 animeColor ${mode ? 'bg-backgroundNight text-backgroundWhite' : 'bg-backgroundLight text-headerNight'} w-full overflow-y-scroll ${open_sans.className} flex flex-col justify-center items-center gap-14`}>
            <Head><title>Roshan | 404</title></Head>
            <h1 className="text-xl">404 | Page Not Found</h1>
        </main>
    )
}