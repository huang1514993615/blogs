<template>
  <div class="times" @click="times">
<!-- 时间轴 -->
<p class="times_p">{{time.creates.substring(0,10)}} <i></i></p>
<span class="p">{{time.hiandes}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
   return {}
  },
  props:{
      time:{
          type:Object
      }
  },
  mounted() {
      console.log(this.time.creates.length)
  },
  methods: {
      times(){
          this.$router.push({path:'/particulars',query: {id:this.time.id}})
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.times{
    width: 100%;
    height: 50px;
}

.times:hover .times_p>i{
    background-color: #000000;
    
}
.times:hover .p{
font-weight: bold;
}
.times_p{
    display: inline-block;
    width: 125px;
    height: 100%;
    line-height: 50px;
    color: #999999;
    font-size: 18px;
    border-right: 2px solid #e0dfdf;
}
.times_p>i{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    border-radius: 50%;
    position: relative;
    right: -11px;
    top: 0px;
    border: 2px solid #e0dfdf;
}
.p{
    display: inline-block;
    margin-left: 25px;
    color: #333333;
}
</style>