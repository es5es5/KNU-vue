import Vue from 'vue'
import Router from 'vue-router'

/* Main */
import MainLayout from '@/components/MainLayout.vue'

/* children */
// 사진첩
import CommonAlbumRoutes from '@/templates/album/commonAlbum/routes/index.js'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/album',
      component: MainLayout,
      children: [
        ...CommonAlbumRoutes
      ]
    }
  ]
})

export default router