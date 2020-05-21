<template>
  <div class="leaveWord">
<div class="discuss" >
      <div class="box">
        <p class="discuss_top">文章评论</p>
        <i  class="icon iconfont icon-shanchu"></i>
      </div>
      <p class="p_one">来说点什么吧...</p>
      <span>您的姓名:</span>
      <input type="text" v-model="name" placeholder="请输入用户名" />
      <p>选择头像</p>
      <div class="tou" v-for="(item,index) in img" :key="index">
        <img :src="item" alt />
        <p :class="{tou_p1:ps==index}" @click="stor(index)" class="tou_p"></p>
      </div>

      <textarea class="textarea" v-model="contents"></textarea>
      <div class="buts">
        <button class="tijiao" @click="but">提交</button>
      </div>
    </div>

    <div v-for="item in comments" :key="item.id">
        <comment :comment="item"></comment>
    </div>
  </div>

</template>

<script>
import comment from '../components/comment'
import { loading } from "../../src/assets/js/loading.js";
export default {
    inject: ["reload"],
    components:{comment},
  data () {
   return {
       img: [
        "https://i03piccdn.sogoucdn.com/62745686a1879b60",
        "https://i04piccdn.sogoucdn.com/ed47c141e9adfc59",
        "https://i03piccdn.sogoucdn.com/57e6bfe569765bf6",
        "https://i02piccdn.sogoucdn.com/f55b6b991b3f004c",
        "https://i02piccdn.sogoucdn.com/9e112d890ee6f3bb",
        "https://i04piccdn.sogoucdn.com/3f2db6e59139f14d",
        "https://i04piccdn.sogoucdn.com/45dd559a29b5a684",
        "https://i03piccdn.sogoucdn.com/1130eb6e316ab6f1"
      ],
      name:'',
      ps:0,
    contents:'',
    comments:[]
   }
   
  },
  mounted() {
      var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/check_id",
      method: "get",
      params: {
        id: 1
      }
    }).then(function(res) {
      console.log("获取评论成功", res.data);
      then.comments = res.data;
    });
  },
methods: {
       stor(index) {
      this.ps = index;
    },
    but() {
      if (this.name == "") {
        this.$message("请输入标题");
      } else if (this.contents == "") {
        this.$message("请输入内容");
      } else {
        var then = this;
        var cont = this.ps;
        this.$axios
          .post("http://127.0.0.1:3000/add_comment", {
            name: this.name,
            article_id: 1,
            contents: this.contents,
            images: this.img[cont],
            times: loading.time(this)
          })
          .then(function(res) {
            then.$message("发布成功");
            then.name = "";
            then.contents = "";
            then.reload();
          })
          .catch(function(error) {
            // 请求失败处理
            console.log(error, "请求数据失败============");
          });
      }
    },
    button() {
      this.bor = !this.bor;
      window.scroll(0, 100000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaveWord{
    width: 1250px;
    margin: 0 auto;
    background-color: white;
}
.discuss {
  background-color: white;
  width: 70%;
  border-radius: 5px;
  margin-top: 25px;
  padding: 10px;

}
.discuss_top {
  display: inline-block;
  border-bottom: 1px solid #f9f9f9;
  text-align: left;
  padding-left: 10px;
  font-size: 24px;
  font-weight: bold;
}
.box {
  width: 100%;
  height: 30px;
}
.icon {
  float: right;
  font-size: 24px;
  font-weight: bold;
}
.tou {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-left: 30px;
  border-radius: 50%;
}
.tou > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.tou_p {
  width: 50px;
  height: 50px;
  position: relative;
  left: 0px;
  top: -54px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 40%);
  border-radius: 50%;
}

.tou_p1 {
  background-color: rgba(0, 0, 0, 0%);
}
.p_one {
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tijiao {
  width: 100px;
  height: 45px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #000000;
  border: none;
  float: right;
}
.buts {
  width: 100%;
  height: 45px;
}
.kong {
  width: 100%;
  height: 400px;
}
.butss {
  width: 200px;
  height: 50px;
  background-color: #000000;
  border: none;
  right: 200px;
  color: #ffffff;
  font-size: 24px;
}
.textarea {
  width: 100%;
  height: 70px;
  font-size: 20px;
  margin-top: 5px;
}
</style>