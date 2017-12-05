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
            <el-table
                :data="tableData"
                stripe
                class="table-class" >
                <el-table-column
                prop="key"
                label="Key"
                width="300">
                    <template slot-scope="scope">
                        <b style="color:#878D99" v-html=" scope.row.key"> </b>
                    </template>
                </el-table-column>
                <el-table-column
                prop="value"
                label="Value">
                <template slot-scope="scope">
                    <b  v-html=" scope.row.value"> </b>
                </template>
                </el-table-column>
            </el-table>
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
                class="table-class">
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
        tableData: [{
          key: '接口地址',
          value: '<span style="color:red">'+ this.$store.getters.getMenuTreeObj[this.$route.params.start].paths[this.$route.params.end].path+'</span>'
        }, {
           key: '接口名称',
          value: '新增人员'
        }, {
          key: '接口说明',
          value: '有效标识Y-有效N-无效'
        }, {
          key: '请求方式',
          value: '<span style="color:#409EFF">POST</span>'
        },
        {
          key: 'consumes',
          value: '<span style="color:#409EFF">application/json</span>'
        },
        {
          key: 'produces',
          value: '<span style="color:#409EFF">*/*</span>'
        }
        ]
      };
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
    .table-class{
        width: 100%;
        border-top: 1px solid #E5E5E5;
    }
</style>