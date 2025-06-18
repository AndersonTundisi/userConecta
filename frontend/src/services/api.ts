import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // ou a URL do seu NestJS
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;