import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import useSideMenuStore from "./store/useSideMenuStore";
import { lazy, Suspense } from "react";
import charizard from './assets/gifs/charizard.webp'
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const SideMenu = lazy(() => import("./layout/SideMenu/SideMenu"))

export default function App() {
  const isOpen = useSideMenuStore((state) => state.isOpen)

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
        { isOpen && <SideMenu/> }
      </Suspense>
      <Main/>
      <Footer/>
    </>
  )
}
