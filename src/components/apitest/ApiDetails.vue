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
                        <td >
                            URL
                        </td>
                        <td>
                            {{this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].path}}
                        </td>
                    </tr>
                    <tr>
                        <td>有效</td>
                        <td>12313</td>
                    </tr>
                    <tr>
                        <td>123123</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>123123</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>123123</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>123123</td>
                        <td>123123</td>
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
                     <el-table
                :data="tableData"
                stripe
                >
                <el-table-column
                prop="date"
                label="日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
        </el-collapse-item>
        
        </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeNames: ['1','2'],
        routeStart:this.$route.params.start,
        routeEnd :this.$route.params.end
      };
    },
    props : ['start','end'],
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
        box-shadow: 3px 3px 8px #C4C4C4;
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
    padding: 10px;
    border-bottom: 1px solid #E5E5E5;
    }
</style>