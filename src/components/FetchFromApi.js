import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '65'
  },
  headers: {
    'X-RapidAPI-Key': '97d28ea070msh504d2699c806da1p1e9d6cjsnfb113428c92e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  const { data } = 
    await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
