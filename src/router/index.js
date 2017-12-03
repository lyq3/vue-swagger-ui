import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/introduction/index'
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
        { path: 'api/:start/:end', component: ApiTabs },

        {path: '', component: Introduction}
      ]
    }
  ]
})
