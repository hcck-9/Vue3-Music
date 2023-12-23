import { defineStore } from 'pinia'
import { useLogin } from '@/utils/api'
import type { UserProfile } from '@/models/user'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      cookie: '',
      showLogin: false,
      profile: (JSON.parse(localStorage.getItem('G-USER')) || {}) as UserProfile
    }
  },
  getters: {
    isLogin: (state) => {
      return state.profile?.userId > 0
    }
  },
  actions: {
    async login(phone: string, password: string) {
      const res = await useLogin(phone, password)
      if (res.code === 200) {
        const { token, cookie, profile } = res
        this.token = token
        this.cookie = cookie
        document.cookie = cookie
        localStorage.setItem('USER-TOKEN', this.token)
        localStorage.setItem('USER-COOKIR', this.cookie)
        localStorage.setItem('G-USER', JSON.stringify(profile))
        this.profile = res.profile
        this.showLogin = false
      }
    },
    checkLogin() {
      const G_USER = JSON.parse(localStorage.getItem('G-USER'))
      if (G_USER && G_USER.userId > 0) {
        this.showLogin = false
      }
    },
    logout() {
      localStorage.clear()
    }
  }
})
