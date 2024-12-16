import type { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomePage from '@/page/HomePage.vue'
import UserManagePage from '@/page/admin/UserManagePage.vue'
import UserRegisterPage from '@/page/user/UserRegisterPage.vue'
import UserLoginPage from '@/page/user/UserLoginPage.vue'
import UserPersonPage from '@/page/user/UserPersonPage.vue'
import AddPicturePage from '@/page/picture/AddPicturePage.vue'
import PictureManagePage from '@/page/admin/PictureManagePage.vue'
import DetailPicturePage from '@/page/picture/DetailPicturePage.vue'

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
  {
    path: '/admin/pictureManage',
    name: '图片管理',
    component: PictureManagePage,
  },
  {
    path: '/picture/addPicture',
    name: '创建图片',
    component: AddPicturePage,
  },
  {
    path: '/picture/:id',
    name: '图片详情',
    component: DetailPicturePage,
    props: true,
  },
]
