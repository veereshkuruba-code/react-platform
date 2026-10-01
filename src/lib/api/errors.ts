import axios from 'axios'

export type ApiError = {
  message: string
  status?: number
  code?: string
}

export function getApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return {
      message:
        error.response?.data?.message ??
        error.message ??
        'Something went wrong',
      status: error.response?.status,
      code: error.code,
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message +"12",
    }
  }

  return {
    message: 'Something went wrong',
  }
}