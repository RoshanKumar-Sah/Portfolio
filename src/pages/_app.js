import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BannerImage from '@/components/BannerImage'

export default function App({ Component, pageProps }) {
  return<>
  <Header />
  <main className='lg:customContainer flex pt-[50px] lg:py-[70px] fixed w-full  h-screen -z-10'>
  <BannerImage />
   <Component {...pageProps} />
   </main>
   <Footer />
   </>
}
