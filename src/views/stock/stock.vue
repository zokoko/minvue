<template>
  <div class="about">
    666
    <h1>{{ count }}</h1>
    <button @click="add">点击</button>
  </div>
</template>

<script>
import axios from 'axios'
import httpservices from '@/services/httpservices'
export default {
  name: 'Stock',
  methods: {
    add: function () {
      console.log(this)
      this.$store.dispatch('module1/add')
      let url = 'https://www.baidu.com'
      httpservices
        .get(url, { page: 1 })
        .then((response) => {
          console.log('GET 响应：', response)
        })
        .catch((error) => {
          console.log('GET 错误：', error)
        })

      httpservices
        .post(url, { name: 'Alice' })
        .then((response) => {
          console.log('POST 响应：', response)
        })
        .catch((error) => {
          console.log('POST 错误：', error)
        })

      // axios({
      //   method: 'post',
      //   url: '/api/luyou/post',
      //   data: {
      //     date1: '2020-09-07'
      //   }
      // }).then((res) => console.log(res))
      console.log('submit!')
    }
  },
  computed: {
    count: function () {
      return this.$store._state.data.module1.count
    }
  }
}
</script>
