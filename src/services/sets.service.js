import { setAdapter } from '../adapters/set.adapter.js'
import api from '../config/axios.js'

export const getSets = async ({ setName, pageParam = 1, pageSize, signal }) => {
    const { data } = await api.get(`/sets`, { 
        params: {
            page: pageParam,
            pageSize,
            name: setName
        },
        signal
     })

    return {
        page: data.page,
        totalPages: data.totalPages,
        data: data.data.map(setAdapter)
    }
}