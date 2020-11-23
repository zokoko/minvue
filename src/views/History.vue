<template>
  <div class="about">
    <!-- <h1>{{count}}</h1> -->
    <h1>{{record}}</h1>
    <button @click="add">点击</button>
  </div>
</template>

<script>
// eslint-disable-next-line
import axios from "axios";  
export default {
  name: 'History',
  methods: {
    add: function () {
      console.log(this)
      this.$store.dispatch('module1/add')
      // axios({
      //   method: 'post',
      //   url: '/api/luyou/post',
      //   data: {
      //     date1: '2020-09-07'
      //   }
      // }).then((res) => console.log(res))
      // console.log('submit!')
    }
  },
  computed: {
    count: function () {
      return this.$store._state.data.module1.count
    },
    record: function () {
      return this.$store.state.loadTime
    }
  }
}
</script>
