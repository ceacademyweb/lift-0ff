import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ceacademy-auth-production.up.railway.app',
  // baseURL: 'http://localhost:5000',
});

export default api;
