<template>
  <div>

    <h3>所有文件</h3>
    <template>
      <el-table
        v-loading="loading"
        ref="multipleTable1"
        :data="tableData4" 
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @row-click="showUq"
        >

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
          width="120"
          :sortable="true"
          :sort-method="sortDP">
        </el-table-column>

        <el-table-column
          prop="uq"
          label="不确定性指标"
          width="140"
          :sortable="true"
          :sort-method="sortUq">
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

    <div v-show="showItem">
      <h3>统计图表</h3>
      <div class="echart" id="mychart1" :style="myChartStyle"></div>
      <div class="echart" id="mychart2" :style="myChartStyle"></div>
    </div>

    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="submitSelection()">提交选中文件</el-button>
      <el-button @click="end()">结束预测</el-button>
      <el-button type="primary" @click="start()">开始预测</el-button>
      <el-button v-show="showItem" @click="showTensorboard()">查看模型参数</el-button>
    </div>

  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios' //引入axios
axios.defaults.timeout = 1000000; //设置超时时间
export default {
  name: "dataTables",
  data () {

    return {

      //表格相关
      tableData4: [{name: "..."}],
      multipleSelection: [],
      loading: false, //关闭加载图标
      
      //图表相关
      showItem: false, //是否展示图表
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式

      //直方图
      xData: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99"], //横坐标
      yData: [1, 1, 1], //数据

      //饼图
      dpCount:0,
      unDpCount:0,
    }
  },
  mounted() {
    //请求表格数据
    console.log("请求回调中...");
    axios.get("http://localhost:5000/defectPrediction").then(response => {
      console.log("请求回调成功");
      console.log(response.data)
      this.tableData4 = response.data
      this.yData = response.data[0]["uqs"] //样本的uq数据
      console.log(this.yData)
    })
    .catch(function(error){
      console.log("请求回调失败!!!");
      console.log(error);
    })

  },
  methods: {

    //自动勾选或取消勾选
    toggleSelection (rows) { 
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

    end () {
      console.log("请求回调中...");
      axios.get("http://localhost:5000/end").then(response => {
        console.log("请求回调成功");
        console.log(response)
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },

    //开始预测按钮
    start () {
      this.loading = true //开启加载图标

      console.log("请求回调中...");
      axios.get("http://localhost:5000/start").then(response => {
        console.log("请求回调成功");
        console.log(response)

        this.loading = false //关闭加载图标

        this.tableData4 = response.data //载入表格数据

        //图表相关
        this.dpCount=0
        for(var item of this.tableData4)
          if(item["defectPrediction"]>0) this.dpCount++
        this.unDpCount=response.data.length-this.dpCount
        this.initEcharts(); //加载图表
        this.showItem = true //设置展示图表
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },

    //处理改变
    handleSelectionChange (val) { 
      this.multipleSelection = val
    },

    //加载图表
    initEcharts() {

      //取元素
      const myChart1 = echarts.init(document.getElementById("mychart1"));
      const myChart2 = echarts.init(document.getElementById("mychart2"));

      //设置option
      const option1 = {
        xAxis: {
          data: this.xData //横坐标数据
        },
        yAxis: {},
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData //纵坐标数据
          }
        ],
      };
      const option2 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: this.dpCount, name: '有缺陷文件' },
              { value: this.unDpCount, name: '无缺陷文件' },
            ]
          }
        ]
      };
      myChart1.setOption(option1);
      myChart2.setOption(option2);

      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart1.resize();
        myChart2.resize();
      });
      
    },

    //展示该文件的uq直方图
    showUq(item){
      console.log(item["id"])

      console.log("请求回调中...");
      axios.post(
        "http://localhost:5000/showUq",
        {"id":item["id"]},
      ).then(response => {
        console.log("请求回调成功");
        console.log(response.data)

        //加载图表
        this.yData = response.data
        this.initEcharts();
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },

    //展示showTensorboard
    showTensorboard(){
      console.log("请求回调中...");
      axios.get("http://localhost:5000/showTensorboard").then(response => {
        console.log("请求回调成功");
        console.log(response)

        window.open("http://localhost:6006/") //打开新网页
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },

    //排序方法
    sortDP(a, b) {
			let _a = a.defectPrediction;
			let _b = b.defectPrediction;
			return _a - _b;
		},
    sortUq(a, b) {
			let _a = a.uq;
			let _b = b.uq;
			return _a - _b;
		},
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
