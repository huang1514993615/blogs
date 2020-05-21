<template>

  <div class="time">
      <div class="content">
      <div class="top"><p>往期文章</p></div>
      <timerShaft v-for="item in time" :key="item.id" :time="item"></timerShaft>
      </div>
  </div>
</template>

<script>
import timerShaft from '../components/timerShaft'
export default {
components:{timerShaft},
  data () {
   return{
       time:[]
   }
  },
  mounted() {
      var then = this;
     this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add:'articles'
      }
    })
      .then(function(data) {
          console.log(data.data,'===');
          then.time=data.data.reverse()
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error, "请求数据失败===");
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time{
    width: 1250px;
    height: auto;
    background-color: white;
    border-radius: 5px;
    margin: 15px auto;
    padding-bottom: 50px;
}
.content{
    width: 1100px;
    height: auto;
    margin: 0 auto;
}
.top{
    width: 100%;
    height: 50px;
}
.top>p{
    width: 110px;
    height: 50px;
    border-bottom: 2px solid #000000;
    font-size: 24px;
    font-weight: bold;
    color: #999999;
    line-height: 50px;
}
</style>