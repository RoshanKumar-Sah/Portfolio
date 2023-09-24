import { URL_DOMAIN } from "@/const/api_domain";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Open_Sans, Poppins } from 'next/font/google'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slice/userSlice";
import ProtectedPageLogin from "@/components/ProtectedPage";
import PulseLoader from "react-spinners/PulseLoader";
import { Size } from "tsparticles-engine";


const poppins500 = Poppins({ subsets: ['latin'], weight: "500" })

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [spinnerColor, setSpinnerColor] = useState("#000000")
  const router = useRouter();
  const dispatch = useDispatch();

  const mode = useSelector((redux_store) => {
    return redux_store.mode.value
  })

  useEffect(() => {
    if (userName && password) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [userName, password]);

  useEffect(() => {
    if (mode) {
      setSpinnerColor("#000000")
    } else{
      setSpinnerColor("#ffffff")
    }
  }, [mode])

  function handleSubmit(event) {
    event.preventDefault();
    let validation = false
    if (userName && password) {
      validation = true
    }

    if (validation) {
      setSubmitting(true)
      axios.post(`${URL_DOMAIN}/api/login`, {
        username: userName,
        password: password
      }).then(res => {
        // console.log(res.data.username);
        dispatch(setUser(res.data.username))
        localStorage.setItem("PortToken", res.data.token)

        // setSubmitting(false)
        router.push("/")
      }).catch(err => {
        console.log(err);
        toast.error(err?.response?.data?.msg, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
        })

        if (err?.response?.data?.errors) {
          err.response.data.errors.forEach(er => {
            toast.error(er.message, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored"
            })
          }
          )
        }



        setSubmitting(false)
        // console.log(errors);
      })

    }


  }

  return (
    <main className={`animeColor ${mode ? 'bg-backgroundNight text-headerLight' : 'bg-backgroundLight text-headerNight'} w-full align-middle flex justify-center`}>

      <div className="mt-1/2">
        <ToastContainer className="mt-60" />
      </div>

      <form
        className={`${poppins500.className} h-full flex flex-col justify-center customContainer w-full sm:max-w-lg md:max-w-lg`}
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm text-header">
            Username
          </label>
          <input
            type="text"
            id="text"
            name="userName"
            className="bg-gray-50 border border-gray-300 text-headerNight text-sm rounded-lg  block w-full p-2.5 outline-none"
            placeholder="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm  text-header"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300  text-headerNight text-sm rounded-lg  block w-full p-2.5 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          disabled={disable}
          className={` ${disable ? 'cursor-not-allowed' : 'cursor-pointer'} ${mode ? 'text-headerNight disabled:bg-backgroundWhite/80 bg-backgroundWhite' : 'text-white disabled:bg-backgroundNight/80 bg-backgroundNight'} rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}>
          
          {submitting ? <PulseLoader color={spinnerColor} size={10} /> : 'Submit'}


        </button>
      </form>
    </main>
  );
}

export default ProtectedPageLogin(Login)