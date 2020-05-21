<template>
  <div class="update">
    <div class="top">最近更新</div>
    <div class="text">
      <div v-for="(item,index) in update" :key="item.id" @click="skip(index)">  
      <li  v-if="index<4">{{item.hiandes}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    update:{
      type:Array
    }
  },
  methods: {
    skip(index){
    
    
this.$router.push({path:'/particulars',query: {id:this.update[index].id}})
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.update {
  background-color: #ffffff;
  display: inline-block;
  width: 285px;
  height: 100%;
  border-radius: 2%;
  padding: 5px;
  margin-left: 15px;
  vertical-align: top;
}
.top {
  width: 80%;
  height: 50px;
  margin-left: 10%;
  text-align: left;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 26px;
}
.text {
  width: 80%;
  min-height: 50px;
  margin-left: 10%;
}

li {
  /* display: inline-block; */
  width: 100%;
  height: 45px;
  background-color: #f6f6f6;
  text-align: left;
  padding-left: 5%;
  line-height: 45px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 15px;
  font-size: 12px;
}
</style>