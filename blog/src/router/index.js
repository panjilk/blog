import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue'
import register from '../views/register.vue'
import main from '../views/main.vue'
import booklist from '../views/BookList.vue'
import mainpage from '../views/mainpage/mainpage.vue'
import category from '../views/mainpage/category.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'booklist',
          name: 'booklist',
          component: booklist
        },
        {
          path: 'mainpage',
          name: '主页',
          component: mainpage
        },
        {
          path: 'category',
          name: '分类',
          component: category
        },
        {
          path: 'information',
          name: '个人信息',
          component: import('../views/mainpage/information.vue')
        },
        {
          path: 'userchange',
          name: '更换头像',
          component: import('../views/mainpage/userchange.vue')
        },
        {
          path: 'changepwd',
          name: '修改密码',
          component: import('../views/mainpage/changepwd.vue')
        },
        {
          path: 'inquire',
          name: '查询',
          component: import('../views/mainpage/inquire.vue')
        }
      ]
    }
  ]
})

export default router
