import { useInfiniteQuery } from '@tanstack/react-query'
import { getSets } from '../services/sets.service'

export const useGetSets = (setName, sortDate, pageSize = 30) => {
    return useInfiniteQuery({
        queryKey: ['sets', setName, sortDate],
        queryFn: ({ pageParam, signal }) => getSets({ setName, sortDate, pageParam, pageSize, signal }),
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1
            return nextPage <= lastPage.totalPages ? nextPage : undefined
        },
        refetchOnWindowFocus: false,
    })
}