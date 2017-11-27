<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  ::-webkit-scrollbar{width:0px}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /* color: #2c3e50;
  margin-top: 60px; */
  padding: 0px;
  margin: 0px;
}
body {
  padding: 0px;
  margin: 0px;
  position: fixed;
  width: 100%
}
</style>
