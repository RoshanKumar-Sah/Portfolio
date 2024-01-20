import { useSelector } from "react-redux"
import { Triangle } from 'react-loader-spinner'
import 'animate.css';
import { useEffect, useState } from "react";


export default function Loader() {

    const mode = useSelector(redux_store => {
        return redux_store.mode.value
    })

    const isLoading = useSelector((redux_store) => {
        return redux_store.user.isLoading
    })

    const [hide, setHide] = useState(false)

    useEffect(() => {
        isLoading ? setHide(false) : setTimeout(() => { setHide(true) }, 100)
    }, [isLoading])

    return (

        <div className={`h-screen flex justify-center items-center absolute top-0 w-full backdrop-blur-sm duration-1000 transition-all ease-in ${mode ? 'bg-backgroundLight/70' : 'bg-headerNight/70'} ${isLoading ? 'z-50 block animate__animated animate__slow animate__fadeIn' : 'animate__animated animate__slow animate__fadeOut -z-50'}`}>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color={mode ? "#333333" : "#F6FBFF"}
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    )
}