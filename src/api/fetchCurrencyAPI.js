import axios from 'axios';

const URL = 'add you key from exchangerate-api.com here'

export const fetchCurrencyAPI = async () => {
    const { data } = await axios.get(URL)

    return data
}