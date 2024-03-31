<template>
    <div class="wrap">

        <div class="wrap" style="display: flex;">

          <!-- 上传项目文件 -->
          <div class="wrap" style="margin-right: 80px;"> <!-- 设置右边距 -->
            <h3>上传项目文件</h3>
            <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="handleSuccess"
            :on-error="handleError"
            multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传压缩包文件，且不超过100Gb</div>
            </el-upload>
          </div>

          <!-- 上传项目标签及手工特征（可选） -->
          <div class="wrap">
            <h3>上传项目标签（可选）</h3>
            <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="handleSuccess"
            :on-error="handleError"
            multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传压缩包文件，且不超过10Gb</div>
            </el-upload>
          </div>

        </div>

        <!-- 项目信息 -->
        <h3>项目信息</h3>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        
            <el-form-item
            prop="name"
            label="项目名"
            :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
            <el-input placeholder="请输入数据" v-model="dynamicValidateForm.a"></el-input>
            </el-form-item>
            
            <el-form-item
            prop="version"
            label="版本号"
            :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
            <el-input placeholder="请输入数据" v-model="dynamicValidateForm.b"></el-input>
            </el-form-item>
            
            <el-form-item
            prop="description"
            label="项目描述"
            :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
            <el-input placeholder="请输入数据" v-model="dynamicValidateForm.c"></el-input>
            </el-form-item>
            
            <el-form-item
            prop="numFiles"
            label="文件数"
            :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
            <el-input placeholder="等待解析" v-model="dynamicValidateForm.d"></el-input>
            </el-form-item>
            
            <el-form-item
            prop="unbalanceRate"
            label="缺陷率"
            :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
            <el-input placeholder="等待解析" v-model="dynamicValidateForm.e"></el-input>
            </el-form-item>
    
            <!--按钮-->
            <el-form-item>
            <el-button @click="resetForm()">清空数据</el-button>
            <el-button @click="analysis()">解析项目</el-button>
            <el-button type="primary" @click="submitForm()">确认上传</el-button>
            </el-form-item>
  
      </el-form>
    </div>
</template>
  
<script>
  import axios from 'axios' //引入axios

  export default {
    name: "navClassify",
    data () {
      return {
        dynamicValidateForm: {
          domains: [],
          name: "",
          version:"",
          description:""
        }
      }
    },
    methods: {
      submitForm (formName) {
        alert("上传成功")
      },
      analysis (formName) {
        alert("解析成功")
      },
      resetForm (formName) {
        alert("已清空数据")
  
        this.$refs[formName].resetFields()
      },
      handleSuccess(response, file, fileList) {
        // 当上传成功时触发的函数
        alert("成功上传并解析")
      },
      handleError(err, file, fileList) {
        // 当上传失败时触发的函数
        alert("成功上传并解析")
      },
    },
    mounted () {
      //  页面加载完之后从后台获取导航列表
      let that = this

      // this.$nextTick(() => {
      //     this.$axios.get('/api/setting/getNavClassify').then(function (response) {
      //       if (response.status === 200) {
      //         console.log(response)
      //         that.dynamicValidateForm.indexName = response.data.navList[0].name
      //         that.dynamicValidateForm.indexHref = response.data.navList[0].href
      //         response.data.navList.splice(0, 1)
      //         that.dynamicValidateForm.domains = that.dynamicValidateForm.domains.concat(response.data.navList)
      //         console.log(that.dynamicValidateForm)
      //         return false
      //       }
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })
      // });
     
    }
  }
</script>
  
<style scoped>
  .el-input {
    margin-right: 10px;
    width: 270px;
    vertical-align: top;
  }
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
  