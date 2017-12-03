<template>
<div class="leftBar" :style = "{width : changeLeftNavStyle}">
    <el-menu default-active="-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="changeLeftNav"  text-color="#fff"
      active-text-color="#409EFF" background-color="#324157">
      <el-menu-item index="-1">
        <i class="el-icon-menu"></i>
        <span slot="title">项目简介</span>
      </el-menu-item>
    <el-submenu :index="index" v-for="(item, index) in getAPI">
        <template slot="title">
        <el-badge :value="item.paths.length" class="item" :max='99'></el-badge>
        <span slot="title" >{{item.name}}</span>
        </template>
        <span v-for="(item2, index2) in item.paths" @click="goApi(index,index2)">
        <el-menu-item :index="index +'-'+ index2">{{item2.summary}}</el-menu-item>
        </span>
        <!-- </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
    </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
    name : 'NvaLeft',
    data() {
      return {
        changeLeftNavStyle :  '250px',
        tags : [],
        paths : [],
        realData : []
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goApi(index,index2){
        alert(index+'-'+index2)

      }
    },
    computed : {
        changeLeftNav () {
          this.changeLeftNavStyle = this.$store.state.leftNavStatus ? null : '250px'
          return this.$store.state.leftNavStatus
        },
        getAPI(){
            console.log(this.$store.getters.getMenuTreeObj)
            return  this.$store.getters.getMenuTreeObj;
        }
    }
  }
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
.leftBar {
    /* width: 250px; */
    height: 1000px;
    /* position:fixed; */
    overflow:auto;
    margin: 0;
    /* width: inherit; */
    background-color:#324157;
  }
  .el-menu-vertical-demo {
      border: 0
  }
  a {text-decoration:none} 

</style>

