import axios from 'axios'

import { env } from '@/config/env'
import { getApiError } from './errors'

const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000,
})

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(getApiError(error)),
)

export default apiClient