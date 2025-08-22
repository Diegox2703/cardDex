import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getCardById, getCards, getCardsByName } from "../services/cards.service"

export const useGetCards = ( set, cardName, cardNumber, pageSize = 30 ) => {
    return useInfiniteQuery({
        queryKey: ['cards', { cardName, set, cardNumber }],
        queryFn: ({ pageParam, signal, queryKey }) => {
            const [, filterParams] = queryKey
            
            return getCards({ filterParams, pageSize, signal, pageParam })
        },
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1
            return nextPage <= lastPage.totalPages ? nextPage : undefined
        },
        refetchOnWindowFocus: false,
    })
}

export const useGetCardById = (id) => {
    return useQuery({
        queryKey: ['card', id],
        queryFn: ({ signal }) => getCardById({ id, signal }),
        refetchOnWindowFocus: false,
    })
}

export const useGetCardsByName = (name, pageSize = 12) => {
    return useQuery({
        queryKey: ['card', name],
        queryFn: ({ signal }) => getCardsByName({ name, signal,pageSize }),
        refetchOnWindowFocus: false,
    })
}