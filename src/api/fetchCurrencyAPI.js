import axios from 'axios';

const URL = 'https://v6.exchangerate-api.com/v6/e95bbab067a4b018d0a9e300/latest/SEK'

export const fetchCurrencyAPI = async () => {
    const { data } = await axios.get(URL)

    return data
}