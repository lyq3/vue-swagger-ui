import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/introduction/index'
import Layout from '@/components/Layout'
import ApiIndex from "@/components/apitest/ApiIndex"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        //子路由
        { path: 'api/:start/:end', component: ApiIndex },

        {path: '', component: Introduction}
      ]
    }
  ]
})
