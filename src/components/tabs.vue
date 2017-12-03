<template>
<div class="unify-tabs">
    <el-row>
        <el-col :span="1">
            <div class="contract-btn" @click="changeLeftNav">
              
                <!-- <b>
                    <i class="iconfont icon-all"></i></b>
                <b> -->
             <!-- <i class="iconfont icon-all"></i></b> -->
             <i :class="iconName"></i>
             <!-- <i class="iconfont">&#xe699;</i> -->
            </div>
        </el-col>
        <el-col :span="6">
            <el-breadcrumb separator="/" class = "unify-tabs">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户中心</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表接口</el-breadcrumb-item>
                <el-breadcrumb-item>查询</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="17">
            <!-- <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
                :key="item.name"
                v-for="(item, index) in editableTabs"
                :label="item.title"
                :name="item.name">
                {{item.content}}
            </el-tab-pane>
            </el-tabs> -->
            <el-tag 
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type"
            @close="handleClose(tag)"
            >
            <span @click="clickTab(tag.name)">
            {{tag.name}}
            </span>
            </el-tag>
        </el-col>
    </el-row>
    
    </div>
</template>

<script>
export default {
  data() {
      return {
        tags:this.$store.state.tagsURL,
        iconName : 'el-icon-d-arrow-left'
      }
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
      clickTab(name){
          let tagArry = this.$store.state.tagsURL;
        //把当前点击的标签改为绿色其他标签颜色全改为灰色
        for(let i = 0 ; i<tagArry.length ; i++){
          if(name == tagArry[i].name){
            tagArry[i].type = 'success';
          }else {
            tagArry[i].type = 'info';
          }
        }
      },
      // handleTabsEdit(targetName, action) {
      //   if (action === 'add') {
      //     let newTabName = ++this.tabIndex + '';
      //     this.editableTabs.push({
      //       title: 'New Tab',
      //       name: newTabName,
      //       content: 'New Tab content'
      //     });
      //     this.editableTabsValue = newTabName;
      //   }
      //   if (action === 'remove') {
      //     let tabs = this.editableTabs;
      //     let activeName = this.editableTabsValue;
      //     if (activeName === targetName) {
      //       tabs.forEach((tab, index) => {
      //         if (tab.name === targetName) {
      //           let nextTab = tabs[index + 1] || tabs[index - 1];
      //           if (nextTab) {
      //             activeName = nextTab.name;
      //           }
      //         }
      //       });
      //     }
          
      //     this.editableTabsValue = activeName;
      //     this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      //   }
      // },
      changeLeftNav () {
          this.iconName = this.$store.state.leftNavStatus ? 'el-icon-d-arrow-left':'el-icon-d-arrow-right'
           this.$store.commit('changeLeftNav')
        }
    },
    computed : {
    }
}
</script>

<style scoped>
.el-tabs {
    /* width: 2000px */
}
.contract-btn {
    border-bottom: 1px solid #DFE4ED;
    height: 41px;
    line-height: 41px;
    margin-left: 5px;
    font-size: 25px;
    color: #409EFF;
    cursor :pointer;
}
.unify-tabs {
     border-bottom: 1px solid #DFE4ED;
    height: 41px;
    line-height: 41px;
}
.el-tag {
  margin-right: 5px;
  z-index: -1;
  cursor:pointer
}
</style>

