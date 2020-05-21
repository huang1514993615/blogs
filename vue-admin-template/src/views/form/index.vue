<template>
  <div class="app-container">
    <template>
   <ve-histogram :data="chartData"></ve-histogram>
   </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
     chartData: {
          columns: ['时间', '点击量', '评论量', '评论点击比例'],
          rows: [
            
          ]
        }
    }
  },
mounted() {
  var then = this;
    this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add:"information"
      }
    }).then(function(data){
      var arr=[]
      for(var i=0;i<data.data.length;i++){
        var a={'时间':data.data[i].time,'点击量':data.data[i].numbers,'评论量':data.data[i].pinglun,'评论点击比例':data.data[i].proportion}
        arr.push(a)

      }
      then.chartData.rows=arr
    });
},
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>

</style>

