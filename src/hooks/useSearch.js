import { useEffect, useState } from "react"
import { useDebounce } from "./useDebounce"
import { useGetQueryParams } from "./useGetQueryParams"

export const useSearch = (queryParam) => {
    const { removeQueryParam, setQueryParam, [queryParam]:queryValue } = useGetQueryParams()
    const [search, setSearch] = useState(queryValue || '')
    const debouncedSearch = useDebounce(search)
    
    useEffect(() => {
        if (!queryValue && search !== '') return setSearch('')
        if (queryValue && search === '') setSearch(queryValue)
    }, [queryValue])

    useEffect(() => {
        if (debouncedSearch.trim() !== '') return setQueryParam(queryParam, debouncedSearch)
        removeQueryParam(queryParam)
    }, [debouncedSearch])


    return { setSearch, search }
}