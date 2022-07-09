<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="stopload()">stop</button>
    <p>every {{ time }}s</p>
  </div>
  <div class="gitInfoText">
    {{ gitInfoText }}
  </div>
</template>

<script>
// 忽略报错
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    time: Number,
  },
  data() {
    return {
      gitInfo: null,
      gitInfoText: "",
      open: false,
    };
  },
  created() {
    var that = this;
    console.log("time", that.time);

    // setInterval(function () {
    //   if (!that.open) {
    //     that.fresh();
    //     console.log("goon");
    //   }
    // }, that.time);
  },
  methods: {
    stopload() {
      this.open = true;
      console.log("停止", this.open);
    },
    fresh() {
      var that = this;

      var timeT = this.ts();

      

      // console.log("state", timeT, that.$store.state.loadTime);
      // return;

      var url = that.$store.state.url;
      

      var startTime=Date.parse(new Date());
      


      axios
        .get(url, {
          // 还可以直接把参数拼接在url后边
          params: {},
        })
        .then(function (res) {
          var endTime=Date.parse(new Date());
          console.log("startTime", startTime,endTime,endTime-startTime);
          console.log("res", res, that.$store.state.loadTime);

          that.$store.state.loadTime+="\n 【time】"+timeT+"【isok】 ok"+"【loadtime】"+(endTime-startTime)

          that.gitInfo = res.data;

          that.gitInfoText = JSON.stringify(that.gitInfo);
          console.log("res2", that.gitInfoText);
        })
        .catch(function (error) {
          that.$store.state.loadTime+="\n time:"+timeT+"isok:fail"+"【loadtime】"+endTime-startTime
          console.log(error);
        });
    },
    ts: function () {
      var myDate = new Date();
      myDate.getYear(); //获取当前年份(2位)
      myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      myDate.getDate(); //获取当前日(1-31)
      myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
      myDate.getHours(); //获取当前小时数(0-23)
      myDate.getMinutes(); //获取当前分钟数(0-59)
      myDate.getSeconds(); //获取当前秒数(0-59)
      myDate.getMilliseconds(); //获取当前毫秒数(0-999)
      myDate.toLocaleDateString(); //获取当前日期
      var mytime = myDate.toLocaleTimeString(); //获取当前时间
      // return mytime
      // return myDate
      return myDate.toLocaleString(); //获取日期与时间
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
