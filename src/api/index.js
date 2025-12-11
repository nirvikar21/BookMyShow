import axios from 'axios';
const api = axios.create({
  baseURL: 'https://movie-db-nine-chi.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  
});


export default api;