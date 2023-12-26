import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  useDJPersonalizedRecommened,
  useDJTodayPreferred,
  usePersonalizedDjProgram
} from '@/utils/api'
import type { PersonalizedDjProgram } from '@/models/personalized'
import type { DJPersonalizedRecommend, DJTodayPreferred } from '@/models/dj'

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

  return {
    personalizedDjProgram,
    getPersonalizedDjProgram,
    DJPersonalizedRecommened,
    getDJPersonalizedRecommened,
    DJTodayPreferred,
    getDJTodayPreferred
  }
})
