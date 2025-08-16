import { useInfinityScroll } from '../../hooks/useInfinityScroll'
import './InfinityScroll.css'

export default function InfinityScroll({ hasNextPage, isFetchingNextPage, fetchNextPage }) {
  const infinityScrollRef = useInfinityScroll( hasNextPage, isFetchingNextPage, fetchNextPage )

  return (
    <div ref={infinityScrollRef} className='infinity-scroll'></div>
  )
}
