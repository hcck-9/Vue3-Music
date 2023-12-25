<template>
  <div>
    <Title title="你的专属歌单" />
    <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-5 gap-5 2xl:grid-cols-10">
      <div v-for="(item, index) in personalized.sampleSize(10)" :key="index">
        <CoverPlay
          :name="item.name"
          :pic-url="item.picUrl"
          :play-count="item.playCount"
          show-play-count
        />
        <div class="mt-2 text-xs text-main truncate">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useMusicStore } from '@/stores/music'
import { onMounted, toRefs } from 'vue'

const { personalized } = toRefs(useMusicStore())

const { getPersonalized } = useMusicStore()

onMounted(() => {
  getPersonalized()
})
</script>

<style scoped lang="scss"></style>
