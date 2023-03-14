<template>
  <div>
    <!-- <h3>请选择源项目</h3> -->
    <!-- <p>选择多行数据时使用 Checkbox。</p> -->
    <template>

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
          label="被测项目名"
          width="120">
        </el-table-column>

        <el-table-column
          prop="version"
          label="版本号"
          width="120">
        </el-table-column>

        <el-table-column
          prop="fileNum"
          label="文件数"
          width="120">
        </el-table-column>

        <el-table-column
          prop="defectRate"
          label="缺陷率"
          width="120">
        </el-table-column>

        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>

        <el-table-column
          prop="description"
          label="项目描述"
          width="120">
        </el-table-column>

        <el-table-column
          prop="button"
          label=""
          show-overflow-tooltip>
          <el-button @click="viewDetails()">查看详情</el-button>
        </el-table-column>

      </el-table>

      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button type="primary" @click="exportResult()">导出报表</el-button>
      </div>

    </template>
  </div>
</template>

<script>
export default {
  name: "dataTables",
  data () { //返回表内数据
    // console.log("1111")
    return {
      tableData4: [
        {
          project_result_id: 123456,
          name: "camel",
          version: "1.4",
          fileNum: "402",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123457,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123458,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123459,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123450,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123451,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123452,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
        {
          project_result_id: 123453,
          name: "camel",
          version: "1.4",
          fileNum: "67",
          defectRate: "78",
          date: "2023-03-14",
          description: "属于PROMISE"
        }, 
      ],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection () { //自动勾选或取消勾选
      this.$refs.multipleTable.clearSelection()
    },
    exportResult (rows) {
      //TODO

      console.log(this.multipleSelection)
      
      alert("导出报表")
    },
    viewDetails () {
      //TODO

      alert("查看详情")
    },
    handleSelectionChange (val) { //处理改变
      this.multipleSelection = val
    }
  }
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
