<template>
  <div>
    <div>
      <Title title="优秀新电台" :hasRight="true" />
      <div class="grid grid-flow-row grid-cols-3 xl:grid-cols-6 gap-5">
        <div v-for="item in DJNewExcellentList.slice(0, 6)" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
          <div class="truncate text-xs mt-2 text-main leading-5">{{ item.name }}</div>
          <div class="text-gray-400 truncate text-xs mt-2">{{ item.rcmdtext }}</div>
        </div>
      </div>
    </div>
    <div>
      <Title title="最热电台排行榜" :hasRight="true" />
      <div class="grid grid-flow-row grid-cols-5 lg:grid-cols-10 gap-5">
        <div v-for="item in DJCategoryPopularRadioList.slice(0, 30)" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
          <div class="truncate text-xs mt-2 text-main leading-5">{{ item.name }}</div>
          <div class="text-gray-400 truncate text-xs mt-2">{{ item.rcmdtext }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
import { useDJStore } from '@/stores/dj'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { toRefs } from 'vue'

const { DJNewExcellentList, DJCategoryPopularRadioList } = toRefs(useDJStore())
</script>

<style scoped lang="scss"></style>
