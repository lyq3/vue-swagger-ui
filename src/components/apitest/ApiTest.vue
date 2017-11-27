<template>
  <div class = "outerClass">
      <el-button type="primary" class="btn-class btn-float">POST</el-button>
      <el-input id="abc" v-model="input" placeholder="请输入内容" class="btn-class input-float" ></el-input>
      <el-button type="success" class="btn-class btn-float">发送请求</el-button>
  </div>
</template>

<script>
export default {
  name : 'ApiTest'
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
</style>
