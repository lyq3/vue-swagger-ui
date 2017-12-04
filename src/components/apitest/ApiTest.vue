<template>
  <div class = "outerClass" v-bind:style="{ height: this.$store.state.windowHeight -100+'px'}">
      <el-button type="primary" class="btn-class btn-float">POST</el-button>
      <el-input id="abc" v-model="input" placeholder="请输入内容" class="btn-class input-float" ></el-input>
      <el-button type="success" class="btn-class">发送请求</el-button>
      <!--参数面板-->
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      <api-panel class = "panel-class"></api-panel>
      22222222222222222
  </div>
</template>

<script>
import ApiPanel  from './ApiPanel'
export default {
  name : 'ApiTest',
  data(){
      return {
      }
  },
  components : {
      ApiPanel
  },
  computed : {
  }
}
</script>

<style scoped>
    .outerClass {
        overflow: auto;
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
