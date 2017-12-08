// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import Vuex from 'vuex'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font-icon/iconfont.css'
import 'jquery.json-viewer/json-viewer/jquery.json-viewer.css'
import axios from 'axios'
import jsonViewer from 'jquery.json-viewer/json-viewer/jquery.json-viewer.js'

axios.defaults.baseURL = "/";
axios.defaults.headers.get['Content-Type']='application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){//初始化请求后台获取API数据
    this.$store.commit('initJSONData');
    let _this = this;
    window.onresize = function(){
      _this.$store.commit('chengeHeight');
    }
    }
})
