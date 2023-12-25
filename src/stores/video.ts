import { PersonalizedMv } from '@/models/personalized'
import { usePersonalizedMv } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVideoStore = defineStore('mv', () => {
  // 推荐MV
  const personalizedMv = ref<PersonalizedMv[]>([])

  const getPersonalizedMv = async () => {
    if (personalizedMv.value.length) return
    personalizedMv.value = await usePersonalizedMv()
  }

  return {
    personalizedMv,
    getPersonalizedMv
  }
})
