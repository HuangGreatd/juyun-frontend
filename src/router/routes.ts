import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/page/HomePage.vue'
import UserManagePage from '@/page/admin/UserManagePage.vue'
import UserRegisterPage from '@/page/user/UserRegisterPage.vue'
import UserLoginPage from '@/page/user/UserLoginPage.vue'
import UserPersonPage from '@/page/user/UserPersonPage.vue'
import AddPicturePage from '@/page/picture/AddPicturePage.vue'
import PictureManagePage from '@/page/admin/PictureManagePage.vue'
import DetailPicturePage from '@/page/picture/DetailPicturePage.vue'
import QrCodeLogin from '@/page/user/QrCodeLogin.vue'
import SpaceManagePage from '@/page/admin/SpaceManagePage.vue'
import AddSpacePage from '@/page/space/AddSpacePage.vue'
import MySpacePage from '@/page/space/MySpacePage.vue'
import SpaceDetailPage from '@/page/space/SpaceDetailPage.vue'
import SearchPicturePage from '@/page/picture/SearchPicturePage.vue'
import SpaceUserManagePage from '@/page/spaceuser/SpaceUserManagePage.vue'

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
    path: '/user/qrcodeLogin',
    name: '扫码登录',
    component: QrCodeLogin,
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
    path: '/admin/spaceManage',
    name: '空间管理',
    component: SpaceManagePage,
  },
  {
    path: '/add_space',
    name: '创建空间',
    component: AddSpacePage,
  },
  {
    path: '/my_space',
    name: '我的空间',
    component: MySpacePage,
  },
  {
    path: '/space/:id',
    name: '空间详情',
    component: SpaceDetailPage,
    props: true,
  },
  {
    path: '/spaceUserManage/:id',
    name: '空间成员管理',
    component: SpaceUserManagePage,
    props: true,
  },

  {
    path: '/add_picture',
    name: '创建图片',
    component: AddPicturePage,
  },
  {
    path: '/search_picture',
    name: '图片搜索',
    component: SearchPicturePage,
  },

  {
    path: '/picture/:id',
    name: '图片详情',
    component: DetailPicturePage,
    props: true,
  },
]
