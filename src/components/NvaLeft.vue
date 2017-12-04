<template>
<div class="leftBar" :style = "{width : changeLeftNavStyle,height: this.$store.state.windowHeight+'px'}" >
    <el-menu default-active="-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="changeLeftNav"  text-color="#fff"
      active-text-color="#409EFF" background-color="#324157">
      <el-menu-item index="-1" @click="toIndex">
        <i class="el-icon-menu"></i>
        <span slot="title" >项目简介</span>
      </el-menu-item>
    <el-submenu :index="index" v-for="(item, index) in getAPI">
        <template slot="title">
        <el-badge :value="item.paths.length" class="item" :max='99'></el-badge>
        <span slot="title" >{{item.name}}</span>
        </template>
        <span v-for="(item2, index2) in item.paths" @click="goApi(index,index2,item2.summary)">
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
      goApi(index,index2,summary){
        let tagArry = this.$store.state.tagsURL;
        let flg = true;
        //把其他标签颜色全改为灰色,当前标签绿色
        for(let i = 0 ; i<tagArry.length ; i++){
          if(summary == tagArry[i].name){
            tagArry[i].type = '';
            flg = false;
          }else {
            tagArry[i].type = 'info';
          }
        }
        if(flg){
          //添加标签
        this.$store.commit('addTabs',{ name: summary, type: '' ,path:'/api/'+index+'/'+index2});
        }
        //跳转路由
        this.$router.push('/api/'+index+'/'+index2)
      },
      toIndex(){
        let _this = this;
        for(let i = 0 ; i<this.$store.state.tagsURL.length ; i++){
          _this.$store.state.tagsURL[i].type='info'
        }
        this.$store.state.tagsURL[0].type=''
        this.$router.push('/');
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
    overflow:auto;
    margin: 0;
    background-color:#324157;
  }
  .el-menu-vertical-demo {
      border: 0
  }
  a {text-decoration:none} 

</style>

