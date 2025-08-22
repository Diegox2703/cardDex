import PageLayout from '../../components/PageLayout/PageLayout'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import { useGetCards } from '../../hooks/useCards'
import InfinityScroll from '../../components/InfinityScroll/InfinityScroll'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import ErrorScreen from '../../components/ErrorScreen/ErrorScreen'
import ScrollUpBtn from '../../components/ScrollUpBtn/ScrollUpBtn'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import Tag from '../../components/Tag/Tag'
import { useGetQueryParams } from '../../hooks/useGetQueryParams'
import NoItemFound from '../../components/NoItemFound/NoItemFound'
import styles from './CardsPage.module.css'

export default function CardsPage() {
  const { set, cardName, cardNumber, removeQueryParam } = useGetQueryParams()

  const { 
    data, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage, 
    isLoading,
    isError,
    refetch,
    isFetchNextPageError,
  } = useGetCards(set, cardName, cardNumber, 50)

  return (
    <PageLayout>
      <div className={styles.seachbars_container}>
        <SearchBar placeholder={'Search cards'} queryParam={'cardName'}/>
        <SearchBar placeholder={'Number'} queryParam={'cardNumber'} type='number' size='small' icon={faHashtag}/>
      </div>

      {
        isLoading ? <LoadingScreen/>
        :
        isError && !data ? <ErrorScreen refetchFn={refetch}/>
        :
        data?.pages[0].data.length > 0 ?
        <>
          {
            set && 
            <Tag size='normal' variant='secondary' deleteBtn deleteBtnFn={() => removeQueryParam('set')}>
              { data?.pages[0]?.data[0]?.setName }
            </Tag>
          }
          <CardsContainer cardsData={data}/>
        </>
        :
        <NoItemFound/>
      }

      {
        isFetchingNextPage && <LoadingScreen size='small'/>
      }

      {
        isFetchNextPageError && !isFetchingNextPage &&
        <ErrorScreen size='small' refetchFn={refetch}/>
      }

      {
        hasNextPage && !isFetchingNextPage && !isFetchNextPageError
        &&
        <InfinityScroll 
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      }

      <ScrollUpBtn/>
    </PageLayout>
  )
}
