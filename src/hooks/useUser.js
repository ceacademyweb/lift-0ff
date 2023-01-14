import { useQuery } from '@tanstack/react-query';
import api from '../api/api.js';
// import login from '../pages/Login.jsx';

const fetchUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};
export function useFetchUsers() {
  return useQuery(['users'], fetchUsers);
}

const fetchVideos = async () => {
  const { data } = await api.get('/videos');
  return data;
};
export function useFetchVideos() {
  return useQuery(['videos'], fetchVideos);
}
