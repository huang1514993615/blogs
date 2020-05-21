<template>
  <div class="hit" v-if="sen !=[]">
      <div class="text">点击排行</div>
      <div class="gif"><img src="//n.sinaimg.cn/sinacn/w592h392/20171224/3120-fypvuqf4848792.gif" alt=""></div>
      <div  v-for="(item,index) in seniority" :key="item.id" @click="click(index)">
<div class="content" v-if="index<7"><p>{{index+1}}</p><span>{{item.hiandes}}</span></div>
      </div>
      
  </div>
  
</template>

<script>
export default {
  data () {
   return {
     sen:[]
   }
  },
  props:{
    seniority:{
      type:Array
    }
  },
  methods: {
    click(index){
      this.$router.push({path:'/particulars',query: {id:this.seniority[index].id}})
    }
  },
mounted() {

}




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hit{
    width: 285px;
    height: 500px;
    background-color: #ffffff;
    margin-left: 15px;
    margin-top: 30px;
    border-radius: 5px;
}
.text{
  width: 90%;
  margin-left: 5%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  font-size: 20px;
  font-weight: 500;
}
.gif{
    width: 90%;
    height: 115px;
    margin-left: 5%;
    overflow: hidden;
    border-radius: 5px;
    margin-top: 15px;
}
.gif:hover img{
    transform: scale(1.2);
}
.gif>img{
    width: 100%;
    height: 100%;
    transition: all 1.5s;
}
.content{
    width: 90%;
    height: 35px;
    margin-left: 5%;
    padding-top: 6px;
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
margin-top: 10px;
}
.content>p{
    display: inline-block;
    background-color:red;
    width: 20px;
    height: 20px;
    vertical-align: top;
    text-align: center;
    line-height: 20px;
}
.content>span{
    margin-left: 8px;
}
</style>