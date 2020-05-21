<template>
  <div id="home">
    <!-- <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%"> -->
    
    <section class="sec">
      <div class="centent">
        <div class="content-frame">
          
          <div class="slideshow">
            <div>
              <div class="slideshow-one">
                <Slideshow />
              </div>

              <div class="centent-img">
                <IMG :msq="msqs[0]" />
                <IMG :msq="msqs[1]" style="margin-top:15px" />
              </div>
            </div>
            <!-- 用户管理等  -->
            <div class="labels">
              <labels />
            </div>
            <!-- 特别推荐 -->
            <div class="recommends">
              <div class="recommend_top">
                <span>特别推荐</span>
              </div>
              <div class="mend">
                <div class="recommend_content">
                  <template v-for="(item,index) in article">
                    <recommend :key="item.id" :commend="item" v-if="index<6"></recommend>
                  </template>
                </div>
              </div>
            </div>
            <!-- 最新博文 -->
            <div class="newest">
              <div class="recommend_top">
                <span>最新博文</span>
              </div>
              <articles v-for="item in articles" :key="item.id" :article="item"></articles>
            </div>
          </div>

          <div class="right">
            <div class="mingpian">
              <mingpian />
            </div>
            <div class="label">
              <update :update="articles"></update>
            </div>
            <div class="click">
              <click :seniority="seniority"></click>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- <div v-for="(item,index) in name">
      <span>item.name</span>
    </div>
    <button @click="set">点击</button>-->
     <!-- </el-table> -->
  </div>
 
</template>
<script>
import Slideshow from "@/components/slideshow"; //轮播图组件
import IMG from "@/components/img"; //轮播图组件
import mingpian from "@/components/business-card"; //名片组件
import labels from "@/components/label"; //标签页组件
import update from "@/components/update";
import recommend from "@/components/recommend";
import click from "@/components/click";
import articles from "@/components/article";
import {loading} from "../../src/assets/js/loading.js";
export default {
  name: "home",
  components: {
    Slideshow,
    IMG,
    mingpian,
    labels,
    update,
    recommend,
    click,
    articles,
    
  },
  data() {
    return {
      msqs: [],
      name: [{ name: "1" }, { name: "11" }],
      article:[],
      articles:[],
      time:'',
      seniority:[],
      fa:false,
      loading: true
    };
  },
  mounted() {

    // this.fullscreenLoading = true;
    console.log('vuex',this.$store.getters.getstr);
    
    var then = this;
then.loading=true
 var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add:'articles'
      }
    }).then(function(data) {
      then.msqs = data.data;
        // then.article=data.data;
        // then.articles=data.data
        then.articles = JSON.parse(JSON.stringify(data.data)).reverse()
        then.article=loading.arrs(data.data,'特别推荐')
      var str=data.data
then.seniority=loading.sortByKey(str,'dianjis')
console.log(then.seniority,'=====');
then.loading=false
// then.$store.commit('fan')
    });


//     this.$axios
//       .get("http://127.0.0.1:3000/address")
//       .then(function(data) {
//         then.msqs = data.data;
//         // then.article=data.data;
//         // then.articles=data.data
//         then.articles = JSON.parse(JSON.stringify(data.data)).reverse()
//         then.article=loading.arrs(data.data,'特别推荐')
//       var str=data.data
// then.seniority=loading.sortByKey(str,'dianjis')
// console.log(then.seniority,'=====');
// this.$store.commit('fan')
        
        
//       })
//       .catch(function(error) {
//         // 请求失败处理
//         console.log(error, "请求数据失败===");
//       });

        


        
                

  },
  
  methods: {
   add(){
     this.$store.commit('fan')
   },
   
  },
};
</script>
<style>
.labels {
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
}
.navigation {
  width: 100%;
  height: 60px;
  background-color: #545c64;
}
.sec {
  background-color: #e9eaed;
}
.centent {
  width: 100%;
  min-height: 2200px;
  background-color: #e9eaed;
}
.home {
  background-color: #e9eaed;
}
.content-frame {
  width: 1250px;
  height: 1000px;
  /* background-color: tomato; */
  margin: 0 auto;
}
.slideshow {
  width: 920px;
  height: 300px;
  padding: 0.1px;
  display: inline-block;
  vertical-align: top;
}
.slideshow-one {
  width: 620px;
  margin-top: 10px;
  display: inline-block;
}
.centent-img {
  width: 270px;
  height: 265px;
  display: inline-block;

  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
}
.mingpian {
  background-color: #2a2a2a;
  display: inline-block;
  width: 285px;
  height: 265px;
  vertical-align: top;
  margin-top: 10px;
  border-radius: 2%;
  padding: 5px;
  margin-left: 15px;
}
.label {
  width: 100%;
  height: 325px;
  margin-top: 20px;
  vertical-align: top;
}
.labels {
  width: 910px;
  height: 310px;
  margin-top: 15px;
  /* margin-left: 20px; */
  background-color: seashell;
}
.el-collapse-item__header {
  height: 40px !important;
}
.right {
  width: 305px;
  display: inline-block;
  vertical-align: top;
}
.recommends {
  width: 910px;
  min-height: 650px;
  background-color: #ffffff;
  margin-top: 45px;
}
.recommend_top {
  width: 94%;
  margin-left: 3%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
}
.recommend_top > span {
  font-size: 24px;
  font-weight: bold;
}
.mend {
  width: 890px;
  overflow: hidden;
  margin-top: 25px;
  height: 539px;
}
.recommend_content {
  width: 900px;
  height: auto;
  overflow: hidden;
}
.newest {
  width: 910px;
  height: auto;
  margin-top: 45px;
  background-color: #ffffff;
}

</style>