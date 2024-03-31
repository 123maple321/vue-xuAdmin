<template>
  <div>

    <div style="display: flex; justify-content: space-between; margin-top: 20px; margin-bottom: 20px;">
      <div style="display: flex;">
        <el-button type="primary">开始预测</el-button>
        <el-button>取消选择</el-button>
        <el-button>提交选中文件</el-button>
        <el-button>查看模型参数</el-button>
        <el-button class="red">结束预测</el-button>
        <!-- <el-button>展示实验图表</el-button> -->
      </div>
      <div style="display: flex; align-items: center;">
        <el-input style="width: 200px; margin-left: 10px; margin-right: 10px;" placeholder="请输入"></el-input>
        <el-button type="primary" style="margin-left: 10px;">搜索</el-button>
        <el-button>重置</el-button>
      </div>
    </div>

    <!--树-->
    <el-tree
      :data="treeData"
      show-checkbox
      :default-expand-all="true"
      :props="{label:'nodeName'}">

        <!--颜色-->
        <template v-slot="{ node, data }">
          <span :style="{ color: getTreeNodeColor(data) }">
            {{ data.nodeName }}
          </span>
        </template>

    </el-tree>

    <h3>所有文件</h3>

    <!--表格-->
    <template>
      <el-table
        v-loading="loading"
        ref="multipleTable1"
        :data="tableData4" 
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @row-click="showUq">

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

    <!-- 图表 -->
    <div style="margin-top: 30px;">
      <div v-show="showChart2" class="echart" id="mychart2" :style="myChartStyle"></div>
      <div v-show="showChart1" class="echart" id="mychart1" :style="myChartStyle"></div>
      <div v-show="showChart34" class="echart" id="mychart3" :style="myChartStyle"></div>
      <div v-show="showChart34" class="echart" id="mychart4" :style="myChartStyle"></div>
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

      //树
      treeData: [],

      //表格相关
      tableData4: [{name: "..."}],
      multipleSelection: [], //勾选
      loading: false, //关闭加载图标
      
      //图表相关
      showChart1: false,
      showChart2: false,
      showChart34: false,
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
    }
  },
  mounted() {
    //请求表格数据
    console.log("请求回调中...");
    axios.get("http://localhost:5000/resultDetail").then(response => {
      console.log("请求回调成功");
      console.log(response.data)
      this.tableData4 = response.data
      this.yData = response.data[0]["uqs"] //样本的uq数据
      console.log(this.yData)

      this.createTree() //造树

      //加载图表
      this.initEchart2();
      this.initEchart34();
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

    //提交选中文件按钮
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

    //结束预测按钮
    end () {
      console.log("请求回调中...");
      axios.get("http://localhost:5000/end").then(response => {
        console.log("请求回调成功");
        console.log(response)
        alert("预测结果已成功保存至结果管理模块！")
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
        alert("预测结果保存失败！")
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

        this.createTree() //造树

        //加载图表
        this.initEchart2(); 
        this.initEchart34();

      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },

    //造树
    createTree(){
      //用tableData4造树
      this.treeData = [{
          nodeName: '',
      }]

      for (const file of this.tableData4) {//遍历每一项
        const path = file.path.split(".")
        if(this.treeData[0].nodeName == ''){
          this.treeData[0].nodeName = path[0]
        }

        var cur = 0  //path的下标
        var curNode = this.treeData[0]

        //从左往右走一遍这个path
        while(cur+1 < path.length){
          cur++ //待查找的包名：path[cur]

          if(curNode["children"] == undefined){//没有子就建一个
            curNode.children = []
          }

          //遍历children
          find = false
          for(const child of curNode.children){
            if(child.nodeName == path[cur]){//找到了匹配的子
              find = true
              curNode = child; //记录新curNode
              break
            }
          }
          if(!find){
            var newNode = {nodeName:path[cur]}
            curNode.children.push(newNode)
            curNode = newNode
          }

          if(cur == path.length-1){//若遍历到了path的最后一个包名
            curNode.name = file.name
            curNode.source = file.source
            curNode.super = file.super
            curNode.uq = file.uq
            curNode.id = file.id
            curNode.label = file.label
            curNode.color = file.defectPrediction==0 ? "green" : "red"
          }
        }
      }
      // console.log(this.treeData)
    },
    getTreeNodeColor(nodeData) {
      // 返回节点的颜色属性，或默认颜色
      return nodeData.color || "black";
    },

    //处理改变
    handleSelectionChange (val) { 
      this.multipleSelection = val
    },

    //加载图表数据
    initEchart1(val) {
      this.showChart1 = true

      //取元素
      const myChart1 = echarts.init(document.getElementById("mychart1"));

      //设置option，包括数据
      const option1 = {
        title: {
          text: '模型输出统计直方图'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          data: [
            '0.00', '0.01', '0.02', '0.03', '0.04', '0.05', '0.06', '0.07', '0.08', '0.09', 
            '0.10', '0.11', '0.12', '0.13', '0.14', '0.15', '0.16', '0.17', '0.18', '0.19', 
            '0.20', '0.21', '0.22', '0.23', '0.24', '0.25', '0.26', '0.27', '0.28', '0.29', 
            '0.30', '0.31', '0.32', '0.33', '0.34', '0.35', '0.36', '0.37', '0.38', '0.39', 
            '0.40', '0.41', '0.42', '0.43', '0.44', '0.45', '0.46', '0.47', '0.48', '0.49', 
            '0.50', '0.51', '0.52', '0.53', '0.54', '0.55', '0.56', '0.57', '0.58', '0.59', 
            '0.60', '0.61', '0.62', '0.63', '0.64', '0.65', '0.66', '0.67', '0.68', '0.69', 
            '0.70', '0.71', '0.72', '0.73', '0.74', '0.75', '0.76', '0.77', '0.78', '0.79', 
            '0.80', '0.81', '0.82', '0.83', '0.84', '0.85', '0.86', '0.87', '0.88', '0.89', 
            '0.90', '0.91', '0.92', '0.93', '0.94', '0.95', '0.96', '0.97', '0.98', '0.99'
          ], //横坐标
        },
        yAxis: {},
        series: [
          {
            type: "bar", //形状为柱状图
            data: val //纵坐标数据
          }
        ],
      };
      myChart1.setOption(option1);

      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart1.resize();
      });
    },
    initEchart2(){//饼图
      if(this.tableData4.length == 0) return
      this.showChart2 = true

      //计算
      var dpCount = 0
      for(var item of this.tableData4)
        if(item["defectPrediction"]>0) dpCount++
      var unDpCount = this.tableData4.length - dpCount

      const myChart2 = echarts.init(document.getElementById("mychart2"));
      const option2 = {
        title: {
          text: '缺陷比例'
        },
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
            // emphasis: { //中间的突出文字
            //   label: {
            //     show: true,
            //     fontSize: 40,
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: true
            },
            data: [
              { value: dpCount, name: '有缺陷文件' },
              { value: unDpCount, name: '无缺陷文件' },
            ]
          }
        ]
      };
      myChart2.setOption(option2);

      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart2.resize();
      });
    },
    initEchart34(){
      if(this.tableData4.length == 0) return
      this.showChart34 = true

      //计算直方图
      var yFault = new Array(25).fill(0) //[0-24]
      var yTrue = new Array(25).fill(0) //[0-24]
      for(var item of this.tableData4) {
        var index = parseInt(item["uq"] * 100) //向下取整
        if(index>24) index=24

        if(item["defectPrediction"]==item["label"])  //预测正确
          yTrue[index] += 1
        else  //预测错误
          yFault[index] += 1
      }

      //计算准确率
      var yTrueRate = new Array(25).fill(0) //[0-24]
      for(var i=0 ; i<26 ; i++){
        var sum = yFault[i] + yTrue[i]
        yTrueRate[i] = sum==0 ? 0 : yTrue[i]/sum
      }

      const myChart3 = echarts.init(document.getElementById("mychart3"));
      const myChart4 = echarts.init(document.getElementById("mychart4"));
      const option3 = {
        title: {
          text: '方差分布直方图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ["0","0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.1","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24"]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'fault',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: yFault
          },
          {
            name: 'true',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: yTrue
          },
        ]
      };
      const option4 = {
        title: {
          text: '预测准确率'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['forrest'] //可扩充
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["0","0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.1","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24"]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'forrest',
            type: 'line',
            stack: 'Total',
            data: yTrueRate
          }, //可扩充
        ]
      };
      myChart3.setOption(option3);
      myChart4.setOption(option4);

      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart3.resize();
        myChart4.resize();
      });
    },

    //展示该文件的uq直方图
    showUq(item){
      this.loading = true //开启加载图标

      console.log("请求回调中...");
      axios.post(
        "http://localhost:5000/showUq",
        {"id":item["id"]},
      ).then(response => {
        console.log("文件的uq直方图 请求回调成功");
        console.log(response.data)

        this.loading = false //关闭加载图标

        //加载图表
        this.initEchart1(response.data);
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
.red{
  color: #ffffff;
  background-color: #f85f5f;
}
</style>
