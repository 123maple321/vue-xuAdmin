<template>
  <div>
    <!-- <h3>请选择源项目</h3> -->
    <!-- <p>选择多行数据时使用 Checkbox。</p> -->
    <template>

      <div style="margin-bottom: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button type="primary" @click="select()">申请公共项目</el-button>
      </div>

      <!--表格1-->
      <el-table
        ref="multipleTable"
        :data="tableData4"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          prop="name"
          label="项目名"
          width="120"
          :sortable="true"
          :sort-method="sortName">
        </el-table-column>

        <el-table-column
          prop="version"
          label="版本号"
          width="120">
        </el-table-column>

        <el-table-column
          prop="language"
          label="语言"
          width="120">
        </el-table-column>

        <el-table-column
          prop="fileNum"
          label="文件数"
          width="90"
          align="right"
          :sortable="true"
          :sort-method="sortFileNum">
        </el-table-column>

        <el-table-column
          prop="unbalanceRate"
          label="不平衡率"
          width="90"
          align="right">
        </el-table-column>

        <el-table-column
          prop="public"
          label="是否属于公共项目"
          width="150">
        </el-table-column>

        <el-table-column
          prop="label"
          label="是否带有训练标签"
          width="150">
        </el-table-column>

        <el-table-column
          prop="manu"
          label="是否带有手工特征"
          width="150">
        </el-table-column>

        <el-table-column
          prop="date"
          label="上传日期"
          width="120"
          :sortable="true"
          :sort-method="sortData">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>

        <el-table-column
          prop="description"
          label="项目描述"
          show-overflow-tooltip>
        </el-table-column>

      </el-table>

    </template>
  </div>
</template>

<script>
import axios from 'axios' //引入axios
export default {
  name: "dataTables",
  data () {
      //加载表格
      console.log("请求回调中...");
      axios.get("http://localhost:5000/listProject").then(response => {
        console.log("请求回调成功");
        console.log(response.data)
        
        this.tableData4 = response.data
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })

    return {
      tableData4: [
        {
          name:"..."
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection () { //自动勾选或取消勾选
      this.$refs.multipleTable.clearSelection()
    },
    select (rows) {
      alert("已发送申请，请等待管理员审批")
    },
    handleSelectionChange (val) { //处理改变
      this.multipleSelection = val
    },

    //排序方法
    sortName(a, b) {
			let _a = a.name;
			let _b = b.name;
			return _a - _b;
		},
    sortFileNum(a, b) {
			let _a = a.fileNum;
			let _b = b.fileNum;
			return _a - _b;
		},
    sortDate(a, b) {
			let _a = a.date;
			let _b = b.date;
			return _a - _b;
		},
  },
  mounted () {
    
  },
}
</script>

<style scoped>
h3{
  margin: 25px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
}
p{
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
</style>
