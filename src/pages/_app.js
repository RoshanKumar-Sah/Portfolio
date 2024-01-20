import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerImage from "@/components/BannerImage";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { URL_DOMAIN } from "@/const/api_domain";
import axios from "axios";
import store from "@/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setUser, stopLoading } from "@/redux/slice/userSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { setmode } from "@/redux/slice/modeSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "@/components/Loader";

function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  const [isDarkMode, setDarkMode] = useState(false);
  // const [innerColor, setInnerColor] = useState('#333333')

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (!isDarkMode) {
      dispatch(setmode(true));
      // setInnerColor('#ffffff')
    } else {
      dispatch(setmode(false));
    }
  };

  const mode = useSelector((redux_store) => {
    return redux_store.mode.value;
  });

 

 

  useEffect(() => {
    dispatch(setmode(isDarkMode));
    if (localStorage.getItem("PortToken")) {
      axios
        .get(`${URL_DOMAIN}/api/getUser`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("PortToken")}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data.username));
        })
        .catch((err) => {
          // console.log(err);
        });
    } else {
      setTimeout(()=>{

        dispatch(stopLoading());
      },2000)
    }
  }, []);

  return (
    <>

   
        <Loader />
    

      <Header />
      <main className={`lg:customContainer flex pt-[50px] lg:py-[70px] fixed w-full  h-screen -z-10 animeColor ${mode ? "bg-backgroundNight" : "bg-backgroundWhite"}`}>
        <div className="absolute top-20 z-10 right-3 lg:right-20 lg:hidden">
          <DarkModeSwitch style={{ marginBottom: "0rem" }} checked={isDarkMode} onChange={toggleDarkMode} size={40} sunColor="#000000" moonColor="#f6f6f6" />
        </div>
        <BannerImage />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

const WithReduxProvider = (App) => {
  function Wrapper(props) {
    return (
      <Provider store={store}>

        <App {...props} /></Provider>
    );
  }
  return Wrapper;
};

export default WithReduxProvider(App);
