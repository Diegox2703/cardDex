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
        pageSize: data.pageSize,
        totalPages: Math.ceil(data.totalCount / data.pageSize),
        data: data.data.map(setAdapter)
    }
}