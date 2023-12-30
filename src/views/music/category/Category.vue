<template>
  <PlaylistHot @cat-change="catChange" />
  <div class="py-5 text-xl">{{ pageData.cat }}歌单</div>
  <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
    <div v-for="item in list" :key="item.id">
      <CoverPlay
        :pic-url="item.coverImgUrl"
        :name="item.name"
        :play-count="item.playCount"
        show-play-count
      />
      <div class="truncate text-xs mt-2 text-main leading-5">{{ item.name }}</div>
      <div class="truncate text-xs mt-2 text-main">{{ item.creator.nickname }}</div>
    </div>
  </div>
  <div class="py-10" v-if="pageData.more">
    <el-button class="w-full text-center" link @click="loadMore" :loading="pageData.loading">
      加载更多
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { PlayListDetail } from '@/models/playlist'
import { onMounted, reactive, ref } from 'vue'
import PlaylistHot from '@/views/music/category/PlaylistHot.vue'
import { useTopPlaylistHighquality } from '@/utils/api'

const list = ref<PlayListDetail[]>([])
const pageData = reactive({
  init: false,
  loading: false,
  limit: 20,
  before: 0,
  more: false,
  cat: '全部'
})

const catChange = (cat: string) => {
  pageData.cat = cat
  pageData.before = 0
  pageData.more = false

  getData()
}

const getData = async () => {
  pageData.loading = true
  try {
    const { playlists, more, lasttime } = await useTopPlaylistHighquality({
      limit: pageData.limit,
      before: pageData.before,
      cat: pageData.cat
    })
    if (pageData.before === 1) {
      list.value = playlists
    } else {
      list.value.push(...playlists)
    }

    pageData.init = true
    pageData.loading = false
    pageData.before = lasttime
    pageData.more = more
  } catch (error) {}
}

const loadMore = () => {
  getData()
}

onMounted(getData)
</script>

<style scoped lang="scss"></style>
