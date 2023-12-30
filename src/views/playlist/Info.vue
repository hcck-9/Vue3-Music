<template>
  <div class="flex items-stretch">
    <img
      :src="playlist.coverImgUrl"
      alt=""
      class="w-40 h-40 object-cover rounded-xl flex-shrink-0"
    />
    <div class="pl-5 py-1 flex flex-col justify-between">
      <div>
        <div class="font-bold text-2xl">{{ playlist.name }}</div>
        <div class="flex items-center pt-3 pb-2 text-dc text-xs">
          <el-avatar size="small" :src="playlist.creator.avatarUrl" round />
          <span class="ml-2 text-sm">
            {{ playlist.creator.nickname }}
          </span>
          <div class="flex gap-x-3 ml-5">
            <div v-for="tag in playlist.tags" :key="tag" class="hover-text">#{{ tag }}</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text="playlist.description" :end="90" />
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
import { PlayOne, Like, More } from '@icon-park/vue-next'
import type { PlayListDetail } from '@/models/playlist'
import MoreText from '@/components/common/MoreText.vue'
import IconPark from '@/components/common/IconPark.vue'

defineProps<{
  playlist: PlayListDetail
  playAll?: () => void
}>()
</script>

<style scoped lang="scss"></style>
