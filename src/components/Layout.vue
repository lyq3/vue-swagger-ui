<template>
  <el-container>
    <el-aside width = "asideWidth">
      <!--坐标导航栏-->
      <v-NvaLeft></v-NvaLeft>
    </el-aside>
    <el-main>
      <!--顶部Tabs-->
       <el-row>
      <el-col :span="24">
      <v-tabs></v-tabs>
      </el-col>
       </el-row>
      <!--接口详情页面路由-->
       <keep-alive>
        <router-view/>
      </keep-alive>
    </el-main>
    </el-container>
  
</template>

<script>
import NvaLeft from "./NvaLeft"
import Tabs from "./Tabs"

export default {
    data : function(){
        return {
            asideWidth : '300px'
        }
    },
    components : {
        'v-NvaLeft' : NvaLeft,
        'v-tabs' : Tabs,
    },
    computed : {
    }
}
</script>

<style scoped>
  main {
    padding: 0px;
    margin:  0px
  }
</style>
