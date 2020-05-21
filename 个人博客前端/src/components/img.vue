<template>
  <div class="imgs" @click="skip">
      <img :src="msq.images" alt="runner">
      <p>{{msq.hiandes}}</p>
  </div>
</template>

<script>
export default {
  name: 'imgs',
  data : function() {
   return {

    
   }
  },
  props:{
    msq:{
              type:Object,
              default:function(){
                  return {
                      seller: {
                      avatar: ''
                    }
                  }
              }
        }
  },
  methods: {
    skip(){
this.$router.push({path:'/particulars',query: {id:this.msq.id}})
console.log(this.msq,'=====');

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imgs{
  width:270px;
  height: 125px;
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
  margin-top: -129px;
  text-align: center;
  line-height: 125px;
  background-color: rgba(0,0,0,40%);
  color: white;
}

</style>