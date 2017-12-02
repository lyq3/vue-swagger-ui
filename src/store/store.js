import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        leftNavStatus: false,
        JSONData : {}
      },
    mutations: {
        changeLeftNav (state) {
          state.leftNavStatus = !state.leftNavStatus
        },
        initJSONData (state) {//从后台获取数据
          Vue.prototype.$http.get('/v2/api-docs')
            .then(function(response){
                state.JSONData = response.data;
            })
            .catch(function(err){
                alert('/v2/api-docs接口无法获取数据')
            });
        }
      },
      getters : {
          getSwaggerVersion : state => {
            return state.JSONData.swagger;
          },
          getInfo : state => {
            return state.JSONData.info;
          },
          getHost : state => {
            return state.JSONData.host;
          },
          getTags : state => {
              return state.JSONData.tags;
          },
          getPaths : state => {
            return state.JSONData.paths;
          },
          getDefinitions : state => {
            return state.JSONData.definitions;
          }
      }
});