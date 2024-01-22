<template>
  <div class="wrap">
    <h3>超参数设置</h3>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="200px" class="demo-dynamic">
      
      <el-form-item
        prop="feasure"
        label="人工/手工特征"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.feasure"></el-input>
          <span>说明：是否使用静态特征，是否使用手工特征</span>
      </el-form-item>
      
      <el-form-item
        prop="hidden_layer"
        label="BNN隐藏层神经元数"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.hidden_layer"></el-input>
          <span>说明：设置贝叶斯神经网络中隐藏层的神经元个数</span>
      </el-form-item>
      
      <el-form-item
        prop="learning_rate"
        label="学习率"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.learning_rate"></el-input>
          <span>说明：设置贝叶斯神经网络的学习率</span>
      </el-form-item>
      
      <el-form-item
        prop="batch_size"
        label="batch_size"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.batch_size"></el-input>
          <span>说明：每个批次的数据量大小</span>
      </el-form-item>
      
      <el-form-item
        prop="epoch"
        label="epoch"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.epoch"></el-input>
          <span>说明：所有批次的训练迭代次数</span>
      </el-form-item>
      
      <el-form-item
        prop="sigma_1"
        label="sigma_1"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.sigma_1"></el-input>
          <span>说明：先验分布参数1</span>
      </el-form-item>
      
      <el-form-item
        prop="sigma_2"
        label="sigma_2"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.sigma_2"></el-input>
          <span>说明：先验分布参数2</span>
      </el-form-item>
      
      <el-form-item
        prop="dropout"
        label="是否使用dropout"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.dropout"></el-input>
          <span>说明：贝叶斯神经网络是否使用dropout</span>
      </el-form-item>
      
      <el-form-item
        prop="nnfilter"
        label="是否使用nnfilter"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.nnfilter"></el-input>
          <span>说明：是否使用nnfilter处理样本</span>
      </el-form-item>
      
      <el-form-item
        prop="tca"
        label="是否使用tca"
        :rules="{required: true, message: '此项不能为空', trigger: 'blur'}">
          <el-input placeholder="请输入数据" v-model="dynamicValidateForm.tca"></el-input>
          <span>说明：是否使用tca技术处理语义特征</span>
      </el-form-item>

      <!--按钮-->
      <el-form-item>
        <el-button @click="resetForm()">恢复默认</el-button>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交数据</el-button>
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
        feasure: "semantics + manual",
        hidden_layer:"400",
        learning_rate:"0.005",
        batch_size:"5",
        epoch:"20",
        sigma_1:"0",
        sigma_2:"0",
        dropout:"Y",
        nnfilter:"Y",
        tca:"Y",
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log("请求回调中...");
      axios.post(
        "http://localhost:5000/superParameter",
        this.dynamicValidateForm,
      ).then(response => {
        console.log("请求回调成功");
        console.log(response)
      }).catch(function(error){
        console.log("请求回调失败!!!");
        console.log(error);
      })
    },
    resetForm (formName) {
      alert("点击了恢复默认")

      this.$refs[formName].resetFields()
    },
  },
  mounted () {
    //  页面加载完之后从后台获取导航列表
    let that = this
    // this.$axios.get('/api/setting/getNavClassify')
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       console.log(response)
    //       that.dynamicValidateForm.indexName = response.data.navList[0].name
    //       that.dynamicValidateForm.indexHref = response.data.navList[0].href
    //       response.data.navList.splice(0, 1)
    //       that.dynamicValidateForm.domains = that.dynamicValidateForm.domains.concat(response.data.navList)
    //       console.log(that.dynamicValidateForm)
    //       return false
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
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
.el-input {
  margin-right: 10px;
  width: 270px;
  vertical-align: top;
}
</style>
