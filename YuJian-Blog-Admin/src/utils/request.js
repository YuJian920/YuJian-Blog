import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // 如果返回的状态码不为0
    if (res.code !== 0) {
      Message({
        message: res.msg || '请求异常',
        type: 'error',
        duration: 5 * 1000
      })

      // 如果返回的状态码为-2，则Token失效
      if (res.code === -2) {
        MessageBox.confirm('Token 失效，请重新登录', 'Token异常', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || '请求异常'))
    } else {
      return res
    }
  },
  error => {
    // console.log('err', { error })
    const { msg } = error.response.data
    Message({
      message: msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
