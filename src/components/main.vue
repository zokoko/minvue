<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="stopload()">stop</button>
    <p>every {{ time }}s</p>
    <p>{{ gitInfoText }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    time: Number
  },
  data () {
    return {
      gitInfo: null,
      gitInfoText: '',
      open: false
    }
  },
  created () {
    var that = this
    console.log('time', that.time)

    setInterval(function () {
      if (!that.open) {
        that.fresh()
      }
    }, that.time)
  },
  methods: {
    stopload () {
      this.open = true
    },
    fresh () {
      var url = 'https://api.github.com'
      var that = this

      axios
        .get(url, {
          // 还可以直接把参数拼接在url后边
          params: {}
        })
        .then(function (res) {
          console.log('res', res)
          that.gitInfo = res.data

          that.gitInfoText = JSON.stringify(that.gitInfo)
          console.log('res2', that.gitInfoText)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
