import { Personalized, PersonalizedNewSong } from '@/models/personalized'
import { usePersonalized, usePersonalizedNewSong } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', () => {
  const personalized = ref<Personalized[]>([])

  const getPersonalized = async () => {
    if (personalized.value.length) return
    personalized.value = await usePersonalized()
  }

  const personalizedNewSong = ref<PersonalizedNewSong[]>([])

  const getPersonalizedNewSong = async () => {
    if (personalizedNewSong.value.length) return
    personalizedNewSong.value = await usePersonalizedNewSong()
  }

  return {
    personalized,
    getPersonalized,
    personalizedNewSong,
    getPersonalizedNewSong
  }
})
