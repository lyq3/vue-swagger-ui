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
                        <i class="header-icon el-icon-upload"></i>
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
                 <div style="color:red; text-align: center" v-if="!tree.parameters">无参数</div>
        </el-collapse-item>
         <el-collapse-item  name="3" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            响应模型
                        <i class="header-icon el-icon-circle-check"></i>
                </div>
            </template>
                <div v-if="tree.responses[200].schema.$ref">
                     <el-button style="margin:0 20px" size="small" @click="famtJSON" type="success" plain>格式化JSON</el-button>
                    <el-switch
                    v-model="openTree"
                    active-text="展开所有节点">
                    </el-switch>
                    <el-switch
                 
                </div>
                     <pre id= "json-renderer" v-if="tree.responses[200].schema.$ref">
                         {{originTree}}
                     </pre>
                     <div style="color:red;margin-left:10px" v-else>暂无响应模型</div>
        </el-collapse-item>

        <el-collapse-item  name="4" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            响应状态码
                        <i class="header-icon el-icon-warning"></i>
                </div>
            </template>
            <!--响应列表-->
                     <table class = "table-class parm-table-class">
                    <tr>
                        <td>状态码</td>
                        <td >说明</td>
                        <td>模式</td>
                    </tr>
                    
                    <tr v-for="(key,index) in tree.responses">
                        <td >{{index}}</td>
                        <td >{{key.description}}</td>
                        <td>{{key.schema}}</td>
                        
                    </tr>
                    
                </table>
                 <div style="color:red; text-align: center" v-if="!tree.parameters">无参数</div>
        </el-collapse-item>
        
        </el-collapse>
  </div>
</template>

<script>

export default {
  data() {
      return {
          activeNames:['1','2','3','4'],
          openTree :false,
          marksTree : true
      };
    },
    methods : {
        famtJSON(){
            let _this = this
             $('#json-renderer').jsonViewer (eval(_this.originTree),{collapsed :!_this.openTree,withQuotes :!_this.marksTree});
        }
    },
    computed: {
        tree (){
            return this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end];
        },
        originTree(){
            // let ResponseData = {};
            // let Definitions = this.$store.getters.getDefinitions;
            // for(let key in Definitions){
                
            // }
             return this.$store.getters.getDefinitions
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar{width:8px;}
::-webkit-scrollbar-track{background-color:#fff;}
::-webkit-scrollbar-thumb{background-color:#00aff0;}
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