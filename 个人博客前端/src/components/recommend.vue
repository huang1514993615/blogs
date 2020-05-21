<template>
  <div class="recommend">
    <div class="content">
      <div class="img_s">
        <img :src="commend.images" alt />
      </div>
      <p class="p">{{commend.hiandes}}</p>
      <div class="text">{{commend.jianjie}}</div>
      <p class="tag" @click="skip">+文章阅读</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {}
  },
  props:{
    commend:{
      type:Object
    }
  },
  methods: {
    skip(){
this.$router.push({path:'/particulars',query: {id:this.commend.id}})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend {
  width: 300px;
  height: 270px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 0.1px;
  display: inline-block;
}
.recommend:hover img{
   transform: scale(1.2);
}
.content {
  width: 80%;
  height: 90%;
  margin-top: 5%;
  margin-left: 10%;
}
.img_s {
  width: 100%;
  height: 40%;
  overflow: hidden;
   border-radius: 5px;
}
.img_s > img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 1.5s;
}
.p {
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
}
.text {
  width: 100%;
  height: 55px;
  display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 3; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
  overflow: hidden;
  font-size: 14px;
  color: #999999;
}
.tag{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #3bb189;
}
.tag:hover{
    font-weight: bold;
}
</style>