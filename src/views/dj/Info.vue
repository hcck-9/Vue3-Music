<template>
  <div class="flex items-stretch">
    <img :src="djDetail.coverUrl" alt="" class="w-40 h-40 object-cover rounded-xl flex-shrink-0" />
    <div class="pl-5 py-1 flex flex-col justify-between">
      <div>
        <div class="flex">
          <IconPark :icon="Fm" class="mr-1 py-1" size="22" />
          <div class="font-bold text-2xl">
            {{ djDetail.name }}
          </div>
        </div>
        <div class="flex items-center pt-3 pb-2 text-dc text-xs">
          <el-avatar size="small" :src="djDetail.dj.avatarUrl" round />
          <span class="ml-2 text-sm">
            {{ djDetail.dj.nickname }}
          </span>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText
            :text="djDetail.description"
            :end="90"
            :hasTag="true"
            :tag="djDetail.categoryName"
          />
        </div>
      </div>
      <div class="flex items-center gap-x-2 mt-5 justify-self-stretch">
        <button class="w-32 button-outline button" @click="playAll">
          <IconPark :icon="PlayOne" class="mr-1" size="22" />
          <span>播放全部</span>
        </button>
        <button class="w-32 button-outline button-sm">
          <IconPark :icon="Like" class="mr-1" size="18" />
          <span>收藏</span>
        </button>
        <button class="button-outline button-sm w-8">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayOne, Like, More, Fm } from '@icon-park/vue-next'
import MoreText from '@/components/common/MoreText.vue'
import IconPark from '@/components/common/IconPark.vue'
import type { Program } from '@/models/dj'

defineProps<{
  djDetail: Program
  playAll?: () => void
}>()
</script>

<style scoped lang="scss"></style>
