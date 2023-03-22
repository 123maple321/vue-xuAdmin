<template>
  <div>

    <h3>所有文件</h3>
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
          width="260">
        </el-table-column>

        <el-table-column
          prop="path"
          label="包路径"
          width="500">
        </el-table-column>

        <el-table-column
          prop="defectPrediction"
          label="是否有缺陷"
          width="120">
        </el-table-column>

        <el-table-column
          prop="uq"
          label="不确定性指标"
          width="120">
        </el-table-column>

        <el-table-column
          prop="source"
          label="源项目"
          width="120">
        </el-table-column>

        <el-table-column
          prop="super"
          label="超参数"
          show-overflow-tooltip>
        </el-table-column>
      
      </el-table>
    </template>

    <!-- 比例 -->
    <h3>缺陷文件比例</h3>
    <h3>（这里放一个饼图）</h3>

    <!-- 按钮 -->
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="submitSelection()">提交选中文件</el-button>
      <el-button @click="end()">结束预测</el-button>
      <el-button type="primary" @click="start()">开始预测</el-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios' //引入axios
axios.defaults.timeout = 1000000; //设置超时时间
export default {
name: "dataTables",
data () { //返回表内数据
  
  //加载
  console.log("请求回调中...");
  axios.get("http://localhost:5000/defectPrediction").then(response => {
    console.log("请求回调成功");
    console.log(response.data)
    
    //深拷贝！！！！！
    this.tableData4 = response.data
  }).catch(function(error){
    console.log("请求回调失败!!!");
    console.log(error);
  })

  return {
    tableData4: [{name: "..."}],
    multipleSelection: []
  }
},
methods: {
  toggleSelection (rows) { //自动勾选或取消勾选
    this.$refs.multipleTable1.clearSelection()
  },
  submitSelection(){
    console.log("请求回调中...");
    axios.post(
      "http://localhost:5000/submitSelection",
      this.multipleSelection,
    ).then(response => {
      console.log("请求回调成功");
      console.log(response)
    }).catch(function(error){
      console.log("请求回调失败!!!");
      console.log(error);
    })
  },
  end (rows) {
    console.log("请求回调中...");
    axios.get("http://localhost:5000/end").then(response => {
      console.log("请求回调成功");
      console.log(response)
    }).catch(function(error){
      console.log("请求回调失败!!!");
      console.log(error);
    })
  },
  start () {
    console.log("请求回调中...");
    axios.get("http://localhost:5000/start").then(response => {
      console.log("请求回调成功");
      console.log(response)
      this.tableData4 = response.data
    }).catch(function(error){
      console.log("请求回调失败!!!");
      console.log(error);
    })
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
