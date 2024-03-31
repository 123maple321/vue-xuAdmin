<template>
    <div>
      <h3>项目组：开发一组</h3>
      <!-- <p>选择多行数据时使用 Checkbox。</p> -->
      <template>
  
        <div style="margin-bottom: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
          <el-button @click="toggleSelection()">批量删除人员</el-button>
          <el-button type="primary" @click="select()">批量添加人员</el-button>
        </div>

        <div style="margin-bottom: 20px">
          <el-input style="width: 500px" placeholder="请输入"></el-input>
          <el-button type="primary" style="margin-left: 10px">搜索</el-button>
          <el-button>重置</el-button>
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
            prop="pid"
            label="员工id"
            width="120"
            :sortable="true"
            :sort-method="sortPid">
          </el-table-column>
  
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="date"
            label="添加日期"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="projectNum"
            label="负责项目数"
            width="120"
            align="center"
            :sortable="true"
            :sort-method="sortFileNum">
          </el-table-column>
  
          <el-table-column
            prop="now"
            label="完成情况"
            width="120"
            align="center"
            :sortable="true"
            :sort-method="sortFileNum">
          </el-table-column>
  
          <el-table-column
            prop="description"
            label="备注"
            width="120">
          </el-table-column>
  
          <el-table-column
            prop="button"
            label=" "
            width="100">
                <el-button class="button2" size="mini">权限配置</el-button>
          </el-table-column>
  
          <el-table-column
            prop="button"
            label=" "
            width="80">
                <el-button class="button1" size="mini">删除</el-button>
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
      return {
        tableData4: [
          {
            pid:"401272",
            name:"Jack",
            date:"2024-1-12",
            projectNum:"10",
            now:"4",
            description:"正式员工",
          },
          {
            pid:"643469",
            name:"Lucy",
            date:"2024-1-12",
            projectNum:"10",
            now:"4",
            description:"正式员工",
          },
          {
            pid:"108432",
            name:"Fendy",
            date:"2024-1-16",
            projectNum:"16",
            now:"9",
            description:"正式员工",
          },
          {
            pid:"579403",
            name:"Denis",
            date:"2024-1-22",
            projectNum:"16",
            now:"16",
            description:"正式员工",
          },
          {
            pid:"956403",
            name:"Jessica",
            date:"2024-1-22",
            projectNum:"20",
            now:"14",
            description:"外包员工",
          },
          {
            pid:"256310",
            name:"Terry",
            date:"2024-1-12",
            projectNum:"20",
            now:"17",
            description:"外包员工",
          },
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
    },
    mounted () {
      
    },
  }
  </script>
  
  <style scoped>
  h3{
    margin: 10px 0 25px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 27px;
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .button1{
    color: #ffffff;
    background-color: #f85f5f;
  }
  .button2{
    background-color: #ffffff;
  }
  </style>
  