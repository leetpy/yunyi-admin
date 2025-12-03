import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";


const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 99999
})

// http request 拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  }
)

// http response 拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => { }
)

export default service
