import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getCardById, getCards, getCardsByName } from "../services/cards.service"
import { useState } from "react"
import { useDebounce } from "./useDebounce"

export const useGetCards = ( setId, cardName, pageSize = 30 ) => {
    const [nameSearch, setNameSearch] = useState('')
    const [numberSearch, setNumberSearch] = useState('')
    const debouncedName = useDebounce(nameSearch)
    const debouncedNumber = useDebounce(numberSearch)

    const infinityQuery = useInfiniteQuery({
        queryKey: ['cards', { search: debouncedName, cardName, setId, number: debouncedNumber }],
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

    return { ...infinityQuery, setNameSearch, setNumberSearch }
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