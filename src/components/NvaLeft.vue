<template>
<div class="leftBar">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="labelValue" ><i class="el-icon-menu" @click="changeLabel"></i></el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"  text-color="#fff"
      active-text-color="#409EFF" background-color="#324157">
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一wwwwwwww</span>
        </template>
        <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一wwwwwwww</span>
        </template>
        <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一wwwwwwww</span>
        </template>
        <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一wwwwwwww</span>
        </template>
        <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    name : 'NvaLeft',
    data() {
      return {
        isCollapse: false,
        labelValue:false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeLabel(){
          this.labelValue = !this.labelValue;
      }
    }
  }
</script>

<style scoped>
.leftBar {
    width: 250px;
    height: 1000px;
    position:fixed;
    overflow:auto;
    padding: 0;
    margin: 0;
    width: inherit;
    background-color:#324157;
  }

</style>

