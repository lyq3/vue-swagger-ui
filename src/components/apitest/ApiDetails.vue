<template>
  <div class = "outerClass" v-bind:style="{ height: this.$store.state.windowHeight -100+'px'}">
      
      <el-collapse v-model="activeNames" >
        <el-collapse-item name="1" class="collapse-class"> 
            <template slot="title" >
                <div class="panel-title">
                            基本信息
                        <i class="header-icon el-icon-info"></i>
                </div>
            </template>
            <!--接口详情列表-->
                <table class = "table-class des-table-class">
                    <tr>
                        <td style="width:200px">
                            URL
                        </td>
                        <td style="color:red">
                            {{tree.path}}
                        </td>
                    </tr>
                    <tr>
                        <td >请求方式</td>
                        <td style="color:#409EFF"> {{tree.sendWay.toUpperCase()}}</td>
                    </tr>
                    <tr>
                        <td>接口名称</td>
                        <td> {{tree.summary}}</td>
                    </tr>
                    <tr>
                        <td>接口说明</td>
                        <td> {{tree.description}}</td>
                    </tr>
                    <tr>
                        <td>consumes</td>
                        <td> {{tree.consumes}}</td>
                    </tr>
                    <tr>
                        <td>produces</td>
                        <td> {{tree.produces}}</td>
                    </tr>
                </table>
           
        </el-collapse-item>
        <el-collapse-item  name="2" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            请求参数
                        <i class="header-icon el-icon-info"></i>
                </div>
            </template>
            <!--接口参数列表-->
                     <table class = "table-class parm-table-class">
                    <tr>
                        <td>参数名称</td>
                        <td >描述</td>
                        <td>类型</td>
                        <td>IN</td>
                        <td>是否必须</td>
                    </tr>
                    <tr v-for="key in tree.parameters">
                        <td >{{key.name}}</td>
                        <td >{{key.description}}</td>
                        <td>{{key.type}}</td>
                        <td>{{key.in}}</td>
                        <td>{{key.required}}</td>
                        
                    </tr>
                    
                </table>
        </el-collapse-item>
         <el-collapse-item  name="2" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            响应模型
                        <i class="header-icon el-icon-info"></i>
                </div>
            </template>
                     <table class = "table-class">
                    <tr>
                        <td style="width:200px">
                            URL
                        </td>
                        <td style="color:red">
                            {{tree.path}}
                        </td>
                    </tr>
                    <tr>
                        <td >请求方式</td>
                        <td style="color:#409EFF"> {{tree.sendWay.toUpperCase()}}</td>
                    </tr>
                    <tr>
                        <td>接口名称</td>
                        <td> {{tree.summary}}</td>
                    </tr>
                    <tr>
                        <td>接口说明</td>
                        <td> {{tree.description}}</td>
                    </tr>
                    <tr>
                        <td>consumes</td>
                        <td> {{tree.consumes}}</td>
                    </tr>
                    <tr>
                        <td>produces</td>
                        <td> {{tree.produces}}</td>
                    </tr>
                </table>
        </el-collapse-item>
        
        </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
      return {
          activeNames:['1','2']
      };
    },
    computed: {
        tree (){
            return this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end];
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar{width:8px;}
::-webkit-scrollbar-track{background-color:#fff;}
::-webkit-scrollbar-thumb{background-color:#67C23A;}
::-webkit-scrollbar-thumb:hover {background-color:#00aff0}
::-webkit-scrollbar-thumb:active {background-color:#67C23A}
    .outerClass {
        overflow: auto;
        overflow-x: hidden
    }
    .panel-title {
      /* background-color: #F0F9EB; */
      /* color: #fff; */
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      /* border-bottom: 1px solid #E5E5E5;
      border-left: 1px solid #E5E5E5;
      border-right: 1px solid #E5E5E5; */
     
      font-weight: 30px;
      font-size: 15px;
      color: #4CAF50;
    }
    .collapse-class {
        border: 1px solid #D8D8D8;
        margin-bottom: 20px;
        /* box-shadow: 3px 3px 8px #C4C4C4; */
    }
    .table-class {
    width: 100%;
    border: 0px;
    border-top: 1px solid #E5E5E5;
    border-left:0;
    border-collapse: collapse;
    }
    .table-class td {
    height: 40px;
    line-height: 40px;
    padding:5px 20px;
    border-bottom: 1px solid #E5E5E5;
    font-weight: bold;
   
    }
    .des-table-class tr :first-child {
         color: #868B9B;
    }
    .parm-table-class :first-child td{
         color: #868B9B;
    }
</style>