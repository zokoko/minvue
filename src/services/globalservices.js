import httpservices from '@/services/httpservices'

export default {
  getUser (url, params, headers) {
    return httpservices.get(url, params, headers)
  },

  updateUser (id, data) {
    return httpservices.post(url, params, headers)
  }
}
