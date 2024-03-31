<template>
  <div>

    <!-- 第一行 -->
    <el-row :gutter="20">

      <!-- 第一列 -->
      <el-col :span="8">
        <div class="card bbxx">
          <p class="title"><i class="fa fa-server"></i>版本信息</p>
          <div class="table">
            <p><span class="tit">当前版本</span>v1.0.0</p>
            <p><span class="tit">基于框架</span>vue2.0 element-ui SpringBoot pytorch</p>
            <p><span class="tit">主要特色</span>缺陷预测 不确定性量化 神经网路 语义特征</p>
            <p><span class="tit">源码链接</span>
                <span class="gitbox">
                  <a target="_blank" href="https://github.com/123maple321/TCNN_BBB"><el-button type="primary" icon="el-icon-download" size="small">github</el-button></a>
                  <!-- <a target="_blank" href="https://gitee.com/nirongxu/vue-xuAdmin.git"><el-button type="primary" icon="el-icon-download" size="small">码云</el-button></a> -->
                </span>
            </p>
          </div>
        </div>
      </el-col>

      <!-- 第二列 -->
      <el-col :span="8">
        <div class="card dbsx">
          <p class="title"><i class="fa fa-file-text-o"></i>用户状态</p>
          <ul>
            <li><router-link to="#"><span>项目人员总数</span><span class="num">11</span></router-link></li>
            <li><router-link to="#"><span>项目总数</span><span class="num">87</span></router-link></li>
          </ul>
          <ul>
            <li><router-link to="#"><span>代码总行数</span><span class="num">37370</span></router-link></li>
            <li><router-link to="#"><span>可用服务器总数</span><span class="num">12</span></router-link></li>
          </ul>
        </div>
      </el-col>

    </el-row>

    <!-- 第二行 -->
    <el-row>
      <el-col :span="16">
        <div id="kjfs" class="card kjfs">
          <p class="title"><i class="fa fa-th-large fa-lg"></i>快捷方式</p>
          <ul>
            <li><router-link to="/addArticle" class="kjfs kjfs-bluee"><span><i class="el-icon-tickets fa-2x"></i></span><span>项目管理</span></router-link></li>
            <li><router-link to="/dragTabe" class="kjfs kjfs-pinkk"><span><i class="fa fa-hand-stop-o fa-2x"></i></span><span>源项目</span></router-link></li>
            <li><router-link to="/pagePermissions" class="kjfs kjfs-yelloww"><span><i class="fa fa-universal-access fa-2x"></i></span><span>目标项目</span></router-link></li>
            <li><router-link to="/upload" class="kjfs kjfs-grennn"><span><i class="fa fa-cloud-upload fa-2x"></i></span><span>超参数设置</span></router-link></li>
            <li><router-link to="/navClassifies" class="kjfs kjfs-purplee"><span><i class="fa el-icon-menu fa-2x"></i></span><span>缺陷预测</span></router-link></li>
            <li><router-link to="/markdown" class="kjfs kjfs-lightBluee"><span><i class="fa fa-file-code-o fa-2x"></i></span><span>结果管理</span></router-link></li>
          </ul>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import LineEcharts from "../../components/ECharts/lineEcharts"
import Maintable from "../table/maintable"
export default {
  name: "mainIndex",
  components: {Maintable, LineEcharts},
  mounted () {
    this.selfAdaption()
  },
  methods: {
    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;
  %shadow{
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 90px;
          min-width: 90px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
  #lineEcharts{
    margin-#{$top}: 30px;
    padding-#{$top}: 30px;
    @extend %shadow;
  }
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
  #kjfs{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
</style>
