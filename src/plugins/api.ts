import axios from 'axios'

// Replace with your environment variable, e.g.,
// import.meta.env.VITE_API_URL for Vite or process.env.REACT_APP_API_URL for CRA
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export function setupAxios() {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access')
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}

console.log(api)
export default api
