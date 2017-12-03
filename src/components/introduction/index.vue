<template>
<div class = 'indexClass'>
  <div class="btn-class">
    <el-badge :value="200" :max="99" class="item">
      <el-button type="success">GET</el-button>
    </el-badge>
    <el-badge :value="200" :max="99" class="item">
    <el-button type="primary">POST</el-button>
    </el-badge>
    <el-badge :value="200" :max="99" class="item">
    <el-button type="danger">DELETE</el-button>
    </el-badge>
    <el-badge :value="200" :max="99" class="item">
    <el-button type="warning">PUSH</el-button>
    </el-badge>
    <el-badge :value="200" :max="99" class="item">
    <el-button type="info">其他</el-button>
    </el-badge>
  </div>
    <table class="table-class" border='1'>
      <tr>
        <td style="width:200px;text-align: center">简介</td>
        <td v-html="this.$store.getters.getInfo.description"></td>
      </tr>
      <tr>
        <td style="text-align: center">作者</td>
        <td >{{this.$store.getters.getInfo.contact.name}}</td>
      </tr>
      <tr>
        <td style="text-align: center">版本</td>
        <td>{{this.$store.getters.getInfo.version}}</td>
      </tr>
      <tr>
        <td style="text-align: center">Host</td>
        <td>{{this.$store.getters.getHost}}</td>
      </tr>
      <tr>
        <td style="text-align: center">联系方式</td>
        <td>{{this.$store.getters.getInfo.contact.email}}</td>
      </tr>
      <tr>
        <td style="text-align: center">服务提供商URL</td>
        <td>{{this.$store.getters.getInfo.contact.url}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    data() {
      return {
       
      }
    }
}
</script>

<style scoped>
.indexClass {
  padding-top: 50px
}
.progress-bar{
  width: 80%;
  margin-bottom: 5px
}
.table-class {
  width: 80%;
  margin-left: 30px;
  border:1px solid #D8DCE5;
  border-collapse: collapse;
}
.table-class td {
  height: 40px;
  padding: 10px;
}
.btn-class {
  margin-top: 10px
}
.btn-class button{
  margin : 0px 0px 10px 30px;
  width: 100px;
}
</style>

