<template>
  <div class="fold">
    <div
      class="content"
      :class="{diss:index==box}"
      @mouseover="flod(index)"
      v-for="(item,index) in imges"
      :key="index"
    >
    <div v-if="index<5">
<p class="p" @click="click(item.id)">{{item.hiandes}}</p>
      <div class="div" :class="{dis:index==box}">{{item.jianjie}}</div>
    </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      box: 0
    };
  },
  props:{
      imges:{
          type:Array
      }
  },
  methods: {
    flod(index) {
      console.log("触发", index);

      this.box = index;
    },

    click(id){
        this.$router.push({path:'/particulars',query: {id:this.article.id}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fold{
  width: 600px;
  height: 257px;
  display: inline-block;
  background-color: white;
}
.div {
  width: 100%;
  height: 100px;
  padding: 15px;
  display: none;
  /* animation: heart 1s infinite; */

  overflow: hidden;
    display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 3; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
  display: none;
}
.content {
  margin-top: 10px;
}
.dis {
  display: block;
  background-color: #f7f7f7;;
}
.diss {
  background-color: #f7f7f7;;
}
.p {
  padding-left: 15px;
  height: 20px;
  font-size: 16px;
  font-weight: 500;
}
.p:hover {
  font-weight: bold;
}

</style>