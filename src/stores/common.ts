import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useBanner, useDJBanner } from '@/utils/api'
import type { Banner } from '@/models/banner'

export const useCommonStore = defineStore('common', () => {
  // common banner
  const banners = ref<Banner[]>([])

  const getBanners = async () => {
    if (banners.value.length) return
    banners.value = await useBanner()
  }

  // 电台 banner
  const DJBanners = ref<Banner[]>([])

  const getDJBanners = async () => {
    if (DJBanners.value.length) return
    DJBanners.value = await useDJBanner()
  }

  return {
    banners,
    getBanners,
    DJBanners,
    getDJBanners
  }
})
