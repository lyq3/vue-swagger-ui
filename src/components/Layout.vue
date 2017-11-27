<template>
  <!-- <el-header>
    <v-header></v-header>
  </el-header> -->
  <el-container>
    <el-aside width="200px">
      <v-NvaLeft></v-NvaLeft>
    </el-aside>
    <el-main>
      <v-tabs></v-tabs>
    </el-main>
  </el-container>
</template>

<script>
import NvaLeft from "./NvaLeft"
import Header from "./header"
import Tabs from "./tabs"

export default {
    data : function(){
        return {
            
        }
    },
    components : {
        'v-NvaLeft' : NvaLeft,
        'v-header' : Header,
        'v-tabs' : Tabs
    }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: left; */
    line-height: 25px;
    width: 1800px
  }
  main {
    padding: 0px;
    margin:  0px
  }
</style>
