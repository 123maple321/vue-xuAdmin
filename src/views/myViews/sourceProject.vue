<template>
    <div>
      <h3>多选</h3>
      <p>选择多行数据时使用 Checkbox。</p>
      <template>

        <!--表格-->
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
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>

          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>

          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>

        </el-table>

        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData4[1], tableData4[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>

      </template>
    </div>
</template>

<script>
export default {
  name: "dataTables",
  data () { //返回表内数据
    return {
      tableData4: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }, {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) { //自动勾选或取消勾选
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row) // el-table自带函数
        })
      } else {
        this.$refs.multipleTable.clearSelection() // el-table自带函数 清楚所有勾选
      }
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
