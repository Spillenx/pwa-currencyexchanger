import axios from 'axios';

const URL = 'https://v6.exchangerate-api.com/v6/128066843728e01e510e3096/latest/SEK'

export const fetchCurrencyAPI = async () => {
    const { data } = await axios.get(URL)

    return data
}