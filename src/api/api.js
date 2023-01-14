import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ceacademy.world/',
  // baseURL: 'http://localhost:5000',
});

export default api;
