import axios from 'axios'

const URL = 'https://v6.exchangerate-api.com/v6/86ac07a01d57484529525c6c/latest/SEK'

const fetchCurrencies = async () => {
  const { data } = await axios.get(URL)

  return data
}

export default fetchCurrencies