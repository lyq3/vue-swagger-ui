<template>
  <el-tabs :tab-position="tabPosition" style="height: 90%;">
    <el-tab-pane label="接口说明">
      <api-details></api-details>
    </el-tab-pane>
    <el-tab-pane label="在线调试">
      <api-test></api-test>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {ApiTest,ApiDetails} from '@/components/apitest'
export default {
  data() {
      return {
        tabPosition: 'left'
      };
    },
    components : {
      ApiTest
    }
}
</script>

<style scoped>

</style>
