<template>
  <div>
    <Title title="今日优选" />
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5">
      <div v-for="item in DJTodayPreferred" :key="item.id">
        <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="item.playCount" />
        <div class="truncate text-xs mt-2">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { onMounted, toRefs } from 'vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useDJStore } from '@/stores/dj'

const { DJTodayPreferred } = toRefs(useDJStore())

const { getDJTodayPreferred } = useDJStore()

onMounted(() => {
  getDJTodayPreferred()
})
</script>

<style scoped lang="scss"></style>
