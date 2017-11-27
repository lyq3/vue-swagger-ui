<template>
  <!-- <el-header>
    <v-header></v-header>
  </el-header> -->
  <el-container>
    <el-aside width = "asideWidth">
      <v-NvaLeft></v-NvaLeft>
    </el-aside>
    <el-main>
      <v-tabs></v-tabs>
    </el-main>
    </el-container>
    <!-- <el-row>
      <el-col :span="2">
          <v-NvaLeft></v-NvaLeft>
      </el-col>
      <el-col :span="22">
          <v-tabs></v-tabs>
      </el-col>
    </el-row> -->
  
</template>

<script>
import NvaLeft from "./NvaLeft"
import Header from "./header"
import Tabs from "./tabs"

export default {
    data : function(){
        return {
            asideWidth : '300px'
        }
    },
    components : {
        'v-NvaLeft' : NvaLeft,
        'v-header' : Header,
        'v-tabs' : Tabs
    },
    computed : {
        changeLeftNav () {
          // return this.$store.state.leftNavStatus
        }
    }
}
</script>

<style scoped>
  main {
    padding: 0px;
    margin:  0px
  }
</style>
