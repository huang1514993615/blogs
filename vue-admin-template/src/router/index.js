import Vue from 'vue'
import Router from 'vue-router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)
// Vue.use(ElementUI);
/* Layout */
import Layout from '@/layout'
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'; // 富文本基于quill

Vue.use({quillEditor})
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '用户信息', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '分类模块', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'particulars',
        hidden: true,
        name: 'Particulars',
        component: () => import('@/views/particulars/index'),
        meta: { title: 'Particulars', icon:'particulars'}
      },
      {
        path: 'comment',
        hidden: true,
        name: 'Comment',
        component: () => import('@/views/comment/index'),
        meta: { title: 'Comment', icon:'comment'}
      },
      {
        path: 'reviseAnEssay',
        hidden: true,
        name: 'ReviseAnEssay',
        component: () => import('@/views/revise/index'),
        meta: { title: 'ReviseAnEssay', icon:'reviseAnEssay'}
      }
      
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '博客数据', icon: 'form' }
      }
    ]
  },
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  // {
  //   path: '/particulars',
  //   component: Layout,
  //   hidden: true,
  //   redirect: '/particulars',
  //   children: [{
  //     path: 'particulars',
  //     name: 'particulars',
  //     component: () => import('@/views/particulars/index'),
  //     meta: { title: '文章详情', icon: 'particulars' }
  //   }]
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
