import { useEffect, useRef } from "react"

export const useInfinityScroll = ( hasNextPage, isFetchingNextPage, fetchNextPage ) => {
    const infinityScrollRef = useRef(null)

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]

        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage()
    },{
        threshold: 0.5
    })

    if (infinityScrollRef.current) observer.observe(infinityScrollRef.current)

    return () => {
        if (infinityScrollRef.current) {
        observer.unobserve(infinityScrollRef.current)
        }  
    } 
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    return infinityScrollRef
}