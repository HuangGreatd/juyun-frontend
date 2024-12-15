import type { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomePage from '@/page/HomePage.vue'
import UserManagePage from '@/page/admin/UserManagePage.vue'
import UserRegisterPage from '@/page/user/UserRegisterPage.vue'
import UserLoginPage from '@/page/user/UserLoginPage.vue'
import UserPersonPage from '@/page/user/UserPersonPage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/user/login',
    name: '用户登录',
    component: UserLoginPage,
  },
  {
    path: '/user/person',
    name: '个人中心',
    component: UserPersonPage,
  },
  {
    path: '/user/register',
    name: '用户注册',
    component: UserRegisterPage,
  },
  {
    path: '/admin/userManage',
    name: '用户管理',
    component: UserManagePage,
  },
]
