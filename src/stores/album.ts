import { AlbumHotNewProduct } from '@/models/album'
import { useHotNewAlbum } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlbumStore = defineStore('album', () => {
  // 热门新碟
  const albumHotNew = ref<AlbumHotNewProduct[]>([])

  const getAlbumHotNew = async () => {
    if (albumHotNew.value.length) return
    albumHotNew.value = await useHotNewAlbum()
  }

  return {
    albumHotNew,
    getAlbumHotNew
  }
})
