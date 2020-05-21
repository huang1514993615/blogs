<template>
  <div class="boke">
    <div class="kuang">
      <div class="kuang-span">黄晨琼个人博客</div>
      <div style="display: inline-block;">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="width:1000px; display: inline-block;"
        >
          <el-menu-item index="0" active-text-color="#ccc">
            <router-link class="rou" to="/">我的首页</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link class="rou" to="/classify">文章分类</router-link>
          </el-menu-item>

          <el-menu-item  @click="audio">{{music}}<i class="iconfont icon-yinle"></i></el-menu-item>
          <!-- <el-menu-item index="4">
            网站制作
          </el-menu-item> -->
          <el-menu-item index="5">
            <router-link class="rou" to="/time">时间轴</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link class="rou" to="/leaveWord">留言</router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link class="rou" to="/comment">写文章</router-link>
          </el-menu-item>
          <el-menu-item @click="add">
            <p class="rou">搜索 <i class="iconfont icon-sousuo"></i></p>
          </el-menu-item>
          <!-- http://up_mp4.t57.cn/2018/1/03m/13/396131232171.m4a -->
        </el-menu>
        <audio id="audio" loop preload="auto">
          <source src="http://up_mp4.t57.cn/2018/1/03m/13/396131232171.m4a" />
          <source src="http://up_mp4.t57.cn/2018/1/03m/13/396131226156.m4a" />
          <source src="http://up_mp4.t57.cn/2018/1/03m/13/396131203208.m4a" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script>

import Aplayer from "vue-aplayer";
import { mapActions } from "vuex";
// import store from '../vuex'
export default {
  name: "boke",
  components: { Aplayer },
  data: function() {
    return {
      activeIndex: "1",
      activeIndex2: "0",
      mus: "http://up_mp4.t57.cn/2018/1/03m/13/396131227447.m4a",
      bor:true,
      music:'点击播放'
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
    },
    add() {
      // console.log("vuex", this.$store.getters.getstr);
      this.$store.commit("fan");
    },
    audio() {
      var audio = document.querySelector("#audio");
      if(this.bor==true){
         audio.play();
         this.music='点击暂停'
         this.bor=false
      }else{
        audio.pause();
        this.music='点击播放'
        this.bor=true
        
      }
     
    }
  }

  //   computed: {
  //    ...mapActions([
  //    'fan'
  //  ])
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kuang {
  width: 1250px;
  margin: 0 auto;
  height: 60px;
  margin-left: 15%;
  padding: 0;
  background-color: #545c64;
}
.kuang-span {
  display: inline-block;
  width: 200px;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 61px;
  margin: 0px 0px;
  vertical-align: top;
  background-color: #545c64;
  color: #ffffff;
}
.rou {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.boke {
  background-color: #545c64;
  width: 100%;
}
/* .media-audio{
  display: inline-block;
  background-color: deepskyblue;
  width: 20px;
  height: 20px;
} */
.iconfont{
  color: #4a82ff;
  vertical-align: top;
  font-weight: bold;
}
</style>
