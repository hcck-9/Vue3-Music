<template>
  <div class="flex items-end">
    <Title title="全部新碟" :hasRight="false" />
    <div class="ml-5 py-2 flex justify-around">
      <div v-for="(area, index) in areas" :key="area.key" class="text-xs">
        <span class="cursor-pointer hover:underline" @click="changeArea(area.key)">
          {{ area.name }}
        </span>
        <span v-if="index < areas.length - 1" class="ml-1.5 mr-2">|</span>
      </div>
    </div>
  </div>
  <div class="grid grid-flow-row grid-cols-5 xl:grid-cols-10 gap-5">
    <div
      v-for="album in allHotNerAlbum"
      :key="album.albumId"
      class="flex flex-col"
      @click="router.push({ name: Pages.albumDetail, query: { id: album.albumId } })"
    >
      <CoverPlay :name="album.albumName" :pic-url="album.coverUrl" :play-count="0" />
      <div class="mt-2 text-xs text-main truncate">{{ album.albumName }}</div>
      <div class="mt-2 text-main text-xs text-dc">{{ album.artistName }}</div>
    </div>
  </div>
  <div class="py-10" v-if="pageData.more">
    <el-button class="w-full text-center" link @click="loadMore" :loading="pageData.loading">
      加载更多
    </el-button>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { AlbumLanguageStyle } from '@/models/album'
import { useAllNewAlbun } from '@/utils/api'
import { onMounted, reactive, ref } from 'vue'

import { useRouter } from 'vue-router'
import { Pages } from '@/router/pages'
const router = useRouter()

const allHotNerAlbum = ref<AlbumLanguageStyle[]>([])
const pageData = reactive({
  init: false,
  loading: false,
  area: 'Z_H',
  page: 1,
  limit: 30,
  more: false
})

const changeArea = (key: string) => {
  pageData.area = key
  getData()
}
const getData = async () => {
  pageData.loading = true
  try {
    const { albumProducts, hasNextPage } = await useAllNewAlbun(pageData)
    if (pageData.page === 1) {
      allHotNerAlbum.value = albumProducts
    } else {
      allHotNerAlbum.value.push(...albumProducts)
    }
    pageData.more = hasNextPage
    pageData.init = true
    pageData.loading = false
  } catch (error) {}
}

const loadMore = () => {
  pageData.page++
  getData()
}

onMounted(getData)

const areas: {
  key: string
  name: string
}[] = [
  {
    key: 'Z_H',
    name: '华语'
  },
  {
    key: 'E_A',
    name: '欧美'
  },
  {
    key: 'KR',
    name: '韩国'
  },
  {
    key: 'JP',
    name: '日本'
  }
]
</script>

<style scoped lang="scss"></style>
