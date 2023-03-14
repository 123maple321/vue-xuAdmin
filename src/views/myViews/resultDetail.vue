<template>
    <div>
  
      <!-- 表1 -->
      <h3>有缺陷倾向文件</h3>
      <template>
        <el-table
          ref="multipleTable1"
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
            label="文件名"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="path"
            label="包路径"
            width="200">
          </el-table-column>
  
          <el-table-column
            prop="source"
            label="源项目"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="super"
            label="超参数"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="uq"
            label="不确定性指标"
            show-overflow-tooltip>
          </el-table-column>
        
        </el-table>
      </template>
  
      <!-- 表2 -->
      <h3>无缺陷倾向文件</h3>
      <template>
        <el-table
          ref="multipleTable2"
          :data="tableData5" 
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
  
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
  
          <el-table-column
            prop="name"
            label="文件名"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="path"
            label="包路径"
            width="200">
          </el-table-column>
  
          <el-table-column
            prop="source"
            label="源项目"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="super"
            label="超参数"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="uq"
            label="不确定性指标"
            show-overflow-tooltip>
          </el-table-column>
        
        </el-table>
      </template>
  
      <!-- 比例 -->
      <h3>缺陷文件比例</h3>
      <h3>（这里放一个饼图）</h3>
  
    </div>
  </template>
  
  <script>
  export default {
  name: "dataTables",
  data () { //返回表内数据
    return {
      tableData4: [
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
      ],
      tableData5: [
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "34 0 0",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
        {
          name: "main",
          path: "org.camel.main",
          source: "ant",
          super: "0 0 34",
          uq: "0.086"
        }, 
      ],
      multipleSelection: []
    }
  },
  methods: {
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
  