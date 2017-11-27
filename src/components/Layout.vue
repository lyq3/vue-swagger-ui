<template>
  <el-container>
    <el-container>
        <v-NvaLeft></v-NvaLeft>
        <el-container>
            <el-header>
              <v-header></v-header>
            </el-header>
            <el-main>Main3333333333333333333333333333333333333333333333333333333333333333333333</el-main>
        </el-container>
    </el-container>
</el-container>
</template>

<script>
import NvaLeft from "./NvaLeft"
import Header from "./header"

export default {
    data : function(){
        return {
            
        }
    },
    components : {
        'v-NvaLeft' : NvaLeft,
        'v-header' : Header
    }
}
</script>

<style scoped>

</style>
