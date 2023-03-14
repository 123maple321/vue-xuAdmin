<template>
    <div>
      <h3>请选择源项目</h3>
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
            label="项目名"
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
            label="上传日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>

          <el-table-column
            prop="unbalanceRate"
            label="不平衡率"
            width="120">
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
            prop="description"
            label="项目描述"
            show-overflow-tooltip>
          </el-table-column>

        </el-table>

        <div style="margin-top: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
          <el-button type="primary" @click="select()">确定</el-button>
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
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        },
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        },
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }, 
        {
          name: "camel",
          version: "1.4",
          fileNum: "67",
          unbalanceRate: "78",
          date: "2023-03-14",
          public: "是",
          label: "是",
          manu: "否",
          description: "属于PROMISE"
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) { //自动勾选或取消勾选
      this.$refs.multipleTable.clearSelection()
    },
    select (rows) {
      //TODO

      alert("确定")
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
