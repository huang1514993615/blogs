<template>
  <div class="Slideshow">
     <el-carousel :interval="2000" arrow="always" height="265px">
    <el-carousel-item v-for="(item,index) in img_list" :key="index" >
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'Slideshow',
 data:function() {
     return {
          img_list:['https://cdn.img-sys.com/comdata/869/201709/20170916103057dcc9e1.jpg'
      ,'https://cdn.img-sys.com/comdata/869/201709/20170916103057e8edf0.jpg'
      ,'https://cdn.img-sys.com/comdata/869/201709/20170916103057262ad5.jpg'
      ,'https://cdn.img-sys.com/comdata/869/201709/20170916103057dcc9e1.jpg']
     }
 },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
      width: 100%;
      height: 100%;
  }
</style>