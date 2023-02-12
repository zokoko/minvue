import httpservices from '@/services/httpservices'
import urls from '../configs/urls'

export default {
  getStock (params, headers) {
    return httpservices.get(urls.getStock, params, headers)
  },

  updateUser (id, data) {
    return httpservices.post(url, params, headers)
  }
}
