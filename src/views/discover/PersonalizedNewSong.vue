<template>
  <div>
    <Title title="推荐新音乐" />
    <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer">
      <div
        v-for="(item, index) in personalizedNewSong"
        :key="index"
        @click="play(item.id)"
        class="hover-bg-view transition-all flex items-center"
      >
        <img :src="item.picUrl" class="w-12 h-12 object-cover rounded flex-shrink-0" />
        <div class="flex px-2 text-xs flex-auto flex-col w-1/3">
          <div class="text-xs flex-1 truncate text-main">{{ item.name }}</div>
          <div class="mt-1.5 text-dc">{{ item.song.artists[0].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'

import { useMusicStore } from '@/stores/music'
import { onMounted, toRefs } from 'vue'
import { usePlayerStore } from '@/stores/player'
const { play } = usePlayerStore()

const { personalizedNewSong } = toRefs(useMusicStore())

const { getPersonalizedNewSong } = useMusicStore()

onMounted(() => {
  getPersonalizedNewSong()
})
</script>

<style scoped lang="scss"></style>
