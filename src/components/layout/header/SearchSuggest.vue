<template>
  <div v-if="suggestData" v-for="order in suggestData.order">
    <div class="pt-2 pb-1.5 px-2.5">{{ getTitle(order) }}</div>
    <div
      v-if="order === 'songs'"
      v-for="song in suggestData.songs"
      :key="song.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
      @click="play(song.id)"
    >
      <span class="text-emerald-500">{{ song.name }}</span>
      <span class="pl-1"> - {{ song.artists.first()?.name }}</span>
    </div>
    <div
      v-if="order === 'albums'"
      v-for="album in suggestData.albums"
      :key="album.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
    >
      <span class="text-emerald-500">{{ album.name }}</span>
      <span class="pl-1"> - {{ album.artist.name }}</span>
    </div>
    <div
      v-if="order === 'artists'"
      v-for="artist in suggestData.artists"
      :key="artist.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="artist.img1v1Url" />
      <span class="text-emerald-500 ml-2">{{ artist.name }}</span>
    </div>
    <div
      v-if="order === 'playlists'"
      v-for="playlist in suggestData.playlists"
      :key="playlist.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="playlist.coverImgUrl" />
      <span class="text-emerald-500 ml-2 truncate flex-1 w-1">{{ playlist.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '@/stores/player'

const { suggestData, showSearchView } = storeToRefs(useSearchStore())

const { play } = usePlayerStore()

const router = useRouter()
const routerPush = (name: string, id: number) => {
  router
    .push({
      name: name,
      query: {
        id: id
      }
    })
    .then(() => {
      showSearchView.value = false
    })
}

const getTitle = (name: string) => {
  switch (name) {
    case 'songs':
      return '单曲'
    case 'albums':
      return '专辑'
    case 'artists':
      return '歌手'
    case 'playlists':
      return '歌单'
    default:
      return name
  }
}
</script>

<style scoped lang="scss"></style>
