import PageLayout from '../../components/PageLayout/PageLayout'
import SearchBar from '../../components/SearchBar/SearchBar'
import SetsContainer from '../../components/SetsContainer/SetsContainer'
import InfinityScroll from '../../components/InfinityScroll/InfinityScroll'
import { useGetSets } from '../../hooks/useSets'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import NoItemFound from '../../components/NoItemFound/NoItemFound'
import ErrorScreen from '../../components/ErrorScreen/ErrorScreen'
import ScrollUpBtn from '../../components/ScrollUpBtn/ScrollUpBtn'
import gengar from '../../assets/gifs/gengar.webp'
import styles from './SetsPage.module.css'
import { useGetQueryParams } from '../../hooks/useGetQueryParams'
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import { useState } from 'react'

export default function SetsPage() {
  const { setName } = useGetQueryParams()
  const [sortDate, setSortDate] = useState('asc')

  const { 
    data, 
    isFetchingNextPage, 
    isFetchNextPageError,
    hasNextPage, 
    fetchNextPage, 
    isLoading,
    isError,
    refetch
  } = useGetSets(setName, sortDate, 50)

  return (
    <PageLayout>
      <div className={styles.searchbar_container}>
        <SearchBar placeholder={'Search sets'} queryParam={'setName'}/>
        <FilterMenu sortDate={sortDate} onChange={setSortDate}/>
      </div>
      {
        isLoading ? <LoadingScreen loadingImage={gengar}/>
        :
        isError && !data ? <ErrorScreen refetchFn={refetch}/>
        :
        data?.pages[0]?.data.length > 0 ? <SetsContainer setsData={data}/>
        :
        <NoItemFound/>
      }
      {
        isFetchingNextPage && <LoadingScreen size='small' loadingImage={gengar}/>
      }
      {
        isFetchNextPageError && !isFetchingNextPage &&
        <ErrorScreen refetchFn={refetch} size='small'/>
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
