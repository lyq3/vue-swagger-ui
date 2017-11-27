<template>
  <div class = "outerClass">
      <el-button type="primary" class="btn-class btn-float">POST</el-button>
      <el-input id="abc" v-model="input" placeholder="请输入内容" class="btn-class input-float" ></el-input>
      <el-button type="success" class="btn-class">发送请求</el-button>
      <!--参数面板-->
      <api-panel class = "panel-class"></api-panel>
  </div>
</template>

<script>
import ApiPanel  from './ApiPanel'
export default {
  name : 'ApiTest',
  components : {
      ApiPanel
  }
}
</script>

<style scoped>
    .outerClass {
        margin-top: 5px
    }
    .btn-class {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius:0;
        border-radius: 0;
    }
    .btn-float{
        float: left;
    }
    .input-float {
        float: left;
        width:80%
    }
    .panel-class {
        margin-top: 5px;
        /* float: left; */
    }
</style>
