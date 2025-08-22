import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import charizard from '../../assets/gifs/charizard.webp'
import styles from './Main.module.css'

const CardsPage = lazy(() => import('../../pages/CardsPage/CardsPage'))
const SetsPage = lazy(() => import('../../pages/SetsPage/SetsPage'))
const CardDetailsPage = lazy(() => import('../../pages/CardDetailsPage'))
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const NoItemFound = lazy(() => import('../../components/NoItemFound/NoItemFound'))

export default function Main() {
  const { pathname } = useLocation()

  return (
    <main className={`${styles.main} ${ pathname === '/' ? styles.dark : '' }`}>
      <div className={styles.main_content}>
        <Suspense fallback={<LoadingScreen loadingImage={charizard} loadingTitle='Loading component...'/>}>
          <Routes>
              <Route path='/cards' element={ <CardsPage/> }/>
              <Route path='/sets' element={ <SetsPage/> }/>
              <Route path='/card/:id' element={ <CardDetailsPage/> }/>
              <Route path='/' element={ <HomePage/> }/>
              <Route path='*' element={ <NoItemFound/> }/>
          </Routes>
        </Suspense>
      </div>
    </main>
  )
}
