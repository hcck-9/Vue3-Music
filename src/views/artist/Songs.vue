<template>
  <div class="mt-2 flex justify-between items-center">
    <div class="flex gap-x-2">
      <button class="w-28 button-outline button-sm" @click="playAll">
        <IconPark :icon="PlayOne" class="mr-1" size="14" />
        播放全部
      </button>
      <button class="w-28 button-outline button-sm">
        <IconPark :icon="Download" class="mr-1" size="14" />
        下载
      </button>
      <button class="w-28 button-outline button-sm">
        <IconPark :icon="FullSelection" class="mr-1" size="14" />
        批量操作
      </button>
    </div>
    <div class="flex gap-x-5 mr-10 text-xs">
      <div
        class="hover-text"
        :class="{ 'text-emerald-400': pageData.order === 'hot' }"
        @click="setOrder('hot')"
      >
        最新
      </div>
      <div
        class="hover-text"
        :class="{ 'text-emerald-400': pageData.order === 'time' }"
        @click="setOrder('time')"
      >
        最热
      </div>
    </div>
  </div>
  <div class="mt-2">
    <div class="flex text-xs py-2 text-gray-400">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/3">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm">
      <template v-for="song in songList" :key="song.id">
        <SongListItem :show-ar-name="false" show-al-name :song="song" :dj="false" />
      </template>
    </div>
    <div class="flex justify-center py-5" v-if="songList.length > 0 && !pageData.noMore">
      <el-button :loading="pageData.loading" class="text-center w-full" @click="loadMore" link
        >加载更多</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayOne, Download, FullSelection } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import { computed, onMounted, reactive, ref } from 'vue'
import { Song } from '@/models/song'
import { usePlayerStore } from '@/stores/player'
import { useArtistSongs } from '@/utils/api'
import SongListItem from '@/components/common/SongListItem.vue'

const props = defineProps<{ id: number }>()

const songList = ref<Song[]>([])

const { pushPlayList, play } = usePlayerStore()

const playAll = () => {
  pushPlayList(false, ...songList.value)
  play(songList.value.first().id)
}

const pageData = reactive({
  order: 'hot',
  limit: 30,
  page: 1,
  loading: false,
  noMore: false
})

const offset = computed(() => {
  if (pageData.page === 1) return 0
  return songList.value.length + pageData.limit
})

const getData = async () => {
  try {
    pageData.loading = true
    const { songs } = await useArtistSongs(props.id, pageData.order, pageData.limit, offset.value)
    if (pageData.page === 1) {
      songList.value = songs
    } else {
      songList.value.push(...songs)
    }
    if (songs.length < pageData.limit) pageData.noMore = true
  } catch (err) {
    pageData.page--
  } finally {
    pageData.loading = false
  }
}

const loadMore = () => {
  pageData.page++
  getData()
}

const setOrder = (order: string) => {
  pageData.order = order
}

onMounted(async () => {
  await getData()
})
</script>

<style scoped lang="scss"></style>
