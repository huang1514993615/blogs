<template>
  <div id="app">
    <boke class="pos"></boke>
    <div class="divs">
    <div class="search" v-if="this.$store.getters.getstr">
      <div class="sousuo">
        <input type="text" v-model="search" />
        <p @click="sousuo">搜索</p>
      </div>
      <i @click="show" class="icon iconfont icon-shanchu"></i>
    </div>
    
      <router-view v-if="isRouterAlive" />
    </div>
  </div>
</template>

<script>
import boke from "./components/boke";
export default {
  name: "App",
  components: { boke },
  data() {
    return {
      isRouterAlive: true,
      search:''
    };
  },
  provide() {
    return {
      reload: this.reload,
      // search= ""
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    sousuo: function() {
      var then = this;
      if (this.search == "") {
        then.$message("搜索内容不能为空");
      } else {
        then.$router.push({ path: "/search", query: { search: then.search } });
        this.$store.commit("fan");
        this.search = "";
      }
    },
    show(){
      this.$store.commit("fan");
    }
  },
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "static/live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-haruto/assets/",
        tagMode: true,
        debug: true,
        model: {
          jsonPath:
            "/static/live2dw/live2d-widget-model-haruto/assets/haruto.model.json"
        },
        display: { position: "left", width: 300, height: 500 },
        mobile: { show: true },
        log: true
      });
    }, 1000);
  }
};
</script>

<style>
.search {
  width: 1250px;
  margin: 0 auto;
  height: 70px;
  background-color: white;
  margin-top: 5px;
  padding: 0.1px;
  margin-bottom: 10px;
}
.sousuo > input {
  width: 70%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}
.sousuo {
  width: 60%;
  margin: auto auto;
  margin-top: 10px;
}
.sousuo > p {
  display: inline-block;
  background-color: #000000;
  color: white;
  width: 29%;
  height: 50px;
  vertical-align: top;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
}
.search > .icon {
  /* float: right;
    top: 0px; */
  position: relative;
  top: -60px;
  left: 98%;
  font-size: 24px;
  font-weight: bold;
}
.pos {
  position: fixed;
  z-index: 600;
  top: 0;
}
.divs{
  margin-top: 60px;
}
</style>
