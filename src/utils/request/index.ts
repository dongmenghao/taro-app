import Taro from '@tarojs/taro'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const textToast = (msg: string) => {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: 3000
  })
}

const request = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

const errorHandler = error => {
  if (error.response) {
    const { data, status } = error.response
    switch (status) {
      case 400:
        textToast(data.message)
        break
      case 401:
        textToast('未登录')
        break
      case 403:
        textToast('拒绝访问')
        break
      case 404:
        textToast('请求的资源不存在')
        break
      case 500:
        textToast('服务器内部错误')
        break
      case 503:
        textToast('服务器不可用')
        break
      case 504:
        textToast('网关超时')
        break
      case 505:
        textToast('HTTP版本不受支持')
        break
      default:
        textToast('请求失败')
    }
  } else if (error.request) {
    const req: AxiosRequestConfig = error.request
    console.log({ url: req.url })
    textToast('请求已经成功发起，但没有收到服务器响应')
  } else {
    textToast('请求出错, 请稍后再试')
  }
  return Promise.reject(error)
}

const requestHandler = config => {
  const token = Taro.getStorageSync('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

request.interceptors.request.use(requestHandler, errorHandler)
request.interceptors.response.use(response => {
  const { data, message, success } = response.data as BasicResponse<any>
  if (success) {
    return data
  } else {
    textToast(message)
    return Promise.reject(response.data)
  }
})

export type BasicResponse<T> = {
  code: number
  data: T
  message: string
  success: boolean
}

export default request
