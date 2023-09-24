import { URL_DOMAIN } from "@/const/api_domain"
import axios from "axios"
import { useEffect, useState } from "react"

export default function About(){

    const[about, setAbout] = useState([])
    useEffect(()=>{
axios.get(`${URL_DOMAIN}/api/about`).then(res=>{
    console.log(res);
    setAbout(res.data)
}).catch(err =>{
    console.log(err);
})
    },[])


    return(
        <main className="bg-background w-full overflow-y-scroll">
       <p>About</p>
       <p>{JSON.stringify(about[about.length -1])}</p>
       </main>
    )
}