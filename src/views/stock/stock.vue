<template>
  <div class="about">
    666
    <h1>{{ count }}</h1>
    <button @click="add">点击</button>
  </div>
  <div id="table"></div>
</template>

<script>
import globalservices from '@/services/globalservices'
// const { exec } = require('child_process')
import { exec } from 'child_process'

export default {
  name: 'Stock',
  data() {
    return {
      tableData: null,
      temptxt: 'hello'
    }
  },
  computed: {
    count: function () {
      return this.$store._state.data.module1.count
    }
  },
  created() {
    var that = this
    console.log('temptxt', that.count)
    // 调用Node.js命令 'node ./node/test2.js'
    // exec('node test2.js', (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`执行出错: ${error}`)
    //     return
    //   }
    //   console.log(`输出结果: ${stdout}`)
    // })
  },
  mounted() {
    this.getNodeRes()
  },
  methods: {
    getNodeRes() {
      const params = {
        page: 1,
        num: 20,
        sort: 'changepercent',
        order: '医疗',
        _: 1570380675094
      }

      globalservices.getNodeRes(params).then((res) => {
        console.log('getNodeRes', res)
      })
    },
    add: function () {
      console.log(this)
      this.$store.dispatch('module1/add')
      // let url =
      //   'http://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/1/ajax/1/'
      let url = 'http://www.baidu.com'

      const params = {
        page: 1,
        num: 20,
        sort: 'changepercent',
        order: '医疗',
        _: 1570380675094
      }

      const headers = {
        Referer: 'http://q.10jqka.com.cn/',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
      }

      globalservices
        .getStock(params, headers)
        .then((res) => {
          // console.log('获取用户信息：', res.data)
          const divElement = document.getElementById('table')
          const newElement = document.createElement('p')
          this.tableData = res.data
          console.log('getStock', typeof res.data)
          newElement.innerHTML = this.tableData
          divElement.appendChild(newElement)
        })
        .catch((error) => {
          console.log('获取用户信息错误：', error)
        })

      console.log('submit!')
    }
  }
}
</script>
