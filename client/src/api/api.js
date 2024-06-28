import store  from '../store/store';
import axios from 'axios';

const api = axios.create({
  baseURL:  import.meta.env.VITE_API_URL,
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  console.log('Interceptor token:', token);
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
