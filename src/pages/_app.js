import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BannerImage from '@/components/BannerImage'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { URL_DOMAIN } from '@/const/api_domain';
import axios from 'axios';
import store from '@/redux/store'
import { Provider, useDispatch } from 'react-redux'
import { setUser, stopLoading } from '@/redux/slice/userSlice';


function App({ Component, pageProps }) {

  const dispatch = useDispatch()

  useEffect(()=>{

    if(localStorage.getItem("PortToken")){
      axios.get(`${URL_DOMAIN}/api/getUser`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("PortToken")}`
        }
      }).then(res=>{
        

        dispatch(setUser(res.data.username))

      }).catch(err => {
        // console.log(err);
      })
    }else{
      dispatch(stopLoading())
    }

  },[])


  return<>
  <Header />
  <main className='lg:customContainer flex pt-[50px] lg:py-[70px] fixed w-full  h-screen -z-10'>
  <BannerImage />
   <Component {...pageProps} />
   </main>
   <Footer />
   </>
}


const WithReduxProvider = (App) => {
  function Wrapper(props) {

    return <Provider store={store}>
      <App {...props} />
    </Provider>

  }

  return Wrapper
}

export default WithReduxProvider(App)