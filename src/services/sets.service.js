import { setAdapter } from '../adapters/set.adapter.js'
import { buildPokemonQuery } from '../util/buildPokemonQuery.js'
import api from './api.js'

export const getSets = async ({ setName, pageParam = 1, pageSize, signal }) => {
    const nameQueryParam = setName ? buildPokemonQuery('name', setName) : ''

    const { data } = await api.get(`sets?page=${pageParam}&pageSize=${pageSize}&q=${nameQueryParam}`, { signal })
    return {
        page: data.page,
        pageSize: data.pageSize,
        totalPages: Math.ceil(data.totalCount / data.pageSize),
        data: data.data.map(setAdapter)
    }
}