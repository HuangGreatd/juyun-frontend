<template>
  <div id="userPersonPage">
    <a-card hoverable style="width: 100%; display: flex">
      <div style="display: flex; gap: 24px">
        <div style="flex-shrink: 0">
          <img
            alt="用户头像"
            :src="userInfo?.userAvatar"
            style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px"
          />
        </div>
        <div style="flex-grow: 1">
          <h2 style="margin-bottom: 16px; font-size: 24px">
            {{ userInfo?.userName || '未设置昵称' }}
          </h2>
          <div class="user-info">
            <p>账号: {{ userInfo?.userAccount }}</p>
            <p>角色: {{ userInfo?.userRole }}</p>
            <p>简介: {{ userInfo?.userProfile || '这个人很懒，没有留下简介' }}</p>
            <p>创建时间: {{ formatDate(userInfo?.createTime) }}</p>
          </div>
        </div>
      </div>
      <div style="position: absolute; bottom: 24px; right: 24px;">
        <a-button type="primary">修改资料</a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { getLoginUserUsingGet } from '@/api/userController.ts'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

interface UserInfo {
  id: number
  userAccount: string
  userName: string
  userAvatar: string
  userProfile: string
  userRole: string
  createTime: string
}

const userInfo = ref<UserInfo>()

const formatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

onMounted(async () => {
  try {
    const res = await getLoginUserUsingGet()
    userInfo.value = res.data.data
  } catch (error) {
    console.error('获取用户信息失败:', error)
  }
})
</script>

<style scoped>
.user-info p {
  margin-bottom: 12px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.5;
}

#userPersonPage {
  max-width: 180vh;
  max-height: 40vh;
  margin: 0 auto;
  padding: 24px;
}
</style>
