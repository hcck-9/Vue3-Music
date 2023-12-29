import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  useDJPersonalizedRecommened,
  useDJTodayPreferred,
  usePersonalizedDjProgram,
  useDJCategory,
  useDJTopList,
  useDJRadioPaidPremium
} from '@/utils/api'
import type { PersonalizedDjProgram } from '@/models/personalized'
import type {
  DJCategory,
  DJHotRankItem,
  DJPersonalizedRecommend,
  DJTodayPreferred,
  DJRadioPaidPremium
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
  const DJTopList = ref<DJHotRankItem[]>([])
  const getDJTopList = async () => {
    if (DJTopList.value.length) return
    DJTopList.value = await useDJTopList()
  }

  // radar 付费精品
  const DJRadioPaidPremiumList = ref<DJRadioPaidPremium[]>([])
  const getDJRadioPaidPremium = async () => {
    if (DJRadioPaidPremiumList.value.length) return
    DJRadioPaidPremiumList.value = await useDJRadioPaidPremium()
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
    getDJRadioPaidPremium
  }
})
