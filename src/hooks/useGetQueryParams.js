import { useSearchParams } from 'react-router-dom'

export const useGetQueryParams = () => {
const [ searchParams, setSearchParams ] = useSearchParams()
  const paramsObj = Object.fromEntries(searchParams.entries());

  const removeQueryParam = (queryParam) => {
    searchParams.delete(queryParam)
    setSearchParams(searchParams)
  }

  return { ...paramsObj, removeQueryParam }
}