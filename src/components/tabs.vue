<template>
<div class="unify-tabs">
    <el-row>
        <el-col :span="1">
            <div class="contract-btn">
                <!-- <b>
                    <i class="iconfont icon-all"></i></b>
                <b> -->
             <!-- <i class="iconfont icon-all"></i></b> -->
             <i class="el-icon-d-arrow-left" style="font-w"></i>
             <!-- <i class="iconfont">&#xe699;</i> -->
            </div>
        </el-col>
        <el-col :span="6">
            <el-breadcrumb separator="/" class = "unify-tabs">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
            :type="tag.type">
            {{tag.name}}
            </el-tag>
        </el-col>
    </el-row>
    
    </div>
</template>

<script>
export default {
  data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' }
        ]
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    },
    computed : {
        changeLeftNav () {
          return this.$store.state.leftNavStatus
        }
    }
}
</script>

<style scoped>
.el-tabs {
    width: 2000px
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
</style>

