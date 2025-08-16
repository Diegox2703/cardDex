import { useInfiniteQuery } from '@tanstack/react-query'
import { getSets } from '../services/sets.service'
import { useState } from 'react'
import { useDebounce } from './useDebounce'

export const useGetSets = (pageSize = 30) => {
    const [query, setQuery] = useState('')
    const debouncedSearch = useDebounce(query)

    const infinityQuery = useInfiniteQuery({
        queryKey: ['sets', debouncedSearch],
        queryFn: ({ pageParam, signal }) => getSets({ name: debouncedSearch, pageParam, pageSize, signal }),
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1
            return nextPage <= lastPage.totalPages ? nextPage : undefined
        },
        refetchOnWindowFocus: false,
    })

    return { ...infinityQuery, setQuery }
}