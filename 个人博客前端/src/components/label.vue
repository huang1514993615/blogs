<template>
  <div class="labels" >
  <el-tabs v-model="activeNames" >
    <el-tab-pane @tab-click="handleClick" :label="item" :name="item" v-for="(item,index) in label" :key="index">
      <div class="centent-img">
        <div v-for="(item,index) in arr[index]" :key="item.id">
        <IMGS  v-if="index<2" :class="{imgs:index==1}" :imagess='item'></IMGS>
        </div>
      </div>
       <fold :imges="arr[index]"> </fold>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import fold from '../components/fold'
import IMGS from './imgs'//轮播图组件
export default {
  name: 'labels',
   components:{IMGS,fold},
   data:function() {
      return {
        label:['个人博客','新闻趣事','设计心得','网站公告','网站建设','职业杂谈','特别推荐'],
        activeName: 'second',
        activeNames:'个人博客',
        images:[],
        arr:[] 
         };
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    beforeCreate() {
       var then = this;
     this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add:'articles'
      }
    }).then(function(data) {
        then.images = data.data;
        var arrs=[]
       for(var f=0;f<then.label.length;f++){
         var arra=[]
      for(var i=0;i<data.data.length;i++){
        
          if(data.data[i].kinds==then.label[f]){
            arra.push(data.data[i])
          }
        }
    arrs.push(arra)
      }
then.arr=arrs
console.log(arrs,'====arrs');

      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error, "请求数据失败");
      });
      
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.centent-img{
    width: 270px;
    height: 265px;
    display: inline-block;
    vertical-align:top;
    margin-left: 0;
  }
  .fold{
      display: inline-block;
      width: 605px;
      height: 235px;
  }
  .imgs{
    margin-top: 15px;
  }
</style>