<template>
  <div class="mt-2">
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-8">
      <div
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ 'item-1': index === 0 }"
        @click="router.push({ name: 'mvDetail', query: { id: item.id } })"
      >
        <CoverPlay
          :name="item.name"
          :pic-url="item.imgurl16v9"
          :play-count="item.playCount"
          video
          show-play-count
        />
        <div class="text-xs mt-2 truncate hover-text">{{ item.name }}</div>
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
import CoverPlay from '@/components/common/CoverPlay.vue'
import { computed, onMounted, reactive, ref } from 'vue'
import { useArtistMv } from '@/utils/api'
import { useRouter } from 'vue-router'
import type { Mv } from '@/models/artist'

const router = useRouter()
const props = defineProps<{ id: number }>()
const list = ref<Mv[]>([])
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
    const { mvs } = await useArtistMv(props.id, pageData.limit, offset.value)
    if (pageData.page === 1) {
      list.value = mvs
    } else {
      list.value.push(...mvs)
    }
    if (mvs.length < pageData.limit) pageData.noMore = true
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
  await getData()
})
</script>

<style scoped lang="scss"></style>
