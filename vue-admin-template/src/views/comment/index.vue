<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="头像" width="180">
        <template slot-scope="scope">
          <img class="image" :src="scope.row.images" alt="">
        </template>
      </el-table-column>

      <el-table-column label="名字" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.times }}</span>
        </template>
      </el-table-column>

      <el-table-column label="评论内容" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.contents}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    inject: ["reload"],
  data() {
    return {
      tableData: [],
      input:''
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
       var then = this;
    this.$axios({
      url: "http://127.0.0.1:3000/usersDel",
      method: "get",
      params: {
        id:row.id,
        add:'comment'
      }
    }).then(function(data) {
      then.$message("删除成功");
      console.log(data,'删除成功');
      then.reload();

    });
    },
  },
  mounted() {
      console.log(this.$route.query.id);
       var then = this;
   this.$axios({
      url: "http://127.0.0.1:3000/check_id",
      method: "get",
      params: {
        id: this.$route.query.id
      }
    }).then(function(res){
        
        then.tableData=res.data
        console.log(then.tableData,'===');
    })
  },
};
</script>
<style scoped>
.input{
    width: 50%;
    height: 35px;
}
.image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>
