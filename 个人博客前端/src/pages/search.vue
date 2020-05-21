<template>
  <div class="search" >
      <div v-for="item in search" :key="item.id">
<articles :article="item" v-if="search!=[]"></articles>
      </div>
     <p class="p">没有更多数据了</p> 
  </div>
</template>
<script>
import articles from "../components/article"
export default {
  data () {
   return{
       search:[]
   }
  },
  components:{
      articles
  },
  mounted(){
      var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/login",
      method: "get",
      params: {
        hiandes: this.$route.query.search
      }
    }).then(function(res){
        console.log(then.$route.query.search);
        
      console.log(res.data,'====');
      then.search=res.data
    })

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
    width:1332px ;
    margin: 0 auto;
    height: auto;
    background-color: white;
    padding-bottom: 30px;
}
.p{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    color: #999999;
    margin-top: 10px;
}
</style>