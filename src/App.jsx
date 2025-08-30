import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import useSideMenuStore from "./store/useSideMenuStore";
import { lazy, Suspense } from "react";
import charizard from './assets/gifs/charizard.webp'
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { AnimatePresence } from "motion/react";
import { useMediaQuery } from "react-responsive";

const SideMenu = lazy(() => import("./layout/SideMenu/SideMenu"))

export default function App() {
  const isOpen = useSideMenuStore((state) => state.isOpen)
  const isMobile = useMediaQuery({ maxWidth: 630 })

  return (
    <>
      <Header/>
      <Suspense fallback={ 
        <LoadingScreen 
          loadingModalMode={'full_width'} 
          loadingImage={charizard}
          loadingTitle="Loading component..."
        /> 
      }>
        <AnimatePresence>
          { isOpen && isMobile && <SideMenu/> }
        </AnimatePresence>
      </Suspense>
      <Main/>
      <Footer/>
    </>
  )
}
