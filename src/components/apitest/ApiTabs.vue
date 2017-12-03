<template>
  <el-tabs :tab-position="tabPosition" style="height: 95%;">
    <!-- <el-tab-pane label="接口说明">
      <api-details></api-details>
    </el-tab-pane>
    <el-tab-pane label="在线调试"> -->
      <api-test></api-test>
    <!-- </el-tab-pane> -->
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
    },
    // mounted() {
    //     let tagsURL = this.$store.state.tagsURL;
    //     let url = '/api/'+this.$route.params.start+'/'+this.$route.params.end;
    //     let tabName = this.$store.getters.getFriendlyPaths[this.$route.params.start].paths[this.$route.params.end].summary
    //     this.$store.commit('addTabs',{ name: tabName, type: '' ,path:url});
    //     tagsURL[0].type='info';
    // }
}
</script>

<style scoped>

</style>
