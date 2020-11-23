<template>
  <div class="about">
    <h1>{{count}}</h1>
    <button @click="add">点击</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    add: function () {
      console.log(this)
      this.$store.dispatch('module1/add')
      this.axios({
        method: 'post',
        url: '/api/luyou/post',
        data: {
          date1: '2020-09-07'
        }
      }).then((res) => console.log(res))
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
