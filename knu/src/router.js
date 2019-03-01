import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import MainLayout from '@/components/MainLayout'

/* Album */
import AlbumRoutes from '@/templates/album/album/routes'

/* Member */
import WorkspaceRoutes from '@/templates/member/workspace/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        ...AlbumRoutes,
        ...WorkspaceRoutes
      ]
    }
  ]
})

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
