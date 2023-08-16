import { useRouter } from "next/router"

import { useSelector } from "react-redux"
import { InfinitySpin } from 'react-loader-spinner'


export default function ProtectedPageLogin(PageComponent) {



    function Wrapper() {

        let router = useRouter()

        let { isLoading, value: user } = useSelector((redux_store) => {
            return redux_store.user
        })




        if (isLoading) {
            return <><div className="flex justify-center items-center w-full  h-screen"><InfinitySpin
                height="100"
                width="100"
                color="#333333"
                // ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /></div></>
        } else if (user) {

            router.push("/")
        }

        else {
            return <>
                <PageComponent />
            </>
        }
    }
    return Wrapper
}