<template>
  <div class="article">
    <p>{{article.hiandes}}</p>
    <div class="neir">
      <div class="img">
        <img
          :src="article.images"
          alt
        />
      </div>
      <div class="content">
          <div class="text">
              {{article.jianjie}}
          </div>
        <div class="head">
            <div class="head-img"><img :src="article.imgs" alt=""></div>
            <span class="time">{{article.creates}}</span>
            <span class="span">【{{article.kinds}}】</span>
            <button @click="skip">阅读更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {}
  },
  props:{
    article:{
      type:Object
    }
  },
 methods:{

    skip(){
this.$router.push({path:'/particulars',query: {id:this.article.id}})
    }

  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  width: 90%;
  height: 220px;
  margin-left: 2.5%;
  border-bottom: 1px dashed  #999999;
}
.article>p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
}
.neir{
    width: 100%;
    
}
.img{
    width: 25%;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}
.img>img{
    width: 100%;
    height: 100%;
}
.content{
    width: 74%;
    height: 150px;
    display: inline-block;
    vertical-align: top;
}
.text{
    margin-top: 10px;
    width: 95%;
    height: 65px;
    color: #999999;
    margin-left: 2.5%;
    overflow: hidden;
     display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 3; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
}
.head{
    width: 95%;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    margin-left: 2.5%;
}
.head-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}
.head-img>img{
    width: 100%;
    height: 100%;
}
.time{
    color: #999999;
}
.span{
    color: #009966;
}
button{
    width: 70px;
    height: 25px;
    background-color: #12b7de;
    color: #ffffff;
    border: none;
    float: right;
    margin-top: 15px;
}
</style>