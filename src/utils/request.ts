import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 99999
})

// http request 拦截器
service.interceptors.request.use()

// http response 拦截器
service.interceptors.response.use()

export default service
