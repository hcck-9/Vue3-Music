<template>
  <div class="flex items-stretch">
    <img
      :src="artistDetail.artist.cover"
      alt=""
      class="w-44 h-44 object-cover rounded-full flex-shrink-0"
    />
    <div class="flex pl-5 flex-col justify-between flex-1">
      <div class="text-2xl font-bold">{{ artistDetail.artist.name }}</div>
      <div class="text-xs text-gray-500 leading-normal mt-2">
        {{ artistDetail.artist.briefDesc.substring(0, 90) }}...
      </div>
      <div class="mt-2 flex text-xs gap-x-5 text-slate-500">
        <div>
          单曲数：<span>{{ artistDetail.artist.musicSize }}</span>
        </div>
        <div>
          专辑数：<span>{{ artistDetail.artist.albumSize }}</span>
        </div>
        <div>
          MV数：<span>{{ artistDetail.artist.mvSize }}</span>
        </div>
      </div>
      <div class="flex gap-x-2 items-center justify-self-stretch mt-2">
        <button class="w-32 button">
          <IconPark :icon="Plus" size="18" class="mr-1" />
          <span>关注</span>
        </button>
        <button class="w-32 button-outline">
          <IconPark :icon="Fm" size="18" class="mr-1" />
          <span>歌手电台</span>
        </button>
        <button class="w-8 button-outline">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Fm, More } from '@icon-park/vue-next'

import IconPark from '@/components/common/IconPark.vue'
import { ArtistDetail } from '@/models/artist_detail'

defineProps<{
  artistDetail: ArtistDetail
}>()
</script>

<style scoped lang="scss"></style>
