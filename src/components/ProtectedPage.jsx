import { useRouter } from "next/router"

import { useSelector } from "react-redux"
import HashLoader from "react-spinners/HashLoader";


export default function ProtectedPageLogin(PageComponent) {



    function Wrapper() {

        let router = useRouter()

        let { isLoading, value: user } = useSelector((redux_store) => {
            return redux_store.user
        })




        if (isLoading) {
            return <><div className="flex justify-center items-center w-full  h-screen">

                <HashLoader
                    color='#000000'
                    loading={isLoading}
                    // cssOverride={override}
                    size={120}
                />
            </div></>
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