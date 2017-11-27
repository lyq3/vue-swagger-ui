import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        leftNavStatus: false
      },
    mutations: {
        changeLeftNav (state) {
          state.leftNavStatus = !state.leftNavStatus
        }
      }
});