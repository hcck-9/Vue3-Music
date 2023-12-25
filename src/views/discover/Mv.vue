<template>
  <div>
    <Title title="推荐MV" />
    <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
      <div v-for="item in personalizedMv" :key="item.id">
        <CoverPlay
          video
          :name="item.name"
          :pic-url="item.picUrl"
          :play-count="item.playCount"
          show-play-count
        />
        <div class="truncate text-xs mt-2">{{ item.name }}</div>
        <div class="truncate text-xs mt-1.5 text-slate-400">
          <small>{{ item.artistName }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { onMounted, toRefs } from 'vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useVideoStore } from '@/stores/video'

const { personalizedMv } = toRefs(useVideoStore())

const { getPersonalizedMv } = useVideoStore()

onMounted(() => {
  getPersonalizedMv()
})
</script>

<style scoped lang="scss"></style>
