import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export function setupAxios(){
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access');
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

  export default api
