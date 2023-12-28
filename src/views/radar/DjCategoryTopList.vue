<template>
  <div class="grid grid-cols-2 gap-20 px-10">
    <div class="flex justify-between items-end u-title">
      <Title title="节目排行榜" :hasRight="false" />
      <div class="flex items-center py-2 hover:underline text-main cursor-pointer text-xs">
        更多 >
      </div>
    </div>
    <div class="flex justify-between items-end u-title">
      <Title title="付费精品" :hasRight="false" />
      <div class="flex items-center py-2 hover:underline text-main cursor-pointer text-xs">
        更多 >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue'
</script>

<style scoped lang="scss">
.u-title {
  height: 40px;
  border-bottom: 2px solid #94a3b8;
}
</style>
