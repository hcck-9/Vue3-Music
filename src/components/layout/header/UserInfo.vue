<template>
  <div class="flex items-center cursor-pointer hover-text">
    <el-avatar size="small" circle class="bg-gray-200" :src="profile?.avatarUrl" />
    <span class="text-xs ml-1.5" v-if="isLogin">{{ profile.nickname }}</span>
    <span class="text-sm ml-1" @click="showLogin = true" v-else>点击登录</span>
  </div>
  <el-dialog v-model="showLogin" title="登录" width="330px" draggable append-to-body>
    <el-input :prefix-icon="Phone" size="large" v-model="phone" placeholder="请输入手机号码" />
    <el-input
      :prefix-icon="Lock"
      size="large"
      v-model="password"
      show-password
      placeholder="请输入密码"
      class="mt-5"
    />
    <button class="mt-5 w-full button py-5" style="border-radius: 5px" @click="loginSubmit">
      登录
    </button>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Phone, Lock } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const { showLogin, isLogin, profile } = storeToRefs(useUserStore())

const { login, checkLogin } = useUserStore()

const phone = ref('15865088919')
const password = ref('hskoo0214..')

const loginSubmit = () => {
  login(phone.value, password.value)
}

onMounted(() => {
  checkLogin()
})
</script>

<style scoped lang="scss"></style>
