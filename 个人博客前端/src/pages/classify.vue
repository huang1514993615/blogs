<template>
  <div class="classify">
      <div class="navbar">
          <div v-for="(item,index) in label" :key="index">
          <p @click="ds(index)" :class="{clo:index==p}" class="p" >{{item}}</p>
          </div>
      </div>
      <div class="content">
        <div>
          <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
        </div>
        
          <articles v-for="item in article" :key="item.id" :article="item" ></articles>
      </div>
  </div>
</template>
<script>
import {loading} from "../../src/assets/js/loading.js";
import articles from '../components/article'
export default {
    
  data () {
   return {
       label:['个人博客','新闻趣事','设计心得','网站公告','网站建设','职业杂谈','特别推荐'],
       article:[],
       articles:[],
       kind:'个人博客',
       p:0,
       value:['时间正序'],
       options:[
         {
           value:'时间正序',
           label:"时间正序",
         }
         ,{
         value:"时间倒序",
         label: '时间倒序'
       },{
         value:"访问量正序",
         label:"访问量正序",
       },
       {
         value:"访问量倒序",
         label:"访问量倒序",
       }]
   }
   
  },
  components:{articles},
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
          then.articles=data.data
        // then.articles = JSON.parse(JSON.stringify(data.data)).reverse()
        for(var i=0; i<data.data.length; i++){
          if(data.data[i].kinds==then.kind){
            then.article.push(data.data[i])
          }
        } 
        console.log(then.article,'===')
// this.$store.commit('fan')
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error, "请求数据失败===");
      });
  },
  methods: {
      ds(index){
          this.kind=this.label[index]
          this.p=index
          var arr=[]
          arr=loading.arrs(this.articles,this.kind)
          this.article=arr.reverse()
      },
      handleChange(value) {
        console.log(value);
        if(value=='时间正序'){
         var arr1=loading.arrs(this.articles,this.kind)
          
          this.article=arr1.reverse()
        }else if(value=='时间倒序'){
          var arr2=loading.arrs(this.articles,this.kind)
         
          this.article=arr2
        }else if(value=='访问量正序'){
          var arr3=[]
          arr3=loading.sortByKey(this.article,'dianjis')
          this.article=arr3
        }else if(value=='访问量倒序'){
        
        var arr3=loading.sortByKey(this.article,'dianjis')
          this.article=arr3.reverse()
        }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify{
    width: 1250px;
    min-height: 1000px;
    background-color: white;
    margin: 0 auto;
}
.navbar{
    width: 150px;
    height: 1000px;
    display: inline-block;
    background-color: crimson;
    vertical-align: top;
    position: fixed;
    top: 60px;
}
.p{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    padding-left: 20px;
    color: #555555;
    margin-top: 15px;
}
.p:hover{
    color: ghostwhite;
}

.clo{
color: ghostwhite;
}
.content {
    width: 1000px;
    min-height: 1000px;
    display: inline-block;
    vertical-align: top;
    margin-left: 150px;
}
</style>