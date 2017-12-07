<template>
  <div class = "outerClass" v-bind:style="{ height: this.$store.state.windowHeight -100+'px'}">
      <el-button type="primary" class="btn-class btn-float">{{tree.sendWay.toUpperCase()}}</el-button>
      <el-input  v-model="tree.path" placeholder="请输入内容" class="btn-class input-float" ></el-input>
      <el-button type="success" class="btn-class" @click="getSendParam">发送请求</el-button>
      <el-collapse v-model="activeName" >
      <!--参数面板-->
      <el-collapse-item  name="1" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            请求参数
                        <i class="header-icon el-icon-upload"></i>
                </div>
            </template>
            <!--接口参数列表-->
                     <table class = "table-class parm-table-class">
                    <tr>
                        <td style="width:10px"><el-checkbox checked="checkAll"  v-model="checkAll"  @change="handleCheckAllChange"></el-checkbox></td>
                        <td style="width:200px">参数名称</td>
                        <td>参数值</td>
                        <td style="width:30px">删除</td>
                    </tr>
                    
                    <tr v-for="(key,index) in tree.parameters">
                        <td > <el-checkbox checked="true" v-model="key.checked"></el-checkbox></td>
                        <td ><el-input v-model="key.name"></el-input></td>
                        <td><el-input :placeholder="key.description" v-model="key.value"></el-input></td>
                        <td><el-button size="small" type="danger" @click="delParam(index)">删除</el-button></td>
                        
                    </tr>
                    
                </table>
                 <div style="color:red; text-align: center" v-if="!tree.parameters">无参数</div>
        </el-collapse-item>
        <el-collapse-item  name="2" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            响应结果
                        <i class="header-icon el-icon-upload"></i>
                </div>
            </template>
             <el-button style="margin:0 20px" size="small" @click="famtJSON" type="success" plain>格式化JSON</el-button>
                    <el-switch
                    v-model="openTree"
                    active-text="展开所有节点">
                    </el-switch>
                    <pre id= "json-renderer_res" >
                         {{res}}
                     </pre>
            <!--接口参数列表-->
                     <!-- <table class = "table-class parm-table-class">
                    <tr>
                        <td style="width:100px"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></td>
                        <td >参数名称</td>
                        <td>参数值</td>
                        <td>删除</td>
                    </tr>
                    
                    <tr v-for="key in tree.parameters">
                        <td >{{key.name}}</td>
                        <td >{{key.description}}</td>
                        <td>{{key.type}}</td>
                        <td>{{key.in}}</td>
                        
                    </tr>
                    
                </table> -->
                 <div style="color:red; text-align: center" v-if="!tree.parameters">无参数</div>
        </el-collapse-item>
      </el-collapse>
  </div>
</template>

<script>
export default {
  name : 'ApiTest',
  data(){
      return {
          url:tree.path,
          activeName: ['1'],
          checkAll : true,
          openTree :false,
          marksTree : true,
          res:'暂无数据'
      }
  },
  methods : {
      delParam(index){
          this.tree.parameters.splice(index,1);
      },
      getSendParam(){
          console.log(this.tree.parameters);
          let _this = this;
          let url = this.tree.path;
          let loading ;
          $.ajax({
              url : '/webchat'+url,
              data : {},
              type : _this.tree.sendWay.toLowerCase(),
              dataType : 'json',
              beforeSend:function(){
                loading =  _this.openFullScreen();
              },
              error:function(){
                loading.close();
              },
              success : function(res){
                loading.close();
                _this.res = res;
            
              }
          });
      },
      famtJSON(){
          let _this = this;
           $('#json-renderer_res').jsonViewer (eval(_this.res),{collapsed :!_this.openTree,withQuotes :!_this.marksTree});
      },
      handleCheckAllChange(){
          let _this = this;
          console.log(this.checkAll)
          for(let i =0 ; i<_this.tree.parameters.length;i++ ){
            if(_this.checkAll){
                _this.tree.parameters[i].checked = true;
            } else {
                _this.tree.parameters[i].checked = false;
            }
          }
      },
      openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        });
        return loading;
      }
  },
  components : {
  },
  computed : {
      tree (){
            return this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end];
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
    .btn-class {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius:0;
        border-radius: 0;
    }
    .btn-float{
        float: left;
    }
    .input-float {
        float: left;
        width:80%
    }
    .panel-class {
        margin-top: 5px;
        /* float: left; */
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
        margin: 20px 0;
        /* box-shadow: 3px 3px 8px #C4C4C4; */
    }
</style>
