<template>
  <div class="hello">
    <h2>{{content.hiandes}}</h2>
    <!-- <quill-editor v-model="ed"></quill-editor> -->
    <div class="tops">
      <img class="head_portrait" :src="content.imgs" alt />
      <span class="span-one">发布于{{content.creates}}</span>
      <span class="span-one span-two">{{content.kinds}}</span>
      <span class="span-one span-three">{{content.dianjis}}人阅读</span>
    </div>
    <div class="ql-container ql-snow">
      <div class="ql-editor">
        <Xqs class="details_box" v-html="ed"></Xqs>
      </div>
    </div>

    <button @click="button" class="butss" v-show="bor==false">点击发表评论</button>
    <div class="discuss" v-show="bor">
      <div class="box">
        <p class="discuss_top">文章评论</p>
        <i @click="button" class="icon iconfont icon-shanchu"></i>
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

    <div class="comment">
      <comment v-for="item in comment" :key="item.id" :comment="item"></comment>
    </div>

    <div class="kong"></div>
  </div>
</template>

<script>
import comment from "@/components/comment";
import { loading } from "../../src/assets/js/loading.js";
export default {
  inject: ["reload"],
  components: { comment },
  data() {
    return {
      content: {},
      ed: ``,
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
      ps: 0,
      contents: "",
      name: "",
      comment: [],
      bor: false
    };
  },
  mounted(e) {
    console.log(this.$route.query.id);
    var then = this;
    this.$axios({
      url: "http://127.0.0.1:3000/check",
      method: "get",
      params: {
        id: this.$route.query.id
      }
    })
      .then(function(res) {
        console.log(res.data[0], "请求成功");
        then.content = res.data[0];
        then.ed = res.data[0].contents;

        then
          .$axios({
            url: "http://127.0.0.1:3000/click",
            method: "get",
            params: {
              dianjis: then.content.dianjis,
              id: then.content.id
            }
          })
          .then(function(res) {
            then.$message("成功");
          });
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error, "请求数据失败");
      });

    this.$axios({
      url: "http://127.0.0.1:3000/check_id",
      method: "get",
      params: {
        id: this.$route.query.id
      }
    }).then(function(res) {
      console.log("获取评论成功", res.data);
      then.comment = res.data;
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
            article_id: this.content.id,
            contents: this.contents,
            images: this.img[cont],
            times: loading.time(this)
          })
          .then(function(res) {
            then.$message("发布成功");
            then.name = "";
            then.contents = "";
            then.reload();
            then.bor = !then.bor;
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 70%;
  margin-left: 15%;
}
h2 {
  text-align: center;
  background-color: white;
}
.ql-container.ql-snow {
  border: 0px solid #ccc;
  background-color: white;
}
.tops {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}
.head_portrait {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.span-one {
  color: #999999;
  vertical-align: top;
}
.span-three {
  float: right;
}
.textarea {
  width: 100%;
  height: 70px;
  font-size: 20px;
  margin-top: 5px;
}
.discuss {
  background-color: white;
  width: 70%;
  border-radius: 5px;
  margin-top: 25px;
  padding: 10px;
  position: fixed;
  bottom: 0px;
  border: 1px solid #000000;
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
  position: fixed;
  bottom: 50px;
  background-color: #000000;
  border: none;
  right: 200px;
  color: #ffffff;
  font-size: 24px;
}
</style>