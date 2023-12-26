import { PersonalizedMv } from '@/models/personalized'
import { PersonalizedPrivateContent } from '@/models/video'
import { usePersonalizedMv, usePersonalizedPrivateContentList } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVideoStore = defineStore('mv', () => {
  // 推荐MV
  const personalizedMv = ref<PersonalizedMv[]>([])

  const getPersonalizedMv = async () => {
    if (personalizedMv.value.length) return
    personalizedMv.value = await usePersonalizedMv()
  }

  // 独家放送歌曲
  const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([])
  const getPersonalizedPrivateContent = async () => {
    if (personalizedPrivateContent.value.length) return
    personalizedPrivateContent.value = await usePersonalizedPrivateContentList(4)
  }
  return {
    personalizedMv,
    getPersonalizedMv,
    personalizedPrivateContent,
    getPersonalizedPrivateContent
  }
})
