import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'https://example.com/api'
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在请求发送之前对请求进行处理
  console.log('请求拦截器：', config)
  return config
}, error => {
  // 对请求错误进行处理
  console.log('请求错误：', error)
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据进行处理
  console.log('响应拦截器：', response)
  return response
}, error => {
  // 对响应错误进行处理
  console.log('响应错误：', error)
  return Promise.reject(error)
})

// 封装 httpservices 模块
const httpservices = {
  get (url, params) {
    return instance.get(url, { params })
  },

  post (url, data) {
    return instance.post(url, data)
  }
}

export default httpservices
