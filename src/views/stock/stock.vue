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
import globalservices from '@/services/globalservices'
export default {
  name: 'Stock',
  methods: {
    add: function () {
      console.log(this)
      this.$store.dispatch('module1/add')
      let url =
        'http://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/1/ajax/1/'

      const params = {
        page: 1,
        num: 20,
        sort: 'changepercent',
        order: '新能源',
        _: 1570380675094
      }

      const headers = {
        Referer: 'http://q.10jqka.com.cn/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
      }
      globalservices
        .getUser(url, params, headers)
        .then((response) => {
          console.log('获取用户信息：', response.data)
        })
        .catch((error) => {
          console.log('获取用户信息错误：', error)
        })
      // httpservices
      //   .get(url, headers, params)
      //   .then((response) => {
      //     console.log('GET 响应：', response)
      //   })
      //   .catch((error) => {
      //     console.log('GET 错误：', error)
      //   })

      // httpservices
      //   .post(url, params, headers)
      //   .then((response) => {
      //     console.log('POST 响应：', response)
      //   })
      //   .catch((error) => {
      //     console.log('POST 错误：', error)
      //   })

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
