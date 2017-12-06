<template>
  <div>
      
      <el-collapse v-model="activeNames" >
        <el-collapse-item name="1" class="collapse-class"> 
            <template slot="title" >
                <div class="panel-title">
                            基本信息
                        <i class="header-icon el-icon-info"></i>
                </div>
            </template>
            <div>
                <table class = "table-class">
                    <tr>
                        <td style="width:200px">
                            URL
                        </td>
                        <td style="color:red">
                            {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].path}}
                        </td>
                    </tr>
                    <tr>
                        <td >请求方式</td>
                        <td style="color:#409EFF"> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].sendWay.toUpperCase()}}</td>
                    </tr>
                    <tr>
                        <td>接口名称</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].summary}}</td>
                    </tr>
                    <tr>
                        <td>接口说明</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].description}}</td>
                    </tr>
                    <tr>
                        <td>consumes</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].consumes}}</td>
                    </tr>
                    <tr>
                        <td>produces</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].produces}}</td>
                    </tr>
                </table>
            </div>
           
        </el-collapse-item>
        <el-collapse-item  name="2" class="collapse-class">
            <template slot="title" >
                <div class="panel-title">
                            请求参数
                        <i class="header-icon el-icon-info"></i>
                </div>
            </template>
                     <table class = "table-class">
                    <tr>
                        <td style="width:200px">
                            URL
                        </td>
                        <td style="color:red">
                            {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].path}}
                        </td>
                    </tr>
                    <tr>
                        <td >请求方式</td>
                        <td style="color:#409EFF"> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].sendWay.toUpperCase()}}</td>
                    </tr>
                    <tr>
                        <td>接口名称</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].summary}}</td>
                    </tr>
                    <tr>
                        <td>接口说明</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].description}}</td>
                    </tr>
                    <tr>
                        <td>consumes</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].consumes}}</td>
                    </tr>
                    <tr>
                        <td>produces</td>
                        <td> {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].produces}}</td>
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
    }
}
</script>

<style scoped>
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
    tr :first-child {
         color: #868B9B;
    }
</style>