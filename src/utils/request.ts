import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  timeout: 10000,
  baseURL: '/', // let Vite proxy handle /rest -> http://mystore.local
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Add token + cookie if available
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt-token')
    const session = localStorage.getItem('php-session')

    if (token && config.url && !config.url.includes('/integration/admin/token')) {
      config.headers.Authorization = `Bearer ${token}`
    }
    if (session) {
      config.headers.Cookie = `PHPSESSID=${session}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  ({ data }) => data,
  ({ message, response }) => Promise.reject(response ? response.data : message)
)

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return instance(config)
}

export default instance
