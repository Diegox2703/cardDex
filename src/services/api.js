import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    // headers: {
    //     'X-Api-Key': 'cc685cff-5bba-405f-8eb2-660646d3912f'
    // }
})

export default api