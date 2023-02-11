<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" time="5000" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      temptxt: 'hello'
    }
  },
  computed: {
    count: function () {
      return this.$store._state.data.module1.count
    }
  },
  created () {
    var that = this
    console.log('temptxt', that.count)
  },
  mounted () {},
  methods: {
    test () {}
  }
}
</script>
