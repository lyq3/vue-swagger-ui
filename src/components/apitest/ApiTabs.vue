<template>
  <div>
    <div class="btnBar-class">
        <el-button type="primary">接口介绍</el-button>
        <el-button type="success">接口测试</el-button>
    </div>
        <api-test></api-test>
  </div>
</template>
<script>
import { ApiTest, ApiDetails } from "@/components/apitest";
export default {
  data() {
    return {
      tabPosition: 'top'
    };
  },
  components: {
    ApiTest
  }
  // mounted() {
  //     let tagsURL = this.$store.state.tagsURL;
  //     let url = '/api/'+this.$route.params.start+'/'+this.$route.params.end;
  //     let tabName = this.$store.getters.getFriendlyPaths[this.$route.params.start].paths[this.$route.params.end].summary
  //     this.$store.commit('addTabs',{ name: tabName, type: '' ,path:url});
  //     tagsURL[0].type='info';
  // }
};
</script>

<style scoped>
.btnBar-class {
  margin-left: 30px;
}
</style>
