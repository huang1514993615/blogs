<template>
  <div class="mingpian-one">
    <h2>我的名片</h2>
    <div class="introduce">
        <p>网名：{{data.nameOne}} | {{data.nameTwo}}</p>
        <p>职位：{{data.occupation}}</p>
        <p>地址：{{data.site}}</p>
        <p>邮箱：{{data.email}}</p>
    </div>
    <ul>
        <li>
            <a class=" icon iconfont icon-zhuye" href="http://localhost:8080" style="color:#ef5509;" title="我的主页"></a>
        </li>
         <li>
            <a class=" icon iconfont icon-youxiang1" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1514993615@qq.com" title="我的邮箱" style="color:#ff991a;"></a>
        </li>
         <li class="qq">
            <a class=" icon iconfont icon-qq" href="" style="color:#1296db;" title="我的QQ"></a>
            <div class="img"><img class="imgs" src="../assets/img/qq.png"  alt=""></div>
        </li>
         <li class="wx">
            <a class=" icon iconfont icon-weixin" href="" style="color:#07af12;" title="我的微信"></a>
            <div class="weixin"><img class="imgs" src="../assets/img/weixin.png"  alt=""></div>
        </li>
    </ul>
    
    
  </div>
</template>

<script>
export default {
  data : function() {
   return {
       data:{}
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
    }).then(function(res){
        console.log(res.data,'个人信息');
        then.data=res.data[0]
    })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    color: #ccc;
    padding-left: 10px;
}
p{
    color: #f1f1f1;
    font-size: 13px;
    margin-top: 10px;
}
.introduce{
    margin-left: 25px;
    margin-top: 20px;
}
.iconfont{
    font-size: 30px;
    color: seashell;
}
li{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #484545;
    text-align: center;
    line-height: 60px;
    margin-left: 4px;
}

.qq:hover .img{
 display:block;
}
ul{
    margin-top: 20px;
}
.img{
    
    width:100px;
    height:100px;
    float:right;
    position: relative;
   left: 50px;
    top: -170px;
    display:none;
}
.weixin{
     width:100px;
    height:100px;
    float:right;
    position: relative;
   left: 20px;
    top: -170px;
    display:none;
}
.imgs{
    width:100%;
    height:100%;
}
.wx:hover .weixin{
    display:block;
}
</style>
