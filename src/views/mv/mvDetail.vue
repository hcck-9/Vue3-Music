<template>
  <div class="p-5">
    <div class="flex gap-x-5">
      <div class="flex-1">
        <video class="aspect-video w-full" :src="mvUrl?.url" controls autoplay />
        <div class="mt-5 text-main">{{ mvDetail?.name }}</div>
        <div class="mt-2 flex items-center">
          <div class="text-sm">
            演唱：
            <span
              v-for="item in mvDetail?.artists"
              class="text-zinc-500 cursor-pointer mr-2"
              @click="router.push({ name: Pages.artistDetail, query: { id: item.id } })"
            >
              {{ item.name }}</span
            >
          </div>
          <div class="ml-3 text-sm">{{ useNumberFormat(mvDetail?.playCount) }}次播放</div>
          <div class="ml-5 text-sm">发布时间： {{ mvDetail?.publishTime }}</div>
          <div class="ml-5 flex text-xs" v-if="mvDetail?.videoGroup">
            <div class="ml-2 hover-text" v-for="tag in mvDetail.videoGroup" :key="tag.id">
              #{{ tag.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="hidden w-80 flex-shrink-0 xl:block">
        <div>大家都在看</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MvDetail, MvUrl } from '@/models/mv'
import { usePlayerStore } from '@/stores/player'
import { useMvDetail, useMvUrl } from '@/utils/api'
import { onMounted, onUnmounted, ref } from 'vue'
import { Pages } from '@/router/pages'
import { useRoute, useRouter } from 'vue-router'
import { useNumberFormat } from '@/utils/number'
const router = useRouter()

const id = Number(useRoute().query.id)

const { setPlay, setPause } = usePlayerStore()

const mvUrl = ref<MvUrl>()
const mvDetail = ref<MvDetail>()

onMounted(async () => {
  mvUrl.value = await useMvUrl(id)
  mvDetail.value = await useMvDetail(id)

  setPause()
})

onUnmounted(() => {
  setTimeout(() => {
    setPlay()
  }, 1000)
})
</script>

<style scoped lang="scss"></style>
