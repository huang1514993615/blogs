<template>
  <div class="com">
      <div class="imgs">
          <img :src="comment.images" alt="头像">
      <!-- <img src="http://touxiang.vipyl.com/attached/image/20130326/2013032616510400400.gif" alt=""> -->
      </div>
      <div class="content">
          <div class="span">
          <span class="span_one">{{comment.name}}</span><span class="span_two">{{comment.times}}</span>
          </div>
          <p class="contents">{{comment.contents}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
   return{}
  },
  props:{
      comment:{
          type:Object
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.com{
    padding: 10px;
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    min-height: 100px;
    background-color: white;
}
.imgs{
    width: 70px;
    height: 70px;
    display: inline-block;
    vertical-align: top;
}
.imgs>img{
  width: 70px;
    height: 70px;
    border-radius: 50%;  
}
.content{
    width: 92%;
    display: inline-block;
    vertical-align: top;
    padding-top: 10px;
}
.span{
    width: 100%;
    height: 17px;
}
.span_one{
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
}
.span_two{
float: right;
color: #999999;
font-size: 12px;
}
.contents{
    width: 70%;
    height: auto;
    margin-top: 10px;
    color: #333;
    font-weight: 500;
}
</style>