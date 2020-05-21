import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import comment from '@/pages/comment'
import particulars from '@/pages/particulars'
import search from '@/pages/search'
import leaveWord from '@/pages/leaveWord'
import time from '@/pages/time'
import classify from '@/pages/classify'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// Vue.use(mavonEditor)
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'; // 富文本基于quill


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home,
    },
    {
      path: '/comment',
      name: 'comment',
      component:comment,
    },{
      path:'/particulars',
      name:'particulars',
      component:particulars
    },{
      path:'/search',
      name:'search',
      component:search
    },{
      path:'/leaveWord',
      name:'leaveWord',
      component:leaveWord
    },{
      path:'/time',
      name:'time',
      component:time
    },
    {
      path:'/classify',
      name:'classify',
      component:classify
    }
  ]
})
