import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://example.com/api'
})

instance.interceptors.request.use(config => {
  // 处理请求
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  // 处理响应
  return response
}, error => {
  return Promise.reject(error)
})

const httpservices = {
  request (method, url, data, headers = {}) {
    return instance({
      method,
      url,
      data,
      headers
    })
  },

  get (url, params, headers = {}) {
    console.log('get', url, params, headers);
    return instance.get(url, params, headers)
  },

  post (url, params, headers = {}) {
    return instance.post(url, params, headers)
  }
}

export default httpservices
