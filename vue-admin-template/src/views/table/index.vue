<template>
  <div class="app-container">
    <div class="input">
    <el-input size='small' placeholder="请输入内容" v-model="input" clearable></el-input></div>
    <el-button size="mini" class="but" @click="but" type="primary">搜索</el-button>

    <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      placeholder="选择日期" @change="changes(value1)">
    </el-date-picker>
  </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.creates }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.names }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.names }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="标题">
        <template slot-scope="scope">
          <div class="span">{{ scope.row.hiandes }}</div>
        </template>
      </el-table-column>

      <el-table-column label="简介">
        <template slot-scope="scope">
          <div class="span">{{ scope.row.jianjie}}</div>
        </template>
      </el-table-column>

      <el-table-column label="内容">
        <template slot-scope="scope">
          <div class="span">{{ scope.row.contents }}</div>
        </template>
      </el-table-column>

      <el-table-column label="分类" width="100">
        <template slot-scope="scope">
          <div class="span">{{ scope.row.kinds}}</div>
        </template>
      </el-table-column>

      <el-table-column label="展示图片链接">
        <template slot-scope="scope">
          <div class="span">{{ scope.row.images}}</div>
        </template>
      </el-table-column>

      <el-table-column label="操作"  width="300">
        <template slot-scope="scope">
          <el-button type="primary" @click="amend(scope.$index, scope.row)" icon="el-icon-edit" circle></el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="comment(scope.$index, scope.row)">查看评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      one:[],
      two:[],
      input: "",
      name: "",
      value1: ''
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/example/particulars",
        query: { id: row.id }
      });
    },
    handleDelete(index, row) {
      var then = this;
      this.$axios({
        url: "http://127.0.0.1:3000/usersDel",
        method: "get",
        params: {
          id: row.id,
          add: "articles"
        }
      }).then(function(data) {
        then.$message("删除成功");
        console.log(data, "删除成功");
        then.reload();
      });
    },

    comment(index, row) {
      console.log(row);
      this.$router.push({ path: "/example/comment", query: { id: row.id } });
    },
    amend(index, row) {
      console.log(row);
      this.$router.push({ path: "/example/reviseAnEssay", query: { id: row.id } });
    },

    but() {
      var then = this;
      if (this.search == "") {

      } else {
         var then=this
      this.$axios({
      url: "http://127.0.0.1:3000/login",
      method: "get",
      params: {
        hiandes: this.input
      }
    }).then(function(res){
      then.two=res.data
      then.tableData = res.data;
      console.log(res.data);
      if(res.data.length == 0){
        then.$message("未搜索到内容");
      }
      
    })
      }
    },
    changes(value1){
     
      console.log(this.value1);
      
     var then=this 
      if(this.value1 !==null){
        
        var arr=[]
         console.log('执行',this.one.length);
        
         for(var i=0;i <this.one.length ;i++){
        if(value1 == this.one[i].creates.slice(0,10)){
          arr.push(this.one[i])
        }
      }
      console.log(arr);
      if(arr.length==0){
      then.$message("该日期没有内容");
    }
    then.tableData= arr
    
      
      }else{
        then.tableData=then.one
      }
     
    }
  },

  mounted() {
    var then = this;
    this.$axios({
      url: "http://127.0.0.1:3000/address",
      method: "get",
      params: {
        add: "articles"
      }
    }).then(function(data) {
      console.log(data.data);
      then.tableData = data.data;
      then.one=data.data
    });
  }
};
</script>
<style scoped>
.span {
  margin-left: 10px;
  overflow: hidden;
  display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 3; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
}
.but{
  display: inline-block;
}
.input{
  display: inline-block;
}
.block{
  display: inline-block;
}
</style>