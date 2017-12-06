<template>
  <div class = "apiindex-class">
    
    <el-row>
      <el-col :span="24" >
        <el-tabs :tab-position="tabPosition" v-model="activeName" :style="{height: this.$store.state.windowHeight+'px'}">
          <el-tab-pane label="接口详情" name="first">
            <api-details></api-details>
          </el-tab-pane>
          <el-tab-pane label="接口测试" name="second">
            <api-test></api-test>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
        
  </div>
</template>
<script>
import { ApiTest, ApiDetails } from "@/components/apitest";
export default {
  data() {
    return {
      activeName: 'first',
      tabPosition : 'left'
    };
  },
  components: {
    ApiTest,ApiDetails
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
