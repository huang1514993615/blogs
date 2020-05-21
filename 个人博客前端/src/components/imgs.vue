<template>
  <div class="imgss" @click="skip" >
      <img :src="imagess.images" >
      <p>{{imagess.hiandes}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
   return {}
  },
  props:{
    imagess:{
      type:Object
    }
  },
  methods: {
    skip(){
this.$router.push({path:'/particulars',query: {id:this.imagess.id}})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgss{
  width:265px;
  height: 110px;
  overflow: hidden;
  border-radius: 5px;
}
img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
p{
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: -114px;
  text-align: center;
  line-height: 110px;
  background-color: rgba(0,0,0,40%);
  color: white;
}
</style>