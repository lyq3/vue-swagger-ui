import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import ApiTabs from "@/components/apitest/ApiTabs"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        //子路由
        { path: 'api/:id', component: ApiTabs },

        // ...其他子路由
      ]
    }
  ]
})
