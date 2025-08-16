import { cardAdapter, cardByIdAdapter } from '../adapters/card.adapter.js'
import { buildPokemonQuery } from '../util/buildPokemonQuery.js'
import api from './api.js'

export const getCards = async ({ filterParams, pageSize, signal, pageParam = 1 }) => {
    const { search, cardName, setId, number } = filterParams

    const nameQueryParam = search !== '' ? buildPokemonQuery('name', search) : 
                           cardName ? buildPokemonQuery('name', cardName) : ''

    const setQueryParam = setId ? `set.id:*${setId}*` : ''

    const numberQueryParam = number !== '' ? `number:${number}` : ''

    const { data } = await api.get(
        `/cards?page=${pageParam}&pageSize=${pageSize}&q=${nameQueryParam} ${setQueryParam} ${numberQueryParam}`, 
        { signal }
    )
    
    return {
        page: data.page,
        pageSize: data.pageSize,
        totalPages: Math.ceil(data.totalCount / data.pageSize),
        data: data.data.map(cardAdapter) 
    }
}

export const getCardsByName = async ({ name, signal, pageSize }) => { 
    const nameQueryParam = buildPokemonQuery('name', name)

    const { data } = await api.get(`/cards?pageSize=${pageSize}&q=${nameQueryParam}`, { signal })
    return {
        totalCount: data.totalCount,
        data: data.data.map(cardAdapter)
    }
}

export const getCardById = async ({ id, signal }) => {
    const { data } = await api.get(`/cards/${id}`, { signal })

    return cardByIdAdapter(data.data)
}