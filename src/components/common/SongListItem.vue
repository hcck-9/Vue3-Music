<template>
  <div
    class="flex song-item items-center w-full hover-bg-main"
    :class="{ playing: id === song.id }"
    @dblclick="play(song.id)"
  >
    <div class="flex flex-1 items-center flex-shrink-0 justify-between pr-5">
      <div class="flex items-center flex-1 w-10 flex-shrink-0">
        <IconPark
          :icon="Like"
          size="16"
          class="text-gray-500 mr-1 cursor-pointer hover:text-red-400"
        />
        <div class="truncate" style="max-width: 75%">
          <small>{{ song.name }}</small>
        </div>
        <IconPark
          v-if="song.mv > 0"
          :icon="PlayTwo"
          size="16"
          class="ml-2 text-orange-400 cursor-pointer"
          @click="router.push({ name: Pages.mvDetail, query: { id: song.mv } })"
        />
      </div>
      <div class="hidden icon-action flex-shrink-0">
        <div class="flex gap-x-2 items-center text-gray-400 ml-2">
          <IconPark
            :icon="PlayOne"
            size="20"
            :stroke-width="3"
            class="hover-text"
            title="播放"
            @click="play(song.id)"
          />
          <IconPark :icon="Add" size="16" :stroke-width="3" class="hover-text" title="添加到" />
          <IconPark :icon="DownTwo" size="16" :stroke-width="3" class="hover-text" title="下载" />
          <IconPark
            :icon="MoreTwo"
            size="16"
            :stroke-width="3"
            class="hover-text"
            title="更多操作"
          />
        </div>
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showAlName, 'w-1/3': !showAlName }"
      v-if="showArName"
    >
      <div class="w-9/12 truncate">
        <small
          class="truncate max-w-full hover-text"
          @click="
            router.push({
              name: Pages.artistDetail,
              query: { id: props.dj ? song.artists.first().id : song.ar.first().id }
            })
          "
        >
          {{ props.dj ? song.artists.first().name : song.ar.first().name }}
        </small>
      </div>
    </div>
    <div
      class="flex-shrink-0"
      :class="{ 'w-1/4': showArName, 'w-1/3': !showArName }"
      v-if="showAlName"
    >
      <div class="w-9/12 truncate">
        <small
          class="truncate max-w-full hover-text"
          @click="
            router.push({
              name: Pages.albumDetail,
              query: { id: props.dj ? song.album.id : song.al.id }
            })
          "
        >
          {{ props.dj ? song.album.name : song.al.name }}
        </small>
      </div>
    </div>
    <div class="w-20 flex-shrink-0">
      <div class="w-20 truncate">
        <small>{{
          props.dj ? useFormatDuring(song.duration / 1000) : useFormatDuring(song.dt / 1000)
        }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormatDuring } from '@/utils/number'
import { Add, DownTwo, Like, MoreTwo, PlayOne, PlayTwo } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import type { Song } from '@/models/song'
import { usePlayerStore } from '@/stores/player'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { Pages } from '@/router/pages'

const router = useRouter()
const props = defineProps<{
  song: Song
  showArName?: boolean
  showAlName?: boolean
  dj?: boolean
}>()

const { play } = usePlayerStore()
const { id } = storeToRefs(usePlayerStore())
</script>

<style scoped lang="scss">
.song-item {
  @apply py-2.5 pl-0.5;
  &:hover {
    .icon-action {
      @apply inline-block;
    }
  }
}

.playing {
  @apply bg-emerald-50 dark:bg-stone-800;
}
</style>
