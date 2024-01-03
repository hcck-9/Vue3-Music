import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  useDJPersonalizedRecommened,
  useDJTodayPreferred,
  usePersonalizedDjProgram,
  useDJCategory,
  useDJTopList,
  useDJRadioPaidPremium,
  useDJNewExcellent,
  useDJCategoryPopularRadio
} from '@/utils/api'
import type { PersonalizedDjProgram } from '@/models/personalized'
import type {
  DJCategory,
  DJHotRankItem,
  DJPersonalizedRecommend,
  DJTodayPreferred,
  DJRadioPaidPremium,
  DJNewExcellent
} from '@/models/dj'

export const useDJStore = defineStore('dj', () => {
  // discover 电台推荐
  const personalizedDjProgram = ref<PersonalizedDjProgram[]>([])
  const getPersonalizedDjProgram = async () => {
    if (personalizedDjProgram.value.length) return
    personalizedDjProgram.value = await usePersonalizedDjProgram()
  }

  // music 个性化电台推荐
  const DJPersonalizedRecommened = ref<DJPersonalizedRecommend[]>([])
  const getDJPersonalizedRecommened = async () => {
    if (DJPersonalizedRecommened.value.length) return
    DJPersonalizedRecommened.value = await useDJPersonalizedRecommened()
  }

  // music 今日优选
  const DJTodayPreferred = ref<DJTodayPreferred[]>([])
  const getDJTodayPreferred = async () => {
    if (DJTodayPreferred.value.length) return
    DJTodayPreferred.value = await useDJTodayPreferred()
  }

  // radar DJ类别列表
  const DJCategoryList = ref<DJCategory[]>([])
  const getDJCategoryList = async () => {
    if (DJCategoryList.value.length) return
    DJCategoryList.value = await useDJCategory()
  }

  // radar 节目排行榜
  const DJTopList = ref<DJRadioPaidPremium[]>([])
  const getDJTopList = async () => {
    if (DJTopList.value.length) return
    const dataList = ref<DJHotRankItem[]>([])
    dataList.value = await useDJTopList()
    DJTopList.value = dataList.value.slice(0, 11).map((item) => ({
      id: item.program.id,
      rank: item.rank,
      lastRank: item.lastRank,
      score: item.score,
      name: item.program.mainSong.name,
      picUrl: item.program.coverUrl,
      creatorName: item.program.dj.brand
    }))
  }

  // radar 付费精品
  const DJRadioPaidPremiumList = ref<DJRadioPaidPremium[]>([])
  const getDJRadioPaidPremium = async () => {
    if (DJRadioPaidPremiumList.value.length) return
    DJRadioPaidPremiumList.value = await useDJRadioPaidPremium()
  }

  // radar 分类推荐
  const DJNewExcellentList = ref<DJNewExcellent[]>([])
  const getDJNewExcellentList = async (type: number) => {
    DJNewExcellentList.value = await useDJNewExcellent(type)
  }

  // radar 类别热门电台
  const DJCategoryPopularRadioList = ref<DJNewExcellent[]>([])
  const getDJCategoryPopularRadioList = async (type: number, limit: number, page: number) => {
    DJCategoryPopularRadioList.value = await useDJCategoryPopularRadio(type, limit, page)
  }

  return {
    personalizedDjProgram,
    getPersonalizedDjProgram,

    DJPersonalizedRecommened,
    getDJPersonalizedRecommened,

    DJTodayPreferred,
    getDJTodayPreferred,

    DJCategoryList,
    getDJCategoryList,

    DJTopList,
    getDJTopList,

    DJRadioPaidPremiumList,
    getDJRadioPaidPremium,

    DJNewExcellentList,
    getDJNewExcellentList,

    DJCategoryPopularRadioList,
    getDJCategoryPopularRadioList
  }
})
