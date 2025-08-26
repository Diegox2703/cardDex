import { cardAdapter, cardByIdAdapter } from '../adapters/card.adapter.js'
import api from '../config/axios.js'

export const getCards = async ({ filterParams, pageSize, signal, pageParam = 1 }) => {
    const { data } = await api.get('/cards', { 
        params: {
            page: pageParam,
            pageSize: pageSize,
            ...filterParams
        },
        signal
     })
    
    return {
        page: data.page,
        pageSize: data.pageSize,
        totalPages: Math.ceil(data.totalCount / data.pageSize),
        data: data.data.map(cardAdapter) 
    }
}

export const getCardsByName = async ({ name, signal, pageSize }) => { 
    const { data } = await api.get('/cards', { 
        params: {
            pageSize,
            name
        },
        signal
     })
    return {
        totalCount: data.totalCount,
        data: data.data.map(cardAdapter)
    }
}

export const getCardById = async ({ id, signal }) => {
    const { data } = await api.get(`/cards/${id}`, { signal })

    return cardByIdAdapter(data.data)
}