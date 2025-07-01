import axios from "axios";

const api = axios.create({
  baseURL: 'https://resumeai-api.onrender.com/api/',
});

export function setupAxios(){
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access');
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

  export default api
