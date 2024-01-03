<template>
  <div class="mt-2">
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10">
      <div
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ 'item-1': index === 0 }"
        @click="router.push({ name: Pages.albumDetail, query: { id: item.id } })"
      >
        <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="0" />
        <div class="text-xs mt-2 truncate">{{ item.name }}</div>
        <div class="mt-1 text-xs text-slate-400 truncate">{{ item.publishTime.toDate() }}</div>
      </div>
    </div>
    <div class="flex justify-center py-5" v-if="list.length > 0 && !pageData.noMore">
      <el-button :loading="pageData.loading" class="text-center w-full" @click="loadMore" link
        >加载更多</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Album } from '@/models/album'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { computed, onMounted, reactive, ref } from 'vue'
import { useArtistAlbum } from '@/utils/api'
import { useRouter } from 'vue-router'
import { Pages } from '@/router/pages'

const router = useRouter()
const props = defineProps<{ id: number }>()
const list = ref<Album[]>([])
const pageData = reactive({
  limit: 30,
  page: 1,
  loading: false,
  noMore: false
})
const offset = computed(() => {
  if (pageData.page === 1) return 0
  return list.value.length + pageData.limit
})

const getData = async () => {
  try {
    pageData.loading = true
    const { hotAlbums } = await useArtistAlbum(props.id, pageData.limit, offset.value)
    if (pageData.page === 1) {
      list.value = hotAlbums
    } else {
      list.value.push(...hotAlbums)
    }
    if (hotAlbums.length < pageData.limit) pageData.noMore = true
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

onMounted(async () => {
  getData()
})
</script>

<style scoped lang="scss"></style>
