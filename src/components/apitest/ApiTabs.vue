<template>
  <el-tabs :tab-position="tabPosition" style="height: 90%;">
    <el-tab-pane label="接口说明">用户管理</el-tab-pane>
    <el-tab-pane label="在线调试">配置管理</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
      return {
        tabPosition: 'left'
      };
    }
}
</script>

<style scoped>

</style>
