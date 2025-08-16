import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails/CardDetails'
import PageLayout from '../components/PageLayout/PageLayout'
import { useGetCardById } from '../hooks/useCards'
import { useImageViewer } from '../hooks/useImageViewer'
import Carousel from '../components/Carousel/Carousel'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'
import ErrorScreen from '../components/ErrorScreen/ErrorScreen'
import NoItemFound from '../components/NoItemFound/NoItemFound'
import charizard from '../assets/gifs/charizard.webp'
import charmanderDancing from '../assets/gifs/charmander-dancing.webp'
import { lazy, Suspense } from 'react'

const ImageViewer = lazy(() => import('../components/ImageViewer/ImageViewer'))

export default function CardDetailsPage() {
  const { id } = useParams()
  const { isOpen, openImageViewer, closeImageViewer, image } = useImageViewer()
  const { data, isLoading, isError, error, refetch } = useGetCardById(id)
  
  if (isLoading) return <LoadingScreen loadingImage={charmanderDancing}/>

  if (isError && error?.status === 404) return <NoItemFound/>

  if (isError) return <ErrorScreen refetchFn={refetch}/>

  return (
    <PageLayout>
      <CardDetails openImageViewerFn={openImageViewer} cardData={data}/>
      <Suspense fallback={ 
        <LoadingScreen 
          loadingImage={charizard} 
          loadingModalMode={'full_width_overlay'}
          loadingTitle='Loading component...'
        /> 
      }>
        { isOpen && <ImageViewer closeImageViewerFn={closeImageViewer} image={image}/> }
      </Suspense>
      <Carousel cardName={data?.name}/>
    </PageLayout>
  )
}
