<template>
  <el-collapse v-model="activeNames" >
  <el-collapse-item name="1">
      <template slot="title" >
          <div style=" backgroundColor: gold; ">
                    请求头
                <i class="header-icon el-icon-info"></i>
         </div>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="请求参数" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  
</el-collapse>
</template>

<script>
export default {
  data() {
      return {
        activeNames: ['1','2']
      };
    }
}
</script>

<style scoped>
    
</style>
