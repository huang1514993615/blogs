<template>
  <div class="dashboard-container">
    <table border="1" cellspacing="0" width= "200px">
      <tr>
        <td>{{message.nameOne}}</td>
        
      </tr>
      <tr>
        <td>{{message.nameTwo}}</td>
        
      </tr>
      <tr>
        <td>{{message.occupation}}</td>
        
      </tr>
      <tr>
        <td>{{message.site}}</td>
        
      </tr>
      <tr>
        <td>{{message.email}}</td>
        
      </tr>
      <tr>
        <td class="td">{{message.img}}</td>
        
      </tr>
    </table>

    <div><span>网名:</span><input type="text" v-model="nameOne" placeholder="请输入要修改的第一个名字"></div>
    <div><span>姓名:</span><input type="text" v-model="nameTwo" placeholder="请输入要修改的第二个名字"></div>
    <div><span>职业:</span><input type="text" v-model="occupation" placeholder="请输入要修改的职业"></div>
    <div><span>地址:</span><input type="text" v-model="site" placeholder="请输入要修改的地址"></div>
    <div><span>邮箱:</span><input type="text" v-model="email" placeholder="请输入要修改邮箱"></div>
   <div> <span>头像:</span><input type="text" v-model="img" placeholder="请输入要修改的头像，为链接"></div>

   <button @click="get">提交</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
       show2: true,
       message:[],
       nameOne:'',
       nameTwo:'',
       occupation:"",
       site:'',
       email:'',
       img:""
    }
  },

  mounted() {
      var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add:'message'
      }
    })
      .then(function(data) {
        then.message=data.data[0]
         then.nameOne=data.data[0].nameOne
       then.nameTwo=data.data[0].nameTwo
       then.occupation=data.data[0].occupation
       then.site=data.data[0].site
       then.email=data.data[0].email
       then.img=data.data[0].img
      })
  },
  methods: {
    get(){
      var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/articlesChange",
      method: "get",
      params: {
        nameOne:this.nameOne,
        nameTwo:this.nameTwo,
        occupation:this.occupation,
        site:this.site,
        email:this.email,
        img:this.img,
        id:this.message.id
      }
    })
      .then(function(data) {
       console.log(data.data);
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  table{
    width: 70%;
    height: 300px;
  }
  .but{
    margin-left: 50px;
  }
  td{
    min-width: 100px;
  }
  .td{
   width: 80%;
   max-width:100px;
   WORD-WRAP: break-word;
    // " data-bind="text:email"
  }

  input{
    width: 400px;
    height: 40px;
  }
</style>
