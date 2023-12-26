import { Personalized, PersonalizedNewSong } from '@/models/personalized'
import { TopListDetail } from '@/models/toplist_detail'
import { usePersonalized, usePersonalizedNewSong, useTopListDetail } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', () => {
  // 推荐
  const personalized = ref<Personalized[]>([])

  const getPersonalized = async () => {
    if (personalized.value.length) return
    personalized.value = await usePersonalized()
  }

  // 单曲推荐
  const personalizedNewSong = ref<PersonalizedNewSong[]>([])

  const getPersonalizedNewSong = async () => {
    if (personalizedNewSong.value.length) return
    personalizedNewSong.value = await usePersonalizedNewSong()
  }
  // 榜单内容摘要
  const topListDetailData = ref<TopListDetail[]>([])
  const getTopListDetailData = async () => {
    if (topListDetailData.value.length) return
    topListDetailData.value = await useTopListDetail()
  }

  return {
    personalized,
    getPersonalized,
    personalizedNewSong,
    getPersonalizedNewSong,
    topListDetailData,
    getTopListDetailData
  }
})
