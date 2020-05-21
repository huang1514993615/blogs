
<template>
  <div class="edit_container">
      <input  type="text" name="" class="input1" placeholder="请输入标题" v-model="hiande">
      <input  type="" name="" class="input1" placeholder="请输入简介" v-model="jianjie">
      <input class="input1" type="text" placeholder="请输入要展示的文章图片，格式要为连接" v-model="images">
      <p class="title">请选择对应的文章标签</p>
      <p class="p" :class="{sp:index==ps}"  v-for="(item,index) in label" @click="labels(index)" :key="index">{{item}}</p>
      
    <div class="content">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
    </div>

    <button class="but" @click="on">确定</button>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import {loading} from "../../assets/js/loading";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      content: ``,
      editorOption: {},
      hiande:'',
      jianjie:'',
      dianji:0,
      create:'2020-03-26 22:49:00',
      kind:'',
      name:"黄晨琼",
      img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588852299857&di=fc9ea389ccb454f5f7db5311bf62357e&imgtype=0&src=http%3A%2F%2Fimgs.shougongke.com%2FPublic%2Fdata%2Fhand%2F201503%2F23%2Fstep%2F29%2F1427040968714.jpg",
      images:'',
      label:['个人博客','新闻趣事','设计心得','网站公告','网站建设','职业杂谈','特别推荐'],
       ps:0
    };
  },
  mounted() {
     var then = this;
    this.$axios({
      url: "http://127.0.0.1:3000/check",
      method: "get",
      params: {
        id:this.$route.query.id
      }
    }).then(function(res){
        console.log(res.data);
         then.content= res.data[0].contents,
      then.hiande=res.data[0].hiandes,
      then.jianjie=res.data[0].jianjie,
      then.dianji=res.data[0].dianjis,
      then.create=res.data[0].creates,
      then.kind=res.data[0].kinds,
      then.name=res.data[0].names,
      then.img=res.data[0].imgs,
      then.images=res.data[0].images
      for(var i=0;i<then.label.length;i++){
        if(res.data[0].kinds==then.label[i]){
          then.ps=i
        }
      }
    })
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    on() {
      this.create=loading.time(this)
      if(this.hiande==''){
        this.$message('请输入标题');
      }else if(this.jianjie==''){
        this.$message('请输入简介');
      }else if(this.images==''){
         this.$message('请输入展示的图片');
      }else if(this.content==``){
        this.$message('请输入内容');
      } else if(this.kind==''){
this.$message('请输入标签');
      } else{
        var then = this;
        // 执行封装的时间函数
       
  
    this.$axios
      .post("http://127.0.0.1:3000/reviseAnEssay", {
       hiandes:this.hiande,
       jianjie:this.jianjie,
       contents:this.content,
       dianjis:this.dianji,
       creates:this.create,
       kinds:this.kind,
       names:this.name,
       imgs:this.img,
       images:this.images,
       id:this.$route.query.id
       
    }).then(function(res) {
        then.$message('修改');
        then.$router.push({path:'/example/table'})
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error, "请求数据失败");
      });
      }
        
  },
  labels(index){
    
    this.ps=index
    this.kind=this.label[index]
  }
  
  }
};
</script>
<style scoped>
.edit_container{
   width: 1250px;
   margin: 0 auto;
}
.input1{
    width: 100%;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
}
.but{
  width: 200px;
  height: 50px;
  font-size: 26px;
  font-weight: bold;
}
.p{
  display: inline-block;
width: 100px;
height: 30px;
border: 1px solid #999999;
text-align: center;
line-height: 30px;
color: #ccc;
border-radius: 5px;

}
.sp{
 border: 1px solid turquoise;
 color: deepskyblue;
 }
 .title{
   font-size: 20px;
   font-weight: bold;
   color:#333333;
 }
</style>